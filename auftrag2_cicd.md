# C2: CI/CD mit GitHub Actions

## 1. Einführung

### Das Problem: Manuelle Builds skalieren nicht

In kleinen Projekten funktioniert der manuelle Ansatz noch: lokal bauen, lokal testen, manuell deployen. Sobald aber jemand auf `main` pusht, bricht dieses Vorgehen zusammen. Niemand weiss, ob der aktuelle Stand wirklich funktioniert, bis jemand manuell testet.

CI/CD macht aus einem **"Ich hoffe, es funktioniert"** ein **"Ich weiss, es funktioniert"**.

**Typische Probleme ohne Pipeline:**
- Fehler werden erst spät entdeckt, oft erst beim manuellen Testen oder in Produktion
- Verschiedene Entwickelnde haben unterschiedliche lokale Konfigurationen
- Build- und Deploy-Schritte sind nicht dokumentiert und nur im Kopf einzelner Personen
- Integration von Code verschiedener Teammitglieder führt regelmässig zu Konflikten

### Pipeline-Visualisierung

Eine typische CI/CD-Pipeline durchläuft mehrere Stages. Jede Stage muss erfolgreich sein, bevor die nächste startet. Wenn der Lint-Step fehlschlägt, laufen Test, Build und Deploy **gar nicht erst**. Das spart Zeit und Ressourcen.

### CI vs. CD vs. CD

| Begriff | Steht für | Was passiert |
|---|---|---|
| CI | Continuous Integration | Jeder Push wird automatisch gebaut und getestet. Fehler werden sofort erkannt. |
| CD | Continuous Delivery | Nach erfolgreichem CI ist die App **bereit** für Deployment. Ein Mensch gibt den letzten Klick. |
| CD | Continuous Deployment | Kein manueller Schritt mehr. Jeder erfolgreiche Build auf `main` geht automatisch in Produktion. |

**Für den Auftrag C2 reicht Continuous Delivery.** Die Pipeline muss den Code automatisch bauen, testen und ein Docker Image pushen.

---

## 2. Konzepte und Aufbau

### Workflow, Job, Step, Action: Die Hierarchie

GitHub Actions ist hierarchisch aufgebaut:

| Konzept | Erklärung |
|---|---|
| Workflow | Eine YAML-Datei in `.github/workflows/`. Definiert **wann** und **was** passiert. |
| Job | Eine logische Einheit innerhalb eines Workflows. Jeder Job läuft auf einem eigenen Runner (frische Maschine). |
| Step | Ein konkreter Befehl oder eine Action innerhalb eines Jobs. Steps laufen sequentiell. |
| Action | Eine wiederverwendbare Komponente. Z.B. `actions/checkout@v4` checkt den Code aus. Muss nicht selbst geschrieben werden. |

> Jeder **Job** bekommt einen frischen Runner. Dateien aus dem vorherigen Job sind nicht automatisch verfügbar – dafür gibt es Artifacts oder `actions/checkout@v4`.

### Runner

Ein **Runner** ist die Maschine, auf der ein Job ausgeführt wird:

| Runner | Beschreibung | Typischer Einsatz |
|---|---|---|
| ubuntu-latest | Linux-VM (Standard) | Die meisten Projekte, Docker-Builds |
| windows-latest | Windows-VM | .NET-Projekte, Windows-spezifische Builds |
| macos-latest | macOS-VM | iOS/macOS-Apps, Swift-Projekte |
| Self-hosted | Eigene Maschine | Spezielle Hardware, private Netzwerke, Kostenkontrolle |

> **Tipp:** Für die meisten Projekte reicht `ubuntu-latest`. Dieser Runner ist am schnellsten verfügbar und hat die beste Docker-Unterstützung.

### Artifacts und Caching

**Artifacts** sind Dateien, die zwischen Jobs geteilt oder nach dem Workflow heruntergeladen werden können:

```yaml
# Artifact hochladen
- uses: actions/upload-artifact@v4
  with:
    name: build-output
    path: dist/

# Artifact in anderem Job herunterladen
- uses: actions/download-artifact@v4
  with:
    name: build-output
```

Typische Anwendungsfälle: Build-Ergebnisse weitergeben, Test-Reports archivieren, Coverage-Berichte speichern.

**Caching** beschleunigt die Pipeline, indem häufig genutzte Dateien (z.B. `node_modules`) wiederverwendet werden:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"
    # Cached automatisch node_modules basierend auf package-lock.json
```

Ohne Cache dauert `npm ci` typischerweise 30–60 Sekunden. Mit Cache sind es oft nur 5–10 Sekunden.

### Matrix Strategy

Mit einer Matrix läuft derselbe Job **parallel auf mehreren Konfigurationen**, z.B. verschiedene Node-Versionen:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
```

Das erzeugt **3 parallele Jobs** – einen für Node 18, einen für Node 20 und einen für Node 22.

### Environment Secrets vs. Repository Secrets

| Art | Scope | Wann nutzen? |
|---|---|---|
| Repository Secrets | Verfügbar in allen Jobs des Repos | API-Keys, Docker-Registry-Passwörter |
| Environment Secrets | Nur in Jobs mit bestimmtem `environment` | Produktions-Datenbank-URL, Cloud-Credentials |

Environment Secrets bieten zusätzliche Schutzfunktionen:
- **Required Reviewers**: Eine Person muss den Deploy bestätigen
- **Wait Timer**: z.B. 5 Minuten Wartezeit vor dem Deploy
- **Branch Protection**: Nur `main` darf in `production` deployen

### Workflow-Struktur: Vollständiges Beispiel

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

# Wann soll die Pipeline laufen?
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

# Was soll passieren?
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Code auschecken
        uses: actions/checkout@v4

      - name: Node.js einrichten
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Abhängigkeiten installieren
        run: npm ci

      - name: Linting
        run: npm run lint

      - name: Tests ausführen
        run: npm test

  build:
    runs-on: ubuntu-latest
    needs: test  # Wartet auf erfolgreichen Test-Job
    steps:
      - name: Code auschecken
        uses: actions/checkout@v4

      - name: Docker Image bauen
        run: docker build -t myapp:${{ github.sha }} .

      - name: Image in GHCR pushen
        run: |
          echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
          docker tag myapp:${{ github.sha }} ghcr.io/${{ github.repository }}:latest
          docker push ghcr.io/${{ github.repository }}:latest
```

Die wichtigsten Elemente:
- `on`: Definiert die Trigger (`push`, `pull_request`, `schedule`, `workflow_dispatch`)
- `jobs`: Enthält alle Jobs, die parallel oder sequentiell (`needs`) laufen
- `steps`: Einzelne Schritte, entweder `uses` (vorgefertigte Action) oder `run` (Shell-Befehl)
- `secrets`: Verschlüsselte Variablen, Zugriff mit `${{ secrets.NAME }}`

---

## 3. Pipelines, Registries und Best Practices

### Zentrale Konzepte im Überblick

| Konzept | Erklärung |
|---|---|
| Trigger | Wann die Pipeline läuft: `push`, `pull_request`, `schedule`, `workflow_dispatch` (manuell) |
| Jobs | Unabhängige Einheiten, die parallel oder sequentiell (`needs`) laufen |
| Steps | Einzelne Schritte innerhalb eines Jobs, entweder `uses` (vorgefertigte Action) oder `run` (Shell-Befehl) |
| Secrets | Verschlüsselte Variablen unter Settings > Secrets. Zugriff mit `${{ secrets.NAME }}` |
| Artifacts | Dateien, die zwischen Jobs oder als Download geteilt werden können |

### Branch-Strategie

In einem Team wird **nie direkt auf `main`** gearbeitet. Der typische Ablauf:

1. Feature-Branch erstellen: `git checkout -b feature/add-login`
2. Code schreiben und pushen
3. Pull Request gegen `main` öffnen
4. Pipeline läuft automatisch (Tests, Lint, Build)
5. Nur bei grüner Pipeline wird gemerged

Bei Pull Requests laufen nur Tests und Lint. Deployment-Steps laufen nur bei einem direkten Push auf `main`.

### Secrets verwalten

Niemals Passwörter, API-Keys oder Tokens im Code speichern. Ablage via **Repository Secrets**:

1. Repository > Settings > Secrets and variables > Actions
2. "New repository secret" > Name und Wert eingeben
3. Im Workflow: `${{ secrets.MEIN_SECRET }}`

Das vorinstallierte `GITHUB_TOKEN` reicht für die meisten Aktionen (GHCR-Push, Status-Checks). Für externe Services werden eigene Secrets benötigt.

### Fail Fast mit `needs`

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps: [...]

  build:
    needs: test  # Läuft nur, wenn test erfolgreich
    runs-on: ubuntu-latest
    steps: [...]

  deploy:
    needs: build  # Läuft nur, wenn build erfolgreich
    if: github.ref == 'refs/heads/main'  # Nur auf main
    runs-on: ubuntu-latest
    steps: [...]
```

Wenn die Tests fehlschlagen, wird weder gebaut noch deployed. Spart Ressourcen und gibt schnelles Feedback.

### Docker Image Registry

#### Was ist eine Container Registry?

Eine Container Registry ist ein zentraler Speicherort für Docker Images, vergleichbar mit npm für Node-Pakete oder Maven für Java-Bibliotheken.

#### GHCR vs. Docker Hub

| Eigenschaft | GHCR (ghcr.io) | Docker Hub |
|---|---|---|
| Anbieter | GitHub | Docker Inc. |
| Authentifizierung | `GITHUB_TOKEN` (automatisch in Actions) | Separater Docker-Hub-Account nötig |
| Private Images | Kostenlos (an Repo-Visibility gekoppelt) | 1 privates Image kostenlos, danach kostenpflichtig |
| Integration | Direkt in GitHub (Packages-Tab) | Separate Plattform |
| URL-Format | `ghcr.io/username/image:tag` | `docker.io/username/image:tag` |
| Empfehlung | Für GitHub-basierte Projekte ideal | Für öffentliche Images / Open Source |

Für dieses Modul empfiehlt sich **GHCR**, weil die Integration mit GitHub Actions nahtlos ist und keine zusätzlichen Credentials benötigt werden.

#### Image Tagging Strategy

| Tag | Beispiel | Wann nutzen? |
|---|---|---|
| latest | myapp:latest | Immer der neueste Build. **Nicht** für Produktion empfohlen, da unklar ist, welche Version dahinter steckt. |
| Semantic Version | myapp:1.2.3 | Klare Versionierung. Ideal für Releases. |
| Git SHA | myapp:a1b2c3d | Jeder Commit hat ein eindeutiges Image. Perfekt für Nachvollziehbarkeit. |
| Branch + SHA | myapp:main-a1b2c3d | Kombination aus Kontext und Eindeutigkeit. |

Multi-Tag-Beispiel:

```yaml
- name: Image bauen und taggen
  run: |
    IMAGE=ghcr.io/${{ github.repository }}
    docker build \
      -t $IMAGE:latest \
      -t $IMAGE:${{ github.sha }} \
      -t $IMAGE:v1.2.3 \
      .
    docker push $IMAGE --all-tags
```

### Alternativen zu GitHub Actions

| Tool | Stärke | Wann sinnvoll? |
|---|---|---|
| GitLab CI/CD | Alles-in-einem-Plattform (Git + CI + Registry + Monitoring) | Wenn GitLab statt GitHub genutzt wird |
| Jenkins | Extrem flexibel, riesiges Plugin-Ökosystem | Grosse Unternehmen mit komplexen Pipelines |
| CircleCI | Schnelle Builds, gutes Caching | Performance-kritische Projekte |
| Azure DevOps | Integration mit Microsoft-Ökosystem | .NET-Projekte, Azure Cloud |
| Bitbucket Pipelines | In Bitbucket integriert | Teams, die Atlassian-Produkte nutzen |

### Weiterführende Ressourcen

- [GitHub Actions Dokumentation (offiziell)](https://docs.github.com/en/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Docker: Build and push images with GitHub Actions](https://docs.docker.com/build/ci/github-actions/)
- [Fireship: GitHub Actions Tutorial (~12 Min.)](https://www.youtube.com/watch?v=eB0nUzAI7M8)
- [The Twelve-Factor App: Build, Release, Run](https://12factor.net/build-release-run)

---

## 4. Auftrag C2

### Eckdaten

- **Zeitbudget:** ca. 3 bis 4 Stunden
- **Max. Punkte:** 10
- **Abgabe:** via Teams bis **17.05.2026, 23:59 Uhr**

### Ausgangslage

Ein Build auf dem eigenen Laptop beweist wenig. Produktionsreife entsteht, wenn jeder Push automatisch gebaut, getestet und als Docker Image verfügbar gemacht wird. In diesem Auftrag wird eine GitHub-Actions-Pipeline aufgesetzt, die Code aus einem Repository automatisch baut, testet und ein Docker Image in eine Container Registry pusht.

### Auftrag

Am Ende steht ein Git-Repository mit einem funktionierenden Workflow unter `.github/workflows/`. Bei jedem Push auf den Hauptbranch läuft die Pipeline automatisch durch. Als Basis kann die Anwendung aus C1, ein eigenes Projekt oder eine einfachere Applikation verwendet werden.

### Technische Anforderungen

Die Pipeline besteht mindestens aus den drei Stages **Build**, **Test** und **Push**. Der Build erzeugt ein Docker Image, der Test-Step führt automatisierte Tests aus, und Push lädt das Image in eine Container Registry (GHCR oder Docker Hub).

Images werden mit mindestens **zwei Tags** versehen: einem menschenlesbaren (z.B. `latest` oder eine Semantic Version) und einem eindeutigen (z.B. Git SHA oder Branch+SHA).

Weitere Abweichungen sind möglich, sofern sie im README begründet sind.

### Bewertung

**Umsetzung (4 Punkte)**
Bewertet wird, ob die Pipeline bei einem Push auf den Hauptbranch fehlerfrei durchläuft, alle technischen Anforderungen erfüllt sind und keine Secrets im Code enthalten sind.

**Dokumentation (3 Punkte)**

Für 3 Punkte enthält die Dokumentation (max. 4 Seiten) folgende Aspekte:
1. Was wurde umgesetzt und aus welchem Grund wurde diese Lösung gewählt
2. Architektur: Aufbau der Komponenten inkl. Diagramm
3. Setup-Anleitung, mit der Dritte das Setup reproduzieren können
4. Code- und Konfigurationsausschnitte mit Erklärung
5. Begründung der wichtigsten Entscheidungen
6. Reflexion der Learnings inkl. dem, was rückblickend anders gelöst würde

| Punkte | Kriterien |
|---|---|
| 3 | Alle sechs Aspekte |
| 2 | Vier der sechs Aspekte |
| 1 | Zwei der sechs Aspekte |
| 0 | Weniger als zwei |

**Screencast oder Live-Demo (3 Punkte)**

Dauer: 2 bis 5 Minuten. Für 3 Punkte werden gezeigt:
1. Ein Push auf das Repository mit ausgelöster Pipeline
2. Die Anwendung ist erreichbar und funktioniert
3. Änderungs-Zyklus: Code ändern, Build, aktualisierte Anwendung

| Punkte | Kriterien |
|---|---|
| 3 | Alle drei Aspekte |
| 2 | Zwei der drei Aspekte |
| 1 | Einer der drei Aspekte |
| 0 | Kein Screencast oder Demo (max. 5 Punkte erreichbar) |

### Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklärt und nachvollziehbar macht, riskiert Punktabzug.

### Abgabe

Abgabe via Teams bis **17.05.2026, 23:59 Uhr**. Enthalten sind:
- Git-Repository-Link mit vollständigem Code und `README.md`
- Dokumentation (max. 4 Seiten)
- Screencast oder Live-Demo (2–5 Minuten)