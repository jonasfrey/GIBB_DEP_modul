# DEP – Modul Deployment FS26 (HFI_DEP)

*Vollständige Extraktion aus smartlearn (gibb HF Informatik), Lernumgebung Deployment FS26.*

---

## 00_Informationen

### Modulleitfaden

**Dateien:**
- [DEP_Modulleitfaden.pdf](https://smartlearn-hfi.gibb.ch/media/161e9b5ba72f590ee6591c.pdf) (application/pdf, 448 KB)

### Technologien

## **Übersicht**

| Technologie | Beschreibung | Einsatz im Modul  |
| **Docker Desktop** | Container-Plattform inkl. Docker Compose V2 | Containerisierung, Multi-Service-Apps  |
| **Git & GitHub** | Versionsverwaltung und Code-Hosting | CI/CD mit GitHub Actions, Code-Verwaltung  |
| **GitHub Actions** | CI/CD-Plattform | Automatisierte Pipelines  |
| **Cloud-Plattformen** | Railway, Render, Fly.io, Vercel | Cloud-Deployment  |
| **Kubernetes** | Container-Orchestrierung | Lokales K8s mit minikube  |
| **VS Code** | Code-Editor | Empfohlene IDE mit Docker/YAML Extensions  |

## **Arbeitsumgebung**

Du arbeitest primär auf deinem eigenen Rechner. Docker Desktop muss vor dem zweiten Unterrichtstag installiert sein.

Für die Kubernetes-Challenge kann optional minikube oder Docker Desktop Kubernetes verwendet werden.

 

Als Alternative stehen in smartlearn die vmKL1 (Kali-Desktop) und die vmLR1 (Alpine Linux) zum Lösen der Aufgaben bereit.

 

 

Alle Tools sind kostenlos verfügbar. Für Cloud-Plattformen reicht jeweils der Free-Tier.

### Organisation

# **Organisation des Unterrichts**

### **Themenübersicht**

 

 

**Thema 1: Deployment Grundlagen (Tag 1)**

- Was ist Deployment, warum ist es wichtig?
- Environments und Environment-Variablen
- Build-Prozesse und Artefakte
- Deployment-Pipeline und CI/CD
- Die 12-Factor App
- Infrastructure as Code
- Deployment-Strategien
- Docker: Grundlagen, Dockerfile, Container

**Thema 2: Deployment-Aufträge (Tag 2-3, LB1)**

- Docker Compose: Multi-Service-Architekturen
- CI/CD mit GitHub Actions
- Cloud-Plattform Deployment
- Kubernetes
- Eigene Idee

**Thema 3: Vertiefungsprojekt (Tag 4-5, LB2)**

- Vertiefung eines Wahlthemas
- Produktionsreifes Deployment
- Dokumentation und Screencast

**Tag 6: Abschluss**

- Besprechung LB2-Ergebnisse
- Vorbereitung Diplomprüfung (DEP / WEB2)

## **Modularbeitsplan**

| KW | Tag | Lektionen | Inhalt | Bemerkungen  |
| KW17 | 1 | 01–06 | **Thema 1:** Deployment Grundlagen | Theorie + Praxis: Erste Container bauen. Aufträge Tag 1.  |
| KW18 | 2 | 07–12 | **Thema 2:** Deployment-Tools & Challenge-Start | Theorie & Demos zu Docker Compose, CI/CD, Cloud, K8s. Start der Challenges.  |
| KW19 | 3 | 13–18 | **Thema 2:** Selbständige Arbeit Challenges | Fernunterricht. Eigenständiges Arbeiten. Coaching via Teams.  |
| KW21 | 4 | 19–24 | **Thema 3:** Challenge-Review & Projektstart | Besprechung LB1-Note. Kick-off Vertiefungsprojekt (LB2).  |
| KW22 | 5 | 25–30 | **Thema 3:** Projektarbeit & Coaching | Kurzer Input Security/Monitoring. Rest: Arbeitszeit mit Coaching.  |
| KW23 | 6 | 31–36 | **Abschluss** | Besprechung LB2-Ergebnisse. Vorbereitung DIplomprüfungen  |

### **Konkrete Daten**

| Datum | Format | Thema | Schwerpunkt  |
| **25.04** | Präsenz | Grundlagen Deployment | Theorie: Environments, Builds, 12-Factor, Docker. Praxis: Erste Container bauen.  |
| **02.05** | Präsenz | Deployment-Tools & Challenge-Start | Theorie & Demos. Wahl und Start der Challenges.  |
| **09.05** | Fernunterricht | Selbständige Arbeit | Eigenständiges Arbeiten an den Challenges.  |
| **23.05** | Präsenz | Challenge-Review & Projektstart | Besprechung LB1-Ergebnisse. Kick-off Vertiefungsprojekt.  |
| **30.05** | Präsenz | Projektarbeit & Coaching | Input Security/Monitoring. Arbeitszeit mit Coaching.  |
| **06.06** | Präsenz | Abschluss | Besprechung LB2. Vorbereitung DIplomprüfungen (DEP / WEB2)  |

## **Tagesstruktur**

Jeder Präsenztag ist in zwei Blöcke à 3 Lektionen gegliedert.

| Block | Zeit | Dauer  |
| Block 1 | 08:00 – 10:15 | 3 Lektionen (3 × 45 Min.)  |
| Pause | 10:15 – 10:45 | 30 Minuten  |
| Block 2 | 10:45 – 13:00 | 3 Lektionen (3 × 45 Min.)  |

### Leistungsbeurteilungen

### LB1 · Deployment-Aufträge (40%)

Einzelarbeit. Aus fünf Deployment-Themen (Docker Compose, CI/CD, Cloud, Kubernetes, Eigene Idee) werden mindestens drei gewählt und umgesetzt. Pro Auftrag sind maximal 10 Punkte erreichbar, insgesamt also 30 Punkte.

 

Abgabe via Teams bis 17.05.2026, 23:59. Pro Auftrag enthalten sind der Git-Repository-Link, die Dokumentation und der Screencast.

Punkteverteilung pro Auftrag

| Kriterium | Punkte | Beschreibung  |
| Umsetzung | 4 | Funktionalität, erfüllte Anforderungen, saubere Konfiguration, keine Secrets im Code  |
| Dokumentation | 3 | Umsetzung beschrieben inkl. relevanter Scripts und Code, Architektur, Entscheidungen, Learnings  |
| Screencast oder Live-Demo | 3 | Video (2 bis 5 Minuten) oder Live-Demo zeigt funktionierendes Setup  |

Ohne Screencast oder Live-Demo sind maximal 5 Punkte pro Auftrag erreichbar.

### LB2 · Vertiefungsprojekt (60%)

Einzel- oder Partnerarbeit. Eine eigene Anwendung wird produktionsreif deployed, inklusive CI/CD-Pipeline, Dokumentation und Screencast von 5 bis 10 Minuten. Maximal 30 Punkte gemäss Bewertungsraster (siehe Kapitel 03 Projektarbeit).

 

Abgabe via Teams bis 30.05.2026, 23:59. Enthalten sind der Git-Repository-Link, das README und der Screencast. Die Abnahme erfolgt zwingend per Screencast.

 

**Bewertungsraster LB2**

| Bereich | Punkte | Beschreibung  |
| Deployment-Setup | 12 | Containerisierung, CI/CD-Pipeline, Konfiguration und Secrets, Deployment-Ziel  |
| Dokumentation und Screencast | 9 | README, Screencast, Entscheidungen und Learnings  |
| Qualität und Best Practices | 9 | Security, Reproduzierbarkeit, Komplexität und Ambition  |
| **Total** | **30** |    |

### Besondere Bestimmungen

| Regel | Details  |
| Verspätete Abgaben | Pro angefangenem Tag −0.5 Noten auf die betroffene Teilnote  |
| Plagiate und Kopien | Note 1.0 für die betroffene Teilnote  |
| KI-Tools | Erlaubt, im README zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug  |

### Voraussetzungen und Setup

## **Benötigte Tools**

Bitte stelle sicher, dass folgende Tools **vor dem zweiten Unterrichtstag** installiert und funktionsfähig sind:

| Tool | Download / Info | Hinweis  |
| **Docker Desktop** | [docker.com/products/docker-desktop](https://docker.com/products/docker-desktop) | Inkl. Docker Compose V2. Aktiviere Kubernetes in den Settings (optional).  |
| **Git** | [git-scm.com](https://git-scm.com/) | Falls nicht schon vorhanden.  |
| **GitHub Account** | [github.com](https://github.com/) | Für CI/CD mit GitHub Actions. Kostenlos.  |
| **VS Code (empfohlen)** | [code.visualstudio.com](https://code.visualstudio.com/) | Mit Extensions: Docker, YAML, GitHub Actions.  |
| **Node.js / Python / .NET** | je nach Technologie | Mindestens eine Runtime für deine Applikation.  |
| **minikube (optional)** | [minikube.sigs.k8s.io](https://minikube.sigs.k8s.io/) | Für Kubernetes-Challenge.  |
| **Screencast-Tool** | [loom.com](https://loom.com/) oder [OBS](https://obsproject.com/) | Für Abgabe-Screencasts. Loom ist am einfachsten.  |

## **Starter-App**

Am ersten Tag baust du im Unterricht eine eigene simple Web-Applikation, die du für alle weiteren Aufträge als Basis verwenden kannst. Alternativ darfst du auch ein bestehendes Projekt verwenden.

### **Vorbereitete Starter-App**

Für den Code-Review am ersten Tag steht eine fertige App zur Verfügung:

 

**Link:** [github.com/ndum/dep-starter-app](https://github.com/ndum/dep-starter-app)

 

`docker pull ghcr.io/ndum/dep-starter-app:latest`

`docker run -p 3000:3000 ghcr.io/ndum/dep-starter-app:latest`

 

Alternativ:

`git clone https://github.com/ndum/dep-starter-app `

`cd dep-starter-app && npm install && npm start`

## **Empfohlene VS Code Extensions**

| Extension | Beschreibung  |
| **Docker** | Dockerfile-Syntax, Container-Verwaltung  |
| **YAML** | YAML-Syntax für docker-compose.yml und K8s-Manifeste  |
| **GitHub Actions** | Workflow-Syntax und -Validierung  |
| **GitLens** | Erweiterte Git-Funktionen  |
| **REST Client** | API-Testing direkt in VS Code  |

## 01_Grundlagen

### Was ist Deployment?

## **Was ist Deployment?**

Deployment ist der Prozess, eine Applikation dorthin zu bringen, wo sie gebraucht wird. Das klingt simpel, aber in der Praxis ist es einer der fehleranfälligsten Teile der Softwareentwicklung.

Stell dir vor, du hast eine Web-App geschrieben. Sie läuft auf deinem Rechner. Jetzt soll sie für 10'000 Nutzende im Internet erreichbar sein. Was brauchst du?

- Einen Server (oder mehrere), auf dem die App läuft
- Eine Datenbank, die nicht dein lokales SQLite ist
- HTTPS, damit niemand Passwörter im Klartext abfängt
- Einen Mechanismus, um Updates einzuspielen, ohne dass die App offline geht
- Einen Plan, wenn etwas schiefgeht

Modernes Deployment automatisiert all das: das Bauen, Testen, Ausliefern und Überwachen einer Applikation. **Wenn irgendein Schritt davon manuell passiert, ist er eine Fehlerquelle.**

## **Der DevOps Lifecycle**

Deployment ist ein Teil eines grösseren Kreislaufs: dem **DevOps Lifecycle**. Dieser wird oft als Unendlichkeitsschleife (Infinity Loop) dargestellt:

 

*

 

Quelle: https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg*

Die linke Seite (Dev) umfasst:

- **Plan:** Was soll gebaut werden?
- **Code:** Implementierung
- **Build:** Kompilieren, Docker Image erstellen
- **Test:** Automatisierte Tests

Die rechte Seite (Ops) umfasst:

- **Release:** Versionierung, Freigabe
- **Deploy:** Auf den Server bringen
- **Operate:** Betrieb sicherstellen
- **Monitor:** Überwachen, Fehler erkennen

Der Kreis schliesst sich: Monitoring-Erkenntnisse fliessen zurück in die Planung.

## **Deployment im Wandel der Zeit**

Die Art, wie wir Software deployen, hat sich in den letzten 30 Jahren grundlegend verändert.

### **Früher: FTP und Hoffen**

 

 

- Dateien per **FTP** auf den Server geschoben
- Server manuell konfiguriert (Apache, PHP, MySQL, jedes Mal von Hand)
- Kein Rollback: Wenn etwas schiefging, musste man die alten Dateien aus dem Backup holen
- Kein Testing: "Es funktioniert auf meinem Rechner" war das höchste Qualitätskriterium

### **Heute: Container, CI/CD, Cloud**

 

 

- Code wird in **Git** versioniert
- **CI/CD-Pipelines** bauen, testen und deployen automatisch
- **Docker-Container** machen die App portabel und reproduzierbar
- **Cloud-Plattformen** skalieren automatisch
- **Rollback** per Knopfdruck (oder automatisch)

### **Morgen: GitOps, Serverless, Edge**

| Trend | Was bedeutet das?  |
| **GitOps** | Git ist die einzige Wahrheitsquelle. Änderungen an der Infrastruktur werden per Pull Request gemacht. Tools wie ArgoCD synchronisieren automatisch.  |
| **Serverless** | Kein Server-Management mehr. Du deployst Funktionen (z.B. AWS Lambda, Vercel Functions), die nur bei Bedarf laufen und pro Aufruf abgerechnet werden.  |
| **Edge Computing** | Code läuft nicht in einem zentralen Rechenzentrum, sondern weltweit verteilt, nahe an den Nutzenden. (z.B. Cloudflare Workers, Deno Deploy)  |
| **Infrastructure as Code (IaC)** | Server, Netzwerke, Datenbanken: alles wird in Code beschrieben (Terraform, Pulumi) und versioniert wie Anwendungscode.  |

 

> 
**Wichtig:** Auch wenn sich die Werkzeuge ändern, bleiben die Grundprinzipien gleich: Automatisierung, Reproduzierbarkeit, Trennung von Code und Konfiguration.

## **Warum Deployment-Kompetenz keine Kür ist**

Die Zeiten, in denen Entwickelnde Code schreiben und ein separates «Ops-Team» sich um den Rest kümmert, sind in den meisten Unternehmen vorbei. Wer heute Software entwickelt, muss wissen, wie diese Software in die Produktion gelangt.

 

Das gilt besonders in kleineren Teams und KMU, wo es kein dediziertes Infrastruktur-Team gibt.

### **Typische Situationen, die du ohne Deployment-Wissen nicht lösen kannst**

| Situation | Was passiert | Was du wissen müsstest  |
| **«Bei mir läuft's»** | Deine App läuft lokal, aber auf dem Server nicht. Du hast keine Ahnung, warum. | Environments, Docker, Konfiguration  |
| **Keine Dokumentation** | Du musst ein Sicherheitsupdate einspielen, aber die letzte Person, die deployed hat, hat das Unternehmen vor drei Monaten verlassen. | Infrastructure as Code, Automatisierung  |
| **Kein Monitoring** | Ein Kunde meldet um 9 Uhr morgens, dass die App nicht erreichbar ist. Du weisst nicht, seit wann. | Logging, Monitoring, Alerting  |
| **Secrets auf GitHub** | Du pushst ein Update und die Datenbank-Passwörter landen versehentlich auf GitHub. Public Repository. | Konfigurationsmanagement, 12-Factor  |

 

All das sind reale Szenarien, die in der Praxis regelmässig vorkommen. In diesem Modul lernst du, sie zu vermeiden.

## **Der Unterschied zwischen «Deployment» und «DevOps»**

Diese Begriffe werden oft vermischt, meinen aber nicht dasselbe:

| Begriff | Bedeutung  |
| **Deployment** | Der konkrete Vorgang, eine App auf einem Server verfügbar zu machen  |
| **DevOps** | Eine Kultur und Sammlung von Praktiken, die Entwicklung (Dev) und Betrieb (Ops) zusammenbringt  |
| **CI/CD** | Automatisierte Pipelines für Integration, Auslieferung und Deployment  |
| **SRE** | Site Reliability Engineering — ein Ansatz von Google, der Betrieb als Software-Problem behandelt  |

 

**DevOps** ist die Philosophie. **Deployment** ist ein konkreter Teil davon. In diesem Modul fokussierst du dich auf die **praktischen Werkzeuge und Techniken**, nicht auf die Organisationstheorie.

## **Eine kurze Geschichte des Deployments**

| Ära | Wie deployed wurde | Problem  |
| **1990er** | FTP-Upload auf den Webserver | «Wer hat die Datei überschrieben?»  |
| **2000er** | Shell-Scripts, manuelle Server-Konfiguration | Funktioniert nur, wenn die richtige Person da ist  |
| **2010er** | VMs, Puppet/Chef, erste CI-Systeme | Komplex, langsam, teuer  |
| **2013+** | Docker, Container-Revolution | Leichtgewichtig, portabel, reproduzierbar  |
| **2015+** | Kubernetes, Cloud-native | Orchestrierung für grosse Systeme  |
| **Heute** | GitOps, IaC, serverless | Infrastruktur als Code, alles automatisiert  |

 

Docker hat das Deployment nicht «einfach» gemacht. Es hat die Komplexität verschoben. Statt «wie konfiguriere ich den Server?» lautet die Frage jetzt «wie orchestriere ich 50 Container?». Aber: Die Grundprobleme (Reproduzierbarkeit, Konfiguration, Monitoring) bleiben dieselben.

## **Video-Empfehlungen**

- [«What is DevOps?», GitHub (8 Min.)](https://www.youtube.com/watch?v=kBV8gPVZNEE)
- [«DevOps CI/CD Explained in 100 Seconds», Fireship](https://www.youtube.com/watch?v=scEDHsr3APg)

## **Vertiefung**

Wenn du tiefer einsteigen willst:

 

- [The Twelve-Factor App](https://12factor.net/): 12 Prinzipien für moderne Applikationen. Pflichtlektüre für jeden, der Software in Produktion bringt.
- [DevOps Roadmap (roadmap.sh)](https://roadmap.sh/devops): interaktive Übersicht aller DevOps-Themen
- [GitHub: What is DevOps?](https://resources.github.com/devops/): kompakte Erklärung mit Praxisbezug
- [Fireship: DevOps explained in 100 Seconds](https://www.youtube.com/watch?v=scEDHsr3APg): schneller Videoeinstieg
- [Atlassian: DevOps Guide](https://www.atlassian.com/devops): ausführlicher Guide mit vielen Diagrammen

### Environments (Umgebungen)

## **Warum mehrere Umgebungen?**

In professionellen Projekten existiert eine Applikation nicht nur einmal, sondern in mehreren **Umgebungen** gleichzeitig. Jede hat einen anderen Zweck.

 

Stell dir vor, du arbeitest an einem Online-Shop. Du willst eine neue Zahlungsmethode einbauen. Würdest du das direkt auf dem System testen, über das echte Kunden gerade einkaufen? Natürlich nicht. Deshalb gibt es separate Umgebungen.

## **Die vier Standard-Umgebungen**

| Umgebung | Zweck | Wer nutzt sie? | Daten  |
| **Development (DEV)** | Lokale Entwicklung, Experimente | Du als Entwickler/in | Fake-Daten, lokale DB  |
| **Testing / QA** | Automatisierte und manuelle Tests | CI-Pipeline, QA-Team | Testdaten  |
| **Staging (STG)** | Produktionsnahe Validierung | Product Owner, Stakeholder | Kopie der Produktionsdaten (anonymisiert)  |
| **Production (PROD)** | Live-System für echte Nutzende | Endbenutzer/innen | Echte Daten  |

### **Environment Flow**

So fliesst dein Code durch die Umgebungen:

 

Jede Umgebung ist eine **Qualitätsschleuse**: Nur Code, der eine Stufe bestanden hat, darf zur nächsten weiter.

## **Das zentrale Prinzip**

**Der Code ist überall derselbe. Nur die Konfiguration ändert sich.**

 

Das bedeutet: Du baust **ein** Docker Image und deployst es in alle Umgebungen. Die Unterschiede (Datenbank-URL, API-Keys, Log-Level) kommen von aussen, über **Environment-Variablen**.

## **Environment-Variablen**

Environment-Variablen (kurz: **Env-Vars**) sind der Schlüssel zur Trennung von Code und Konfiguration. Sie existieren auf Betriebssystem-Ebene und werden von der App zur Laufzeit gelesen.

### **Beispiel: Dieselbe App, verschiedene Umgebungen**

```
# Lokal (Entwicklung)
DATABASE_URL=postgres://localhost:5432/myapp_dev
LOG_LEVEL=debug
API_KEY=dev-key-not-secret
PORT=3000

# Auf dem Testserver
DATABASE_URL=postgres://test-db.internal:5432/myapp_test
LOG_LEVEL=info
API_KEY=test-api-key-12345
PORT=3000

# Auf dem Produktionsserver
DATABASE_URL=postgres://prod-db.example.com:5432/myapp
LOG_LEVEL=warn
API_KEY=sk-prod-xxxxxxxxxxxxx
PORT=8080
```

### **So liest deine App die Variablen**

**Node.js:**

```js
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const logLevel = process.env.LOG_LEVEL || 'info';

if (!dbUrl) {
  console.error('DATABASE_URL ist nicht gesetzt!');
  process.exit(1);
}
```

**Python:**

```python
import os

port = int(os.environ.get("PORT", 3000))
db_url = os.environ["DATABASE_URL"]  # Crasht, wenn nicht gesetzt
log_level = os.environ.get("LOG_LEVEL", "info")
```

**C# / .NET:**

```csharp
var port = Environment.GetEnvironmentVariable("PORT") ?? "3000";
var dbUrl = Environment.GetEnvironmentVariable("DATABASE_URL")
    ?? throw new Exception("DATABASE_URL ist nicht gesetzt!");
```

## **.env-Dateien**

Für die lokale Entwicklung ist es unpraktisch, Env-Vars jedes Mal manuell zu setzen. Deshalb gibt es `.env`-Dateien:

```
# .env (lokal, NICHT im Git!)
DATABASE_URL=postgres://localhost:5432/myapp_dev
LOG_LEVEL=debug
PORT=3000
SECRET_KEY=mein-lokales-geheimnis
```

**Wichtig:** `.env`-Dateien gehören in `.gitignore`. **Immer.** Was du stattdessen ins Repository committen solltest, ist eine `.env.example` mit Platzhaltern:

```
# .env.example (im Git, damit andere wissen, welche Variablen nötig sind)
DATABASE_URL=postgres://localhost:5432/myapp_dev
LOG_LEVEL=debug
PORT=3000
SECRET_KEY=<hier-eigenen-key-eintragen>
```

### **env vs .env.local vs .env.production: die Varianten**

Viele Frameworks unterstützen mehrere `.env`-Dateien mit unterschiedlicher Priorität:

| Datei | Im Git? | Zweck | Lädt wann?  |
| `.env` | Ja (Defaults) | Standard-Werte für alle Umgebungen | Immer  |
| `.env.local` | **Nein** | Lokale Überschreibungen (persönliche Secrets) | Lokal, überschreibt `.env`  |
| `.env.development` | Ja | Defaults spezifisch für Entwicklung | Wenn `NODE_ENV=development`  |
| `.env.production` | Ja | Defaults spezifisch für Produktion | Wenn `NODE_ENV=production`  |
| `.env.production.local` | **Nein** | Lokale Prod-Überschreibungen | Wenn `NODE_ENV=production`, überschreibt `.env.production`  |

**Lade-Reihenfolge** (z.B. in Next.js, Vite, Create React App):

```
.env                       ──► Basis-Defaults
.env.local                 ──► Lokale Überschreibungen (höhere Priorität)
.env.[environment]         ──► Umgebungsspezifisch
.env.[environment].local   ──► Umgebungsspezifisch + lokal (höchste Priorität)
```

### **Vollständiges .env.example mit Kommentaren**

So sieht eine gute `.env.example` aus, mit Erklärungen für jede Variable:

```
# ===========================================
# App-Konfiguration
# ===========================================

# Port, auf dem der Server lauscht
PORT=3000

# Umgebung: development | production | test
NODE_ENV=development

# ===========================================
# Datenbank
# ===========================================

# PostgreSQL Connection String
# Format: postgres://user:password@host:port/database
DATABASE_URL=postgres://postgres:postgres@localhost:5432/myapp_dev

# ===========================================
# Authentifizierung
# ===========================================

# Geheimer Schlüssel für JWT-Tokens (mind. 32 Zeichen, zufällig generiert)
# Generieren: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=<hier-zufälligen-string-eintragen>

# ===========================================
# Externe Services
# ===========================================

# API-Key für den E-Mail-Service (z.B. SendGrid, Resend)
EMAIL_API_KEY=<api-key-vom-anbieter>

# URL des Frontend (für CORS-Konfiguration)
FRONTEND_URL=http://localhost:5173

# ===========================================
# Optionale Konfiguration
# ===========================================

# Log-Level: debug | info | warn | error
LOG_LEVEL=debug

# Redis-URL (nur nötig, wenn Caching aktiviert)
# REDIS_URL=redis://localhost:6379
```

### **Wie verschiedene Frameworks Env-Vars laden**

| Framework / Sprache | Methode | Datei  |
| **Node.js** (dotenv) | `require('dotenv').config()` | `.env`  |
| **Next.js / Vite** | Automatisch, kein Setup nötig | `.env`, `.env.local`, `.env.production`  |
| **Python** (python-dotenv) | `load_dotenv()` | `.env`  |
| **Django** (django-environ) | `environ.Env()` | `.env`  |
| **.NET** | `appsettings.json` + `appsettings.Development.json` | JSON statt `.env`  |
| **Spring Boot** (Java) | `application.properties` / `application-dev.properties` | Properties-Dateien  |

In .NET werden Umgebungskonfigurationen oft nicht über `.env`-Dateien, sondern über `appsettings.json` und `appsettings.{Environment}.json` gelöst. Das Prinzip ist aber dasselbe: Code und Konfiguration trennen.

### **Der Unterschied auf einen Blick**

| Datei | Im Git? | Enthält echte Werte? | Zweck  |
| `.env` | **Nein** | Ja | Lokale Konfiguration  |
| `.env.example` | **Ja** | Nein (Platzhalter) | Dokumentation der benötigten Variablen  |

## **Env-Vars in Docker**

Wenn du einen Container startest, übergibst du Env-Vars mit dem `-e`-Flag:

```shell
# Einzelne Variable
docker run -e PORT=8080 myapp

# Mehrere Variablen
docker run \
  -e PORT=8080 \
  -e DATABASE_URL=postgres://db:5432/myapp \
  -e LOG_LEVEL=warn \
  myapp

# Aus einer Datei
docker run --env-file .env myapp
```

**Achtung:** `docker run --env-file` liest die Datei vom Host-System. Die `.env`-Datei wird **nicht** ins Image kopiert (sofern dein `.dockerignore` korrekt ist).

## **Typische Fehler**

| Fehler | Warum problematisch | Lösung  |
| Secrets im Code (`const apiKey = "sk-..."`) | Landen im Git-Repository, für alle sichtbar | Env-Vars verwenden  |
| `.env` ins Git committet | Zugangsdaten in der History, schwer zu entfernen | `.gitignore` von Anfang an  |
| Kein Default für `PORT` | App crasht in Umgebungen ohne explizite Port-Config | `process.env.PORT || 3000`  |
| Verschiedene Code-Branches pro Umgebung | Code-Drift, Merge-Konflikte | Ein Image, verschiedene Configs  |
| Env-Vars im Dockerfile hartcodiert | Werte sind im Image eingebrannt | Zur Laufzeit übergeben  |

### **Weitere häufige Fehler im Detail**

**Verschiedene Datenbanken in Dev und Prod:**

 

`DEV:  SQLite   (einfach, keine Installation)`
`PROD: PostgreSQL (leistungsstark, andere SQL-Syntax)`

 

`Problem: Queries, die in SQLite funktionieren, scheitern in PostgreSQL.`
`        Z.B. SQLite kennt kein "RETURNING *", kein JSONB, keine Arrays.`

 

`Lösung:  Auch lokal PostgreSQL verwenden, z.B. via Docker:`
`        docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres:16`

 

**Hardcodierte URLs:**

 

`// FALSCH: funktioniert nur auf deinem Rechner`
`const API_URL = "http://localhost:3000/api";`

 

`// RICHTIG: kommt aus der Umgebung`
`const API_URL = process.env.API_URL || "http://localhost:3000/api";`

 

**Fehlende **`**.gitignore**`**-Einträge:**

`# Diese Dateien gehören IMMER in .gitignore:`
`.env`
`.env.local`
`.env.*.local`
`*.pem`
`*.key`

 

## **Video-Empfehlungen**

- [«Environment Variables explained», Fireship (5 Min.)](https://www.youtube.com/watch?v=GlVr5CbNqxk)
- [«What are Environment Variables, and how do I use them?», Jacob Sorber (5 Min.)](https://www.youtube.com/watch?v=GlVr5CbNqxk)

## **Vertiefung**

Wenn du tiefer einsteigen willst:

- [The Twelve-Factor App: Config](https://12factor.net/config): das ursprüngliche Manifest zur Trennung von Code und Konfiguration
- [dotenv (npm)](https://www.npmjs.com/package/dotenv): die populärste Library für .env-Dateien in Node.js
- [Vite: Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html): wie Vite mit .env-Dateien umgeht
- [Docker Docs: Environment variables in Compose](https://docs.docker.com/compose/environment-variables/): offizielle Referenz

### Build-Prozesse und Artefakte

## **Was ist ein Build?**

Ein **Build-Prozess** verwandelt deinen Quellcode in etwas, das auf einem Server laufen kann. Was dabei rauskommt, nennt man ein **Artefakt**.

 

Du schreibst TypeScript, der Server versteht nur JavaScript. Du schreibst JSX, der Browser versteht nur HTML und JS. Du schreibst Java, die JVM braucht Bytecode. Der Build-Schritt schliesst diese Lücke.

## **Was passiert beim Build?**

 

| Technologie | Was passiert beim Build? | Artefakt  |
| **React / Next.js** | TypeScript kompiliert, Code gebündelt, optimiert | Statische Dateien (HTML, JS, CSS)  |
| **Node.js API** | Dependencies installiert, ggf. TypeScript kompiliert | Node-App mit `node_modules`  |
| **Java / Spring Boot** | Code kompiliert, JAR gepackt | `.jar`-Datei  |
| **C# / .NET** | Code kompiliert, DLLs erzeugt | `.dll`-Dateien / Publish-Ordner  |
| **Go** | Code kompiliert | Ein einzelnes Binary  |
| **Python / Flask** | Dependencies installiert | Python-App mit `venv`  |

 

## **Das universelle Artefakt: Docker Image**

Egal welche Technologie du verwendest: am Ende steht ein Docker Image. Ein Docker Image ist ein universelles Artefakt, das überall gleich läuft.

 

Alles, was die App zum Laufen braucht, in einem Paket. Ohne Docker müsstest du auf jedem Server manuell sicherstellen, dass die richtige Node-Version, die richtigen System-Libraries und die richtigen Dependencies installiert sind. Mit Docker sagst du: **«Hier ist das Image. Starte es.»**

## **Reproducible Builds**

Ein Build ist **reproduzierbar**, wenn er bei gleichem Input immer den gleichen Output liefert. Das klingt selbstverständlich, ist es aber nicht.

### **Was macht einen Build reproduzierbar?**

| Kriterium | Schlecht | Gut  |
| **Dependencies** | `npm install` (nimmt neueste kompatible Version) | `npm ci` (nutzt exakte Versionen aus `package-lock.json`)  |
| **Build-Umgebung** | «Auf meinem Laptop mit Node 18» | `FROM node:24-alpine` im Dockerfile  |
| **Zeitabhängigkeit** | Build-Ergebnis hängt vom aktuellen Datum ab | Build ist determiniert durch Git-Commit  |
| **Lokale Abhängigkeiten** | Build braucht Dateien, die nur lokal existieren | Alles im Repository oder explizit deklariert  |

### **npm install vs. npm ci**

 

`# npm install — NICHT für Builds verwenden`
`# - Kann package-lock.json verändern`
`# - Kann neuere kompatible Versionen installieren`
`# - Nicht deterministisch`
`npm install`

 

`# npm ci — FÜR Builds verwenden`
`# - Liest exakt aus package-lock.json`
`# - Löscht vorhandene node_modules zuerst`
`# - Schlägt fehl, wenn package-lock.json nicht passt`
`# - Deterministisch und schneller`
`npm ci --only=production`

 

> 
**Merke:** In einem Dockerfile gehört **immer** `npm ci`, nie `npm install`. Wenn du `npm install` im Dockerfile siehst, ist das ein Code-Smell.

## **Lock-Dateien**

Lock-Dateien fixieren die exakten Versionen aller Dependencies (inklusive transitiver Dependencies). Sie sind der Schlüssel zu reproduzierbaren Builds.

| Sprache/Tool | Lock-Datei | Gehört ins Git?  |
| **Node.js (npm)** | `package-lock.json` | **Ja**  |
| **Node.js (yarn)** | `yarn.lock` | **Ja**  |
| **Node.js (pnpm)** | `pnpm-lock.yaml` | **Ja**  |
| **Python (pip)** | `requirements.txt` (mit Versionen) | **Ja**  |
| **Python (poetry)** | `poetry.lock` | **Ja**  |
| **C# / .NET** | `packages.lock.json` | **Ja**  |
| **Go** | `go.sum` | **Ja**  |

**Achtung:** Wenn du `package-lock.json` in `.gitignore` hast, entferne sie sofort. Ohne Lock-Datei ist dein Build nicht reproduzierbar.

## **Build-Artefakte versionieren**

Jedes Artefakt braucht eine eindeutige Kennung. Für Docker Images verwendet man **Tags**:

 

`# Schlecht: "latest" sagt nichts aus`
`docker build -t myapp:latest .`

 

`# Besser: Semantische Version`
`docker build -t myapp:1.2.3 .`

 

`# Am besten: Git-Commit-SHA (eindeutig und nachvollziehbar)`
`docker build -t myapp:a1b2c3d .`

 

`# In der CI-Pipeline oft kombiniert`
`docker build -t myapp:1.2.3 -t myapp:a1b2c3d .`

 

| Tagging-Strategie | Vorteil | Nachteil  |
| `latest` | Einfach | Nicht nachvollziehbar, welche Version läuft  |
| `v1.2.3` | Klar und verständlich | Manuelles Hochzählen nötig  |
| `a1b2c3d` (Git SHA) | Automatisch, eindeutig, nachvollziehbar | Nicht menschenlesbar  |
| `v1.2.3` + `a1b2c3d` | Beides kombiniert | Zwei Tags pro Build  |

## **Der Build in der Pipeline**

In einer CI/CD-Pipeline wird der Build **automatisch** ausgelöst, typischerweise bei jedem Push:

 

**Wichtig:** Der Build passiert in der Pipeline, nicht auf deinem Laptop. Dein Laptop ist zum Entwickeln da, nicht zum Bauen von Produktions-Artefakten.

### Die Deployment-Pipeline

## **Was ist eine Deployment-Pipeline?**

Eine **Deployment-Pipeline** (auch **CI/CD-Pipeline**) ist eine automatisierte Abfolge von Schritten, die deinen Code vom Repository in die Produktionsumgebung bringt.

 

Stell dir ein Fliessband in einer Fabrik vor: Jede Station prüft oder verarbeitet das Produkt. Fällt an irgendeiner Station etwas auf, wird das Band gestoppt. Kein defektes Produkt verlässt die Fabrik.

## **Die 8 Schritte einer Pipeline**

| Schritt | Was passiert | Beispiel  |
| **1. Code pushen** | Du pushst auf GitHub | `git push origin main`  |
| **2. Automatische Prüfung** | Die Pipeline wird ausgelöst | GitHub Actions Workflow startet  |
| **3. Lint** | Code-Qualität prüfen | ESLint, Prettier, Stylelint  |
| **4. Test** | Automatische Tests laufen | Unit Tests, Integration Tests  |
| **5. Build** | Artefakt erstellen | `docker build` → Docker Image  |
| **6. Deploy** | Artefakt in die Zielumgebung ausrollen | Image auf Server starten  |
| **7. Verify** | Healthchecks, Smoke Tests | `curl /api/health` → 200 OK?  |
| **8. Monitor** | Metriken und Logs überwachen | Fehlerrate, Antwortzeiten  |

Der entscheidende Punkt: Jeder Schritt läuft automatisch. Wenn ein Schritt fehlschlägt, stoppt die Pipeline. Kein fehlerhafter Code erreicht die Produktion.

## **CI vs. CD: Was ist was?**

Diese drei Begriffe werden oft durcheinandergeworfen. Hier die klare Abgrenzung:

### **Continuous Integration (CI)**

**CI** bedeutet: Jede Code-Änderung wird häufig in den Hauptbranch integriert, und jede Integration löst automatisch einen Build und Tests aus.

 

 

**Ziel:** Integrationsprobleme früh erkennen — nicht erst am Freitagabend vor dem Release.

### **Continuous Delivery**

 

**Continuous Delivery** bedeutet: Der Code ist nach jedem erfolgreichen Pipeline-Durchlauf **bereit für die Produktion**, aber das tatsächliche Deployment erfordert einen **manuellen Klick**.

 

### **Continuous Deployment**

 

**Continuous Deployment** bedeutet: Jede Änderung, die alle Tests besteht, wird **automatisch** in die Produktion deployed. Kein manueller Schritt.

 

## **Vergleich: Continuous Delivery vs. Continuous Deployment**

| Kriterium | Continuous Delivery | Continuous Deployment  |
| **Tests bestanden → Produktion?** | Nein, manueller Trigger nötig | Ja, automatisch  |
| **Menschliche Kontrolle** | Ja, vor Produktion | Nein (nur durch Tests)  |
| **Release-Frequenz** | Wöchentlich bis täglich | Mehrmals täglich  |
| **Anforderung an Tests** | Hoch | Sehr hoch  |
| **Risiko** | Geringer (manueller Check) | Höher (aber schnellerer Rollback)  |
| **Verbreitung** | Sehr häufig | Eher bei grossen Tech-Firmen  |

 

**In der Praxis** verwenden die meisten Teams **Continuous Delivery**, also automatische Pipeline bis Staging, manueller Trigger für Produktion. Das gibt die Sicherheit eines letzten menschlichen Checks, ohne auf Automatisierung zu verzichten.

## **Beispiel: GitHub Actions Workflow**

So sieht eine minimale Pipeline als GitHub Actions Workflow aus:

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 1. Code auschecken
      - uses: actions/checkout@v4

      # 2. Node.js einrichten
      - uses: actions/setup-node@v4
        with:
          node-version: '22'

      # 3. Dependencies installieren
      - run: npm ci

      # 4. Lint
      - run: npm run lint

      # 5. Tests
      - run: npm test

      # 6. Docker Image bauen
      - run: docker build -t myapp:${{ github.sha }} .

      # 7. Image in Registry pushen
      - run: docker push myapp:${{ github.sha }}

      # 8. Deployen (vereinfacht)
      - run: echo "Deploy to production..."
```

**Hinweis:** Dies ist ein vereinfachtes Beispiel. In einem späteren Kapitel baust du eine vollständige Pipeline mit GitHub Actions.

## **Pipeline-Tools im Überblick**

| Tool | Anbieter | Besonderheit  |
| **GitHub Actions** | GitHub | Direkt in GitHub integriert, gratis für Public Repos  |
| **GitLab CI** | GitLab | Teil von GitLab, YAML-basiert  |
| **Jenkins** | Open Source | Self-hosted, sehr flexibel, komplexe Konfiguration  |
| **CircleCI** | CircleCI | Cloud-basiert, schnelle Builds  |
| **Azure DevOps** | Microsoft | Integriert in Azure-Ökosystem  |

**In diesem Modul** arbeitest du mit **GitHub Actions**, weil es direkt in GitHub integriert ist und du kein separates Tool aufsetzen musst.

## **Warum Pipelines keine Kür sind**

Ohne Pipeline:

 

 

Mit Pipeline:

 

| Ohne Pipeline | Mit Pipeline  |
| «Ich hab vergessen, die Tests laufen zu lassen» | Tests laufen automatisch  |
| «Wer hat das zuletzt deployed?» | Jedes Deployment ist im Git-Log  |
| «Die Produktion ist kaputt, was hat sich geändert?» | Jeder Commit ist nachvollziehbar  |
| «Ich deploy am Freitagnachmittag» | Jeder Commit kann deployed werden  |
| «Das Rollback dauert 2 Stunden» | Rollback = vorheriges Image deployen  |

## **Feedback-Loops**

Eine gute Pipeline gibt dir **schnell Feedback**. Wenn ein Test fehlschlägt, willst du das in Minuten wissen, nicht in Stunden.

 

 

**Faustregel:** Schnelle Checks (Lint, Unit Tests) zuerst. Langsame Checks (Integration Tests, E2E) danach. So bekommst du bei einfachen Fehlern sofort Feedback.

## **Video-Empfehlungen**

- 🎬 [«CI/CD In 5 Minutes», Fireship](https://www.youtube.com/watch?v=scEDHsr3APg)
- 🎬 [«GitHub Actions Tutorial», TechWorld with Nana (1h)](https://www.youtube.com/watch?v=R8_veQiYBjI)

### Die 12-Factor App

## **Was ist die 12-Factor App?**

Die **12-Factor App** ist eine Sammlung von Prinzipien für cloud-taugliche Applikationen, formuliert 2011 von den Heroku-Gründern. Sie beschreiben, wie eine App gebaut sein muss, damit sie sich sauber deployen, skalieren und betreiben lässt.

 

Du musst nicht alle zwölf auswendig kennen, aber **sechs davon wirst du in diesem Modul in jedem einzelnen Auftrag direkt anwenden**.

## **Übersicht: Alle 12 Faktoren**

| # | Faktor | Kurzbeschreibung | Relevant für dieses Modul?  |
| I | **Codebase** | Ein Repository, viele Deployments | **Ja**  |
| II | Dependencies | Alle Abhängigkeiten explizit deklarieren | Teilweise  |
| III | **Config** | Konfiguration in Env-Vars | **Ja**  |
| IV | Backing Services | Externe Services als angehängte Ressourcen | Teilweise  |
| V | **Build, Release, Run** | Drei getrennte Phasen | **Ja**  |
| VI | **Processes** | Zustandslose Prozesse | **Ja**  |
| VII | Port Binding | Services über Port-Binding bereitstellen | Teilweise  |
| VIII | Concurrency | Skalierung durch Prozesse | Teilweise  |
| IX | Disposability | Schnell starten, sauber stoppen | Teilweise  |
| X | **Dev/Prod Parity** | Gleiche Umgebungen | **Ja**  |
| XI | **Logs** | Logs als Event-Streams | **Ja**  |
| XII | Admin Processes | Admin-Tasks als einmalige Prozesse | Selten  |

Die sechs **fett markierten** Faktoren schauen wir uns im Detail an.

## **I. Codebase: Ein Repository, viele Deployments**

 

**Die Regel:** Es gibt genau **ein Git-Repository** pro App. Aus diesem Repository wird in alle Umgebungen deployed.

 

**Was das bedeutet:**

- Kein separates Repo für «Production-Code» und «Dev-Code»
- Keine Kopien des Repos auf verschiedenen Servern
- Alle Environments bekommen denselben Code, nur die Konfiguration unterscheidet sich

| Richtig | Falsch  |
| Ein Repo, verschiedene Env-Vars | Verschiedene Repos für verschiedene Umgebungen  |
| Ein Repo, verschiedene Config-Dateien pro Environment | Code wird per Copy-Paste auf Server kopiert  |
| Mono-Repo mit klarer Struktur | Branches als «Umgebungen» missbrauchen  |

## **III. Config: Konfiguration gehört nicht in den Code**

Alles, was sich zwischen Environments unterscheidet, gehört in Environment-Variablen, nicht in den Code.

 

Das betrifft:

- Datenbank-URLs
- API-Keys und Secrets
- Feature-Flags
- Log-Level
- Port-Nummern
- URLs externer Services

### **Der Lackmustest**

Könntest du dein Repository jetzt sofort auf GitHub als Public stellen, ohne dass irgendwelche Zugangsdaten offengelegt werden? Falls nicht, hast du ein Konfigurationsproblem.

### **Beispiel: So nicht, und so richtig**

```js
// FALSCH: Secret im Code
const db = new Database('postgres://admin:p4ssw0rd@db.example.com/myapp');

// RICHTIG: Aus Environment-Variable
const db = new Database(process.env.DATABASE_URL);
```

```js
// FALSCH: Umgebungsabhängige Logik im Code
if (process.env.NODE_ENV === 'production') {
  const dbHost = 'prod-db.example.com';
} else {
  const dbHost = 'localhost';
}

// RICHTIG: Eine Variable, überall gleich gelesen
const dbHost = process.env.DB_HOST;
```

**Achtung:** `NODE_ENV` ist kein Ersatz für saubere Konfiguration. Wenn dein Code voller `if (production)` / `else (development)` Blöcke ist, hast du das Config-Prinzip nicht verstanden.

## **V. Build, Release, Run: Drei getrennte Phasen**

| Phase | Was passiert | Docker-Äquivalent  |
| **Build** | Code wird zum Artefakt kompiliert | `docker build` → Docker Image  |
| **Release** | Artefakt + Konfiguration werden kombiniert | Image + Env-Vars  |
| **Run** | App wird gestartet | `docker run -e ... myapp`  |

 

**Die zentrale Regel:** Diese Phasen sind **strikt getrennt**. Du kannst nicht direkt im laufenden Container Code ändern. Jede Änderung geht durch den gesamten Zyklus: Build → Release → Run.

 

**Warum?** Wenn du Code direkt auf dem Server änderst, ist der Zustand nicht mehr reproduzierbar. Beim nächsten Deployment wird deine Änderung überschrieben. Oder schlimmer: niemand weiss, dass es die Änderung gibt.

## **VI. Processes: Zustandslose Prozesse**

Die App speichert keinen Zustand lokal. Alles Persistente gehört in externe Services (Datenbank, Redis, S3, etc.).

### **Was bedeutet «zustandslos»?**

| Zustandslos (Stateless) | Zustandsbehaftet (Stateful)  |
| Sessions in Redis/DB | Sessions im lokalen Speicher  |
| Uploads auf S3/Blob Storage | Uploads auf dem lokalen Filesystem  |
| Cache in Redis | Cache im Prozess-Speicher  |
| Logs auf stdout | Logs in lokale Dateien  |

 

**Warum ist das wichtig?** Wenn dein Container abstürzt oder ein neuer gestartet wird, geht kein Zustand verloren. Und du kannst die App problemlos auf mehrere Instanzen skalieren.

## **X. Dev/Prod Parity: Gleiche Umgebungen**

**Halte Entwicklung, Staging und Produktion so ähnlich wie möglich.**

| Lücke | Traditionell | 12-Factor  |
| **Zeitliche Lücke** | Wochen zwischen Entwicklung und Deployment | Stunden oder Minuten  |
| **Personelle Lücke** | Entwickler schreiben, Ops deployen | Entwickler deployen selbst  |
| **Tool-Lücke** | SQLite lokal, PostgreSQL in Production | Überall PostgreSQL  |

**Docker löst das elegant:** Derselbe Container, der auf deinem Laptop läuft, läuft auch in Production. Gleiche OS-Version, gleiche Dependencies, gleiche Runtime.

 

`# Lokal`
`docker run -e DATABASE_URL=postgres://localhost/dev myapp:1.0.0`

 

`# Production`
`docker run -e DATABASE_URL=postgres://prod-db/myapp myapp:1.0.0`

 

`# Gleiches Image. Gleiche App. Unterschiedliche Config.`

## **XI. Logs: Logs auf stdout**

**Die App schreibt Logs auf stdout. Punkt.** Sie öffnet keine Log-Dateien, sie rotiert keine Logs, sie sendet keine Logs an einen Server. Das ist nicht ihre Aufgabe.

 

`// RICHTIG: Einfach auf stdout schreiben`
`console.log('Server started on port 3000');`
`console.error('Database connection failed');`

 

`// FALSCH: In Datei schreiben`
`const fs = require('fs');`
`fs.appendFileSync('/var/log/myapp.log', 'Server started\n');`

 

**Die Umgebung entscheidet**, was mit den Logs passiert:

| Umgebung | Was passiert mit stdout?  |
| **Lokal** | Du siehst sie im Terminal  |
| **Docker** | `docker logs <container>`  |
| **Kubernetes** | Automatisch gesammelt und an Logging-Stack weitergeleitet  |
| **Cloud** | An CloudWatch, Stackdriver, etc. weitergeleitet  |

Die App weiss nicht, was mit ihren Logs passiert. Und das ist gut so.

## **Weiterführend**

- 📖 [12factor.net](https://12factor.net/): Die Original-Dokumentation (auch auf Deutsch verfügbar)
- 🎬 [«12 Factor App Explained», IBM Technology (10 Min.)](https://www.youtube.com/watch?v=REbM7RjL0NY)

### Infrastructure as Code

## **Das Snowflake-Server-Problem**

Stell dir vor, du hast einen Produktionsserver. Über Monate hat jemand manuell Software installiert, Konfigurationsdateien angepasst, Firewall-Regeln gesetzt, Cron-Jobs eingerichtet. Niemand hat dokumentiert, was genau gemacht wurde.

 

Jetzt passiert eines der folgenden Dinge:

- Der Server stirbt (Hardware-Defekt, Stromausfall, Ransomware)
- Du brauchst einen zweiten Server für Skalierung
- Ein Security-Audit fragt: «Was läuft auf dem Server?»

**Du hast ein Problem.** Dieser Server ist ein **Snowflake**, einzigartig wie eine Schneeflocke, unmöglich exakt zu reproduzieren.

 

 

**Realität:** In vielen KMU existiert genau dieser Zustand. Der einzige, der den Server wirklich kennt, ist die Person, die ihn aufgesetzt hat — und die hat vielleicht längst die Firma gewechselt.

## **Die Lösung: Infrastructure as Code (IaC)**

**Infrastructure as Code** bedeutet: Du beschreibst deine gesamte Infrastruktur in Dateien, die du im Git-Repository versionierst. Statt manuell Server zu konfigurieren, schreibst du Code, der die Konfiguration automatisch anwendet.

 

## **Vorteile von IaC**

| Vorteil | Erklärung  |
| **Reproduzierbar** | Ein Befehl und die gesamte Infrastruktur steht — identisch, jedes Mal  |
| **Versioniert** | Jede Änderung ist im Git nachvollziehbar: wer, wann, was, warum  |
| **Reviewbar** | Infrastruktur-Änderungen werden wie Code in Pull Requests geprüft  |
| **Testbar** | Konfigurationen können vor dem Deployment validiert werden  |
| **Dokumentiert** | Der Code **ist** die Dokumentation — immer aktuell  |
| **Skalierbar** | Einen Server aufsetzen oder 100 — der Aufwand ist derselbe  |

## **Deklarativ vs. Imperativ**

Es gibt zwei grundlegende Ansätze, Infrastruktur zu beschreiben:

### **Imperativ: «Tue folgendes»**

Du beschreibst die **Schritte**, die ausgeführt werden sollen:

 

`# Imperativ: Schritt für Schritt`
`docker run -d --name app1 myapp`
`docker run -d --name app2 myapp`
`docker run -d --name app3 myapp`

 

**Problem:** Wenn du das Script zweimal ausführst, hast du 6 Container statt 3.

### **Deklarativ: «So soll es aussehen»**

Du beschreibst den **gewünschten Zustand**:

```yaml
# Deklarativ: Gewünschter Zustand (Kubernetes)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3    # ← "Ich will 3 Instanzen"
  template:
    spec:
      containers:
        - name: myapp
          image: myapp:1.0.0
```

**Vorteil:** Egal wie oft du das anwendest: es sind immer 3 Instanzen. Das Tool berechnet selbst, was geändert werden muss.

### **Vergleich**

|   | Imperativ | Deklarativ  |
| **Du sagst** | «Führe diese Schritte aus» | «So soll der Zustand sein»  |
| **Idempotent?** | Nein (doppelt ausführen = doppelte Ressourcen) | Ja (doppelt ausführen = keine Änderung)  |
| **Beispiel** | Shell-Scripts, Ansible (teilweise) | Kubernetes, Terraform, Docker Compose  |
| **Fehleranfällig** | Reihenfolge und Abhängigkeiten manuell | Tool berechnet den Weg zum Zielzustand  |

**Moderne Tools bevorzugen den deklarativen Ansatz.** Du sagst «ich will 3 Instanzen», und das Tool stellt sicher, dass es so ist, egal ob gerade 0, 2 oder 5 laufen.

## **«Cattle, not Pets»: Nutztiere, keine Haustiere**

Diese Metapher beschreibt einen fundamentalen Wandel im Umgang mit Servern:

### **Pets (Haustiere)**

- Server haben Namen wie `db-master-01`, `web-prod-03`
- Jeder Server ist individuell konfiguriert und gepflegt
- Wenn einer ausfällt, gibt es ein ernstes Problem
- Recovery dauert Stunden oder Tage

### **Cattle (Nutztiere)**

 

 

- Server/Container sind austauschbar
- Konfiguration kommt aus Code (IaC)
- Fällt einer aus, wird automatisch ein neuer erstellt
- Kein manuelles Eingreifen nötig
- Recovery in Sekunden

|   | Pets | Cattle  |
| **Identität** | Einzigartig, mit Namen | Austauschbar, mit ID  |
| **Konfiguration** | Manuell, individuell | Automatisch, aus Template  |
| **Bei Ausfall** | Reparieren | Ersetzen  |
| **Skalierung** | Manuell, aufwändig | Automatisch, trivial  |
| **Beispiel** | Bare-Metal-Server | Docker-Container, K8s-Pods  |

**Container und IaC ermöglichen den Cattle-Ansatz.** Du reparierst keine Container, du ersetzt sie.

## **IaC-Tools im Überblick**

| Tool | Zweck | Ansatz  |
| **Docker / Dockerfile** | Container-Images definieren | Deklarativ  |
| **Docker Compose** | Multi-Container-Apps definieren | Deklarativ  |
| **Kubernetes** | Container-Orchestrierung | Deklarativ  |
| **Terraform/OpenTofu** | Cloud-Infrastruktur (VMs, Netzwerke, DBs) | Deklarativ  |
| **Ansible** | Server-Konfiguration | Imperativ/Deklarativ  |
| **Pulumi** | Infrastruktur in Programmiersprachen | Deklarativ  |

**In diesem Modul** arbeitest du primär mit **Docker**, **Docker Compose** und **Kubernetes**, alles deklarative Tools.

## **IaC in der Praxis: Docker Compose**

Ein einfaches Beispiel, wie IaC mit Docker Compose aussieht:

```yaml
# docker-compose.yml: Deine gesamte Infrastruktur in einer Datei

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

```shell
# Ein Befehl: die gesamte Infrastruktur steht
docker compose up -d

# Alles herunterfahren
docker compose down
```

**Das ist Infrastructure as Code:** Die gesamte Infrastruktur ist in einer Datei beschrieben, versioniert im Git, reproduzierbar mit einem Befehl.

## **Video-Empfehlungen**

- 🎬 [«Infrastructure as Code Explained», IBM Technology (8 Min.)](https://www.youtube.com/watch?v=zWw2wuiKd5o)
- 🎬 [«Terraform in 100 Seconds», Fireship](https://www.youtube.com/watch?v=tomUWcQ0P3k)

### Deployment-Strategien

## **Die Kernfrage**

Wie bringst du ein neues Release in die Produktion, **ohne dass Nutzende etwas davon merken**? Es gibt verschiedene Strategien mit unterschiedlichen Risikoprofilen.

 

Keine Strategie ist «die beste». Es kommt auf den Kontext an: Wie kritisch ist die App? Wie gross ist das Team? Wie viel Budget steht zur Verfügung?

## **Big Bang / Recreate**

 

**So funktioniert's:** Alle Instanzen der alten Version werden gestoppt. Dann werden alle Instanzen der neuen Version gestartet.

| Eigenschaft | Bewertung  |
| **Downtime** | Ja — zwischen Stopp und Start  |
| **Rollback** | Langsam (gleicher Prozess rückwärts)  |
| **Komplexität** | Niedrig  |
| **Kosten** | Niedrig  |
| **Rückwärtskompatibilität** | Nicht nötig (nur eine Version läuft)  |

**Wann sinnvoll:** Interne Tools, Systeme mit geplantem Wartungsfenster, Entwicklungsumgebungen.

 

> 
**In Docker Compose** ist das der Standard: `docker compose down && docker compose up -d` stoppt alles und startet alles neu.

## **Rolling Update**

 

**So funktioniert's:** Instanzen werden **schrittweise** ersetzt. Zuerst wird eine Instanz auf die neue Version aktualisiert. Wenn sie gesund ist, kommt die nächste dran.

 

Immer mindestens 2 Instanzen aktiv -- keine Downtime.

 

| Eigenschaft | Bewertung  |
| **Downtime** | Nein, immer sind Instanzen aktiv  |
| **Rollback** | Automatisch (fehlerhafte Instanzen werden nicht weiter ausgerollt)  |
| **Komplexität** | Mittel  |
| **Kosten** | Niedrig (keine doppelte Infrastruktur)  |
| **Rückwärtskompatibilität** | Ja, nötig! (v1 und v2 laufen kurzzeitig parallel)  |

 

**Wann sinnvoll:** Standard für die meisten Web-Apps. Default in Kubernetes.

 

> 
**Wichtig:** Während des Updates laufen v1 und v2 gleichzeitig. Deine App muss **rückwärtskompatibel** sein, insbesondere bei Datenbank-Änderungen. Ein neues DB-Schema, das v1 nicht versteht, bringt alles zum Crashen.

## **Blue/Green Deployment**

 

**So funktioniert's:** Du betreibst zwei identische Umgebungen: **Blue** (aktuelle Version) und **Green** (neue Version). Sobald Green bereit und getestet ist, wird der gesamte Traffic umgeschaltet.

 

| Eigenschaft | Bewertung  |
| **Downtime** | Nein, Traffic wird umgeschaltet  |
| **Rollback** | Sofort (Traffic zurück auf Blue schalten)  |
| **Komplexität** | Hoch (zwei vollständige Umgebungen)  |
| **Kosten** | Hoch (doppelte Infrastruktur)  |
| **Rückwärtskompatibilität** | Nicht nötig (nur eine Version empfängt Traffic)  |

 

**Wann sinnvoll:** Geschäftskritische Apps, wo sofortiger Rollback essentiell ist.

 

**Vorteil:** Du kannst die neue Version in der Green-Umgebung **ausgiebig testen**, bevor du umschaltest. Und wenn etwas schiefgeht, ist der Rollback ein einziger Switch.

## **Canary Deployment**

 

**So funktioniert's:** Ein kleiner Prozentsatz des Traffics (z.B. 5%) wird auf die neue Version geleitet. Du beobachtest Fehlerrate, Antwortzeiten und andere Metriken. Wenn alles gut aussieht, erhöhst du schrittweise auf 100%.

 

| Eigenschaft | Bewertung  |
| **Downtime** | Nein  |
| **Rollback** | Sofort (Traffic zurückleiten)  |
| **Komplexität** | Hoch (Traffic-Steuerung, Monitoring)  |
| **Kosten** | Mittel (nur wenige zusätzliche Instanzen)  |
| **Rückwärtskompatibilität** | Ja, nötig (zwei Versionen laufen parallel)  |

 

**Wann sinnvoll:** Grosse User-Basis, wo ein Fehler viele Nutzende betreffen würde. Braucht gutes Monitoring.

 

> 
**Der Name:** «Canary» kommt von den Kanarienvögeln, die Bergleute in Minen mitnahmen. Wenn der Vogel starb, wussten die Bergleute: Die Luft ist giftig. Die Canary-Instanz ist dein Frühwarnsystem.

## **Vergleich aller Strategien**

| Strategie | Downtime? | Rollback | Komplexität | Kosten | Rückwärtskompatibilität  |
| **Big Bang** | Ja | Langsam | Niedrig | Niedrig | Nicht nötig  |
| **Rolling Update** | Nein | Automatisch | Mittel | Niedrig | Nötig  |
| **Blue/Green** | Nein | Sofort | Hoch | Hoch | Nicht nötig  |
| **Canary** | Nein | Sofort | Hoch | Mittel | Nötig  |

 

## **Welche Strategie wann?**

| Situation | Empfohlene Strategie | Begründung  |
| Lokale Entwicklung | Big Bang | Einfach, Downtime egal  |
| Kleine App, wenige Nutzer | Big Bang / Rolling | Geringer Aufwand  |
| Web-App mit Uptime-Anforderung | Rolling Update | Standard, kein Overhead  |
| Business-kritische App | Blue/Green | Sofortiger Rollback  |
| App mit Millionen Nutzern | Canary | Risiko minimieren  |

## **Für dieses Modul**

Du arbeitest primär mit:

- **Big Bang** (Docker Compose): `docker compose down && docker compose up -d`
- **Rolling Updates** (Kubernetes): Standard-Strategie in Kubernetes

Blue/Green und Canary sind Themen für das **Vertiefungsprojekt**.

## **Video-Empfehlungen**

- 🎬 [«Deployment Strategies Explained», IBM Technology (8 Min.)](https://www.youtube.com/watch?v=AWVTKBUnoIg)
- 🎬 [«Blue Green Deployment vs Rolling Update vs Canary», TechWorld with Nana (12 Min.)](https://www.youtube.com/watch?v=lIx2ADaRiSw)

### Docker Grundlagen

## **Was ist Docker?**

Docker verpackt eine Applikation zusammen mit ihrer gesamten Laufzeitumgebung in einen **Container**. **Die App läuft überall gleich**, egal ob auf deinem Rechner, einem Linux-Server oder in der Cloud.

 

Kein «Bei mir läuft's» mehr. Wenn es im Container läuft, läuft es überall.

## **Container vs. Virtuelle Maschinen**

|   | VM | Container  |
| **Grösse** | Gigabytes (ganzes OS) | Megabytes (nur App + Abhängigkeiten)  |
| **Startzeit** | Minuten | Sekunden  |
| **Isolation** | Vollständig (eigenes OS) | Prozess-Level (geteilter Kernel)  |
| **Overhead** | Hoch (eigener Kernel, eigene Treiber) | Minimal (teilt Host-Kernel)  |
| **Portabilität** | Gut (aber schwer) | Exzellent (leichtgewichtig)  |

 

 

**Die Analogie:** Eine VM ist ein separates Haus mit eigener Heizung, eigenem Wasseranschluss, eigenem Garten. Ein Container ist eine Wohnung im Mehrfamilienhaus: eigene Räume, geteilte Infrastruktur.

## **Die Docker-Architektur**

Docker besteht aus drei Hauptkomponenten:

 

| Komponente | Aufgabe  |
| **Docker Engine (Daemon)** | Hintergrundprozess, der Container erstellt, startet und verwaltet  |
| **Docker CLI** | Kommandozeilen-Tool, über das du mit dem Daemon interagierst  |
| **Docker Hub / Registry** | Zentrale Ablage für Docker Images (wie npm für Node-Pakete)  |

## **Image und Container**

Diese beiden Begriffe sind fundamental und werden oft verwechselt:

|   | Docker Image | Docker Container  |
| **Was ist es?** | Schreibgeschützte Vorlage | Laufende Instanz eines Images  |
| **Zustand** | Unveränderlich (immutable) | Veränderlich (zur Laufzeit)  |
| **Analogie (OOP)** | Klasse | Objekt  |
| **Analogie (Kochen)** | Rezept | Das fertige Gericht  |
| **Erstellt mit** | `docker build` | `docker run`  |

 

 

**Ein Image kann viele Container erzeugen.** Jeder Container läuft unabhängig. Änderungen in einem Container betreffen die anderen nicht.

## **Das Dockerfile**

Ein **Dockerfile** ist die Bauanleitung für ein Docker Image. Zeile für Zeile wird beschrieben, was ins Image gehört.

### **Vollständiges Beispiel (Node.js)**

```shell
# 1. Base Image: Alpine-basiert (klein und sicher)
FROM node:24-alpine

# 2. Arbeitsverzeichnis im Container setzen
WORKDIR /app

# 3. Zuerst nur package.json und Lock-Datei kopieren (Layer Caching!)
COPY package.json package-lock.json ./

# 4. Dependencies installieren (deterministisch mit npm ci)
npm ci --omit=dev

# 5. Restlichen Code kopieren
COPY . .

# 6. Port dokumentieren (ändert nichts, ist Dokumentation)
EXPOSE 3000

# 7. Startbefehl definieren
CMD ["node", "server.js"]
```

### **Zeile für Zeile erklärt**

| Zeile | Befehl | Was passiert  |
| 1 | `FROM node:24-alpine` | Startet mit einem minimalen Node.js-Image (Alpine Linux, ca. 50 MB)  |
| 2 | `WORKDIR /app` | Erstellt `/app` im Container und wechselt dorthin  |
| 3 | `COPY package.json package-lock.json ./` | Kopiert nur die Dependency-Dateien (für Layer Caching)  |
| 4 | `RUN npm ci --only=production` | Installiert exakt die Versionen aus der Lock-Datei, nur Produktions-Dependencies  |
| 5 | `COPY . .` | Kopiert den restlichen Quellcode  |
| 6 | `EXPOSE 3000` | Dokumentiert, dass die App auf Port 3000 lauscht (öffnet keinen Port!)  |
| 7 | `CMD ["node", "server.js"]` | Definiert den Startbefehl  |

 

> 
**Wichtig:** `EXPOSE` öffnet **keinen** Port. Es ist reine Dokumentation. Der Port wird erst beim `docker run -p` geöffnet.

## **Layer Caching**

Docker baut Images in **Schichten (Layers)**. Jede Zeile im Dockerfile erzeugt einen Layer. Docker cached diese Layers. Wenn sich ein Layer nicht geändert hat, wird er wiederverwendet.

### **Schlecht: Cache wird bei jeder Code-Änderung invalidiert**

 

`# SCHLECHT: COPY . . vor npm ci`
`FROM node:24-alpine`
`WORKDIR /app`
`COPY . .                      # ← Jede Code-Änderung invalidiert diesen Layer`
`RUN npm ci --only=production  # ← Muss jedes Mal neu laufen (Minuten!)`
`EXPOSE 3000`
`CMD ["node", "server.js"]`

### **Gut: Dependencies werden nur bei Änderung neu installiert**

 

`# GUT: Dependencies zuerst, Code danach`
`FROM node:24-alpine`
`WORKDIR /app`
`COPY package.json package-lock.json ./    # ← Ändert sich selten`
`RUN npm ci --only=production              # ← Wird gecached, solange Dependencies gleich`
`COPY . .                                  # ← Nur Code-Layer wird neu gebaut`
`EXPOSE 3000`
`CMD ["node", "server.js"]`

 

*Solange sich package.json nicht ändert, werden Layer 3 und 4 gecached. Ergebnis: Build dauert Sekunden statt Minuten.*

 

**Faustregel:** Was sich selten ändert, kommt im Dockerfile oben. Was sich oft ändert, kommt unten.

## **.dockerignore**

Wie `.gitignore`, aber für Docker. Dateien in `.dockerignore` werden beim `COPY` nicht ins Image kopiert.

 

`# .dockerignore`
`node_modules`
`.git`
`.gitignore`
`.env`
`.env.*`
`README.md`
`docker-compose.yml`
`.github`
`*.md`
`.vscode`

 

**Warum wichtig:**

- `node_modules` vom Host gehören nicht ins Image (werden im Build installiert)
- `.env` enthält Secrets, die nicht ins Image gehören
- `.git` ist gross und unnötig im Image

Ohne `**.dockerignore**` kopiert `COPY . .` auch `node_modules` und `.env` ins Image. Das ist ein Sicherheitsrisiko und bläht das Image auf.

## **Multi-Stage Builds**

Ein **Multi-Stage Build** verwendet mehrere `FROM`-Anweisungen im Dockerfile. Damit kannst du Build-Tools und Dev-Dependencies aus dem finalen Image ausschliessen.

```yaml
# ─── Stage 1: Build ────────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build      # TypeScript kompilieren, Bundling, etc.

# ─── Stage 2: Production ──────────────────────────
FROM node:24-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production    # Nur Produktions-Dependencies
COPY --from=builder /app/dist ./dist   # Nur die Build-Artefakte kopieren

EXPOSE 3000
CMD ["node", "dist/server.js"]
```

**Vorteil:** Das finale Image enthält keine Build-Tools, keine Dev-Dependencies, keinen TypeScript-Compiler. Nur das, was zum Laufen nötig ist. Kleiner, schneller, sicherer.

## **Wichtige Docker-Befehle**

| Befehl | Beschreibung  |
| `docker build -t myapp .` | Image bauen und taggen  |
| `docker run -p 3000:3000 myapp` | Container starten mit Port-Mapping  |
| `docker run -d -p 3000:3000 myapp` | Im Hintergrund starten (detached)  |
| `docker run -e PORT=8080 myapp` | Mit Environment-Variable starten  |
| `docker run --env-file .env myapp` | Mit Env-Datei starten  |
| `docker ps` | Laufende Container anzeigen  |
| `docker ps -a` | Alle Container anzeigen (auch gestoppte)  |
| `docker logs <container>` | Logs anzeigen  |
| `docker logs -f <container>` | Logs live verfolgen (follow)  |
| `docker exec -it <container> sh` | Shell im laufenden Container öffnen  |
| `docker stop <container>` | Container stoppen  |
| `docker rm <container>` | Container löschen  |
| `docker rm -f <container>` | Container stoppen und löschen  |
| `docker images` | Lokale Images anzeigen  |
| `docker rmi <image>` | Image löschen  |
| `docker system prune -a` | Alles Ungenutzte aufräumen (Images, Container, Volumes)  |

**Vorsicht mit **`**docker system prune -a**`**:** Dieser Befehl löscht **alle** ungenutzten Images, Container und Netzwerke. Verwende ihn nur, wenn du weisst, was du tust.

## **Port-Mapping**

Ports innerhalb des Containers sind **nicht automatisch von aussen erreichbar**. Du musst sie explizit mappen.

 

`docker run -p <HOST-PORT>:<CONTAINER-PORT> myapp`

### **Beispiel**

`# App lauscht im Container auf Port 3000`
`# Du willst sie auf dem Host unter Port 8080 erreichen`
`docker run -p 8080:3000 myapp`

### **Häufige Port-Konfigurationen**

| Befehl | Host-Port | Container-Port | URL im Browser  |
| `docker run -p 3000:3000 myapp` | 3000 | 3000 | `http://localhost:3000`  |
| `docker run -p 8080:3000 myapp` | 8080 | 3000 | `http://localhost:8080`  |
| `docker run -p 80:3000 myapp` | 80 | 3000 | `http://localhost`  |
| `docker run -p 8080:8080 -e PORT=8080 myapp` | 8080 | 8080 | `http://localhost:8080`  |

## **Docker Volumes**

Container sind **kurzlebig** (ephemeral). Wenn ein Container gelöscht wird, sind seine Daten weg. Für persistente Daten brauchst du **Volumes**.

 

`# Volume erstellen und an Container anhängen`
`docker run -v mydata:/app/data myapp`

 

`# Lokales Verzeichnis mounten (für Entwicklung)`
`docker run -v $(pwd)/data:/app/data myapp`

| Typ | Syntax | Verwendung  |
| **Named Volume** | `-v mydata:/app/data` | Datenbanken, persistente Daten  |
| **Bind Mount** | `-v $(pwd)/src:/app/src` | Lokale Entwicklung (Live-Reload)  |
| **Kein Volume** | (Standard) | Daten gehen bei Container-Löschung verloren  |

## **Docker-Netzwerke**

 

`# Netzwerk erstellen`
`docker network create mynet`

 

`# Container im Netzwerk starten`
`docker run -d --name app --network mynet myapp`
`docker run -d --name db --network mynet postgres:16`

 

`# Innerhalb von "app" kannst du "db" als Hostname verwenden:`
`# postgres://db:5432/myapp`

 

Container können sich ueber ihren Namen erreichen (DNS-Aufloesung).

 

> 
**Ohne gemeinsames Netzwerk** können Container sich nicht über den Namen erreichen. `docker run` ohne `--network` startet Container im Default-Netzwerk, wo DNS-Auflösung nicht funktioniert.

## **Checkliste: Gutes Dockerfile**

- [ ] Alpine-basiertes Base Image (`node:22-alpine`, nicht `node:22`)
- [ ] `WORKDIR` gesetzt
- [ ] Dependencies separat kopiert (Layer Caching)
- [ ] `npm ci` statt `npm install`
- [ ] `--only=production` (keine devDependencies im Image)
- [ ] `.dockerignore` vorhanden
- [ ] `EXPOSE` deklariert
- [ ] `CMD` definiert
- [ ] Keine Secrets im Dockerfile
- [ ] Non-root User (optional, aber empfohlen für Produktion)

## **Video-Empfehlungen**

- 🎬 [«Docker in 100 Seconds», Fireship (2 Min.)](https://www.youtube.com/watch?v=Gjnup-PuquQ)
- 🎬 [«Docker Crash Course», TechWorld with Nana (1h)](https://www.youtube.com/watch?v=pg19Z8LL06w)
- 🎬 [«Multi-Stage Docker Builds», DevOps Directive (15 Min.)](https://www.youtube.com/watch?v=zpkqNPwEzac)

### * Aufträge – Tag 1

## **Vorbemerkungen**

Diese Aufträge bearbeitest du am 25.04 im Präsenzunterricht. Sie werden **nicht benotet**, bilden aber das Fundament für sämtliche nachfolgenden Arbeiten im Modul Deployment. Deine App, dein Dockerfile und dein Repository begleitest du das gesamte Semester hindurch.

 

Du darfst KI-Tools (ChatGPT, Copilot, Claude etc.) verwenden, **musst den Code aber verstehen und erklären können**. Im Zweifelsfall wird nachgefragt.

 

**Wichtig:** «Ich hab das mit ChatGPT oder Claude gemacht» ist keine Erklärung. Du musst verstehen, **warum** jede Zeile in deinem Dockerfile, deinem Code und deiner Konfiguration so aussieht, wie sie aussieht.

#### Aufgabe: Auftrag 1.1: Code-Review der Starter-App (Punkte: 0.00)

### **Ausgangslage**

Du erhältst eine fertige Node.js/Express-Applikation mit Frontend, API-Endpoints und einem Dockerfile. Die App funktioniert, hat aber Probleme, die in einem professionellen Deployment schwerwiegende Konsequenzen hätten.

 

**Repository:** [https://github.com/ndum/dep-starter-app](https://github.com/ndum/dep-starter-app)

 

Starte die App lokal mit Docker:

`docker pull ghcr.io/ndum/dep-starter-app:latest`

`docker run -p 3000:3000 ghcr.io/ndum/dep-starter-app:latest`

 

Öffne danach [http://localhost:3000](http://localhost:3000/) im Browser und schau dir die App an. Klone anschliessend das Repository und lies den Quellcode aufmerksam durch.

### **Teil A: Sicherheitsanalyse**

Lies den gesamten Quellcode sorgfältig durch. Identifiziere **alle Sicherheitsprobleme** in der Applikation.

 

Erkläre für jedes gefundene Problem:

- **Was** ist das Problem?
- **Warum** ist es problematisch? (Konkretes Risiko benennen)
- **Wie** würdest du es beheben?
- **Welches 12-Factor-Prinzip** wird verletzt?

> 
**Hinweis:** Es gibt mindestens **4 Sicherheitsprobleme**. Mindestens eines davon würde bei einem öffentlichen Repository **Zugangsdaten offenlegen**

> **Eingabefeld** (richtext): Teil A:

### **Teil B: Dockerfile-Review**

Das mitgelieferte Dockerfile funktioniert, ist aber weit von Produktionsqualität entfernt:

 

`FROM node:24`
`WORKDIR /app`
`COPY . .`
`RUN npm install`
`EXPOSE 3000`
`CMD ["npm", "start"]`

 

Identifiziere mindestens **5 Verbesserungen**. Begründe jede Verbesserung mit der **konkreten Auswirkung** auf:

- Image-Grösse
- Build-Zeit
- Sicherheit
- Reproduzierbarkeit

Schreibe anschliessend ein **verbessertes Dockerfile**, das alle deine Punkte umsetzt.

> **Eingabefeld** (richtext): Teil B:

> **Code-Eingabefeld** (Sprache: n/a)

### **Teil C: 12-Factor-Analyse**

Prüfe die Starter-App gegen die folgenden 6 relevanten Faktoren der [12-Factor-App-Methodik](https://12factor.net/):

| # | Faktor | Beschreibung  |
| I | Codebase | Eine Codebase, viele Deployments  |
| III | Config | Konfiguration in Umgebungsvariablen  |
| V | Build, Release, Run | Strikte Trennung der Phasen  |
| VI | Processes | Apps als zustandslose Prozesse  |
| X | Dev/Prod Parity | Entwicklung und Produktion möglichst gleich  |
| XI | Logs | Logs als Event-Streams  |

Erstelle eine Tabelle mit folgender Struktur:

| Faktor | Aktueller Zustand in der Starter-App | Notwendige Änderung  |
| I — Codebase | ... | ...  |
| III — Config | ... | ...  |
| V — Build, Release, Run | ... | ...  |
| VI — Processes | ... | ...  |
| X — Dev/Prod Parity | ... | ...  |
| XI — Logs | ... | ...  |

> **Eingabefeld** (richtext): Teil C:

#### Aufgabe: Auftrag 1.2: Eigene App bauen und containerisieren (Punkte: 0.00)

### **Ausgangslage**

Jetzt baust du deine **eigene Applikation** und zwar von Anfang an richtig. Diese App ist deine Basis für alle weiteren Deployment-Herausforderungen im Modul.

 

**Technologie ist frei wählbar:**

- Node.js / Express (empfohlen, wenn du unsicher bist)
- .NET / ASP.NET Core
- Python / Flask
- Ein bestehendes eigenes Projekt (muss die Anforderungen erfüllen)

### **Pflicht-Endpoints**

Deine App muss mindestens folgende Endpoints bereitstellen:

| Endpoint | Methode | Rückgabe  |
| `/api/health` | `GET` | `{ "status": "healthy" }` mit HTTP 200  |
| `/api/info` | `GET` | Dein Name, Klasse, ein Hobby. **Echte Daten.**  |
| `/api/status` | `GET` | `{ "hostname": "<hostname>", "version": "<APP_VERSION>", "timestamp": "<ISO-Timestamp>" }`  |

Zusätzlich:

- Mindestens **2 eigene Endpoints** mit Parametern (Query- oder Path-Parameter) und strukturierter JSON-Rückgabe
- Ein **einfaches Frontend** (z.B. HTML-Seite oder SPA), das mindestens einen Endpoint aufruft und das Ergebnis anzeigt

**Beispiel für **`**/api/status**`**:**

 

`{`
` "hostname": "a1b2c3d4e5f6",`
` "version": "1.0.0",`
` "timestamp": "2026-04-25T10:30:00.000Z"`
`}`

### **Anforderungen an die Konfiguration**

Alle konfigurierbaren Werte über **Umgebungsvariablen** steuern:
- `PORT` (Default: `3000`)
- `APP_NAME` (Default: sinnvoller Wert)
- `APP_VERSION` (Default: `1.0.0`)

- **Keine Secrets im Code** — weder Passwörter, API-Keys noch Datenbank-URLs
- `.env.example` mit Platzhaltern im Repository vorhanden
- `.env` in `.gitignore` eingetragen

### **Anforderungen an Docker**

Dein Dockerfile muss folgende Kriterien erfüllen:

| Kriterium | Anforderung  |
| Base Image | Alpine-basiert (z.B. `node:24-alpine`)  |
| Layer Caching | `package.json` und `package-lock.json` separat kopieren, **vor** dem restlichen Code  |
| Dependency Install | `npm ci` statt `npm install`  |
| .dockerignore | Vorhanden, schliesst `node_modules`, `.env`, `.git` etc. aus  |
| Port | Mit `EXPOSE` deklariert  |
| Start-Kommando | Definiert via `CMD`  |

### **Nachweis**

Demonstriere folgende Punkte (Screenshot oder Live-Demo):

- **App läuft lokal** (`npm start` oder äquivalent) und **im Docker-Container** (`docker run`)
- `/api/status` zeigt im Container einen **anderen Hostname** als lokal
- Der **Port ist von aussen konfigurierbar**: `docker run -p 8080:8080 -e PORT=8080 myapp` funktioniert
- Der **Code ist auf GitHub**, und es sind **keine Secrets** im Repository

> **Eingabefeld** (text): Link zum Repo:

#### Aufgabe: Auftrag 1.3: Container im Betrieb (Punkte: 0.00)

### **Szenario A: Der unsichtbare Service**

Du startest deine App als Container mit dem Namen `app1`. Danach startest du einen zweiten Container (Alpine-basiert) und versuchst, von dort die Health-API aufzurufen. Es funktioniert nicht.

 

Führe folgende Schritte aus:

 

`# Schritt 1: Deine App starten`
`docker run -d --name app1 myapp`

 

`# Schritt 2: Einen zweiten Container starten und die API aufrufen`
`docker run --rm alpine wget -qO- http://app1:3000/api/health`

 

**Aufgaben:**

- **Beobachte:** Was passiert? Welche Fehlermeldung erhältst du?
- **Diagnostiziere:** Warum kann der zweite Container `app1` nicht erreichen?
- **Löse:** Bringe die Kommunikation zwischen den Containern zum Laufen.
- **Erkläre:** Welches Docker-Netzwerkkonzept steckt dahinter? Zeichne eine einfache Skizze.

> **Eingabefeld** (richtext): Deine Erklärungen

### **Szenario B: Die verschwindenden Daten**

Du erweiterst deine App um einen Logging-Endpoint und stellst fest, dass Daten nach einem Container-Neustart verschwinden.

 

**Schritt 1:** Füge deiner App folgenden Endpoint hinzu:

 

`GET /api/log` Schreibt den aktuellen Timestamp in eine Datei und gibt alle bisherigen Einträge zurück.

 

**Schritt 2:** Teste das Verhalten:

 

`# Container starten`
`docker run -d --name logapp -p 3000:3000 myapp`

 

`# Mehrfach aufrufen`
`curl http://localhost:3000/api/log`
`curl http://localhost:3000/api/log`
`curl http://localhost:3000/api/log`

 

`# Container löschen und neu starten`
`docker rm -f logapp`
`docker run -d --name logapp -p 3000:3000 myapp`

 

`# Erneut aufrufen — was passiert?`
`curl http://localhost:3000/api/log`

 

**Schritt 3:** Löse das Problem mit einem **Docker Volume**.

 

**Reflexionsfrage:**

Welches 12-Factor-Prinzip wird durch das Speichern von Daten im Container verletzt? Warum ist das problematisch? Und wann sind Volumes trotzdem der richtige Ansatz?

> **Eingabefeld** (richtext): Reflexionsfrage

### **Szenario C: Port-Konfigurationen analysieren**

Analysiere die folgenden vier `docker run`-Konfigurationen. Erkläre für jede: Funktioniert sie? Unter welcher URL ist die App erreichbar? Falls nicht, warum nicht?

 

`# Konfiguration 1`
`docker run -d -p 3000:3000 myapp`

`# Konfiguration 2`
`docker run -d -p 8080:3000 myapp`

`# Konfiguration 3`
`docker run -d -p 3000:3000 -e PORT=4000 myapp`

`# Konfiguration 4`
`docker run -d -p 8080:8080 -e PORT=8080 myapp`

 

Fülle folgende Tabelle aus:

| # | Host-Port | Container-Port | App lauscht auf | Erreichbar? | URL  |
| 1 |   |   |   |   |    |
| 2 |   |   |   |   |    |
| 3 |   |   |   |   |    |
| 4 |   |   |   |   |    |

> **Eingabefeld** (richtext): Deine Analyse

### **Szenario D: Systematisches Debugging**

Jemand hat folgenden Container gestartet:

 

`docker run -d -p 3000:3000 -e PORT=4000 --name broken myapp`
 

Die App ist unter http://localhost:3000 nicht erreichbar.

 

Beschreibe deinen **Debugging-Prozess Schritt für Schritt**:

- Welche Befehle führst du in welcher Reihenfolge aus?
- Was erwartest du bei jedem Schritt zu sehen?
- Was ist die Ursache des Problems?
- Wie behebst du es (mindestens 2 verschiedene Lösungen)?

> **Eingabefeld** (richtext): Debugging-Prozess beschreiben

#### Aufgabe: Auftrag 1.4: Architektur-Entscheidungen (Punkte: 0.00)

Beantworte die folgenden vier Fragen. Begründe deine Antworten jeweils mit **technischen Argumenten, **nicht mit Bauchgefühl.

### **Frage A: Datenbank-Optionen**

Deine App braucht eine Datenbank. Vergleiche die drei folgenden Optionen:

| Option | Beschreibung  |
| 1 | Datenbank im **gleichen Container** wie die App  |
| 2 | Datenbank in einem **separaten Container**  |
| 3 | **Managed Service** (z.B. Azure SQL, AWS RDS)  |

Für jede Option: Nenne **einen Vorteil** und **einen Nachteil**. Welche Option würdest du für Produktion empfehlen und warum?

> **Eingabefeld** (richtext): Deine Antwort

### **Frage B: Skalierung**

Du musst deine App auf **3 Instanzen** skalieren. Was funktioniert dabei auf Anhieb? Was geht kaputt? Denk an State, Sessions, Datei-Uploads, Ports.

> **Eingabefeld** (richtext): Deine Antwort

### **Frage C: Konfiguration**

Liefere ein **technisches Argument**, warum eine hardcodierte Datenbank-URL im Code problematisch ist. Beschreibe ein konkretes Szenario, in dem es schiefgeht.

> **Eingabefeld** (richtext): Deine Antwort

### **Frage D: Deployment-Strategien**

Vergleiche **Big Bang Deployment** und **Rolling Update** für deine App:

| Kriterium | Big Bang | Rolling Update  |
| Downtime |   |    |
| Risiko |   |    |
| Rollback |   |    |
| Komplexität |   |    |

In welcher Situation würdest du welche Strategie wählen?

> **Eingabefeld** (richtext): Deine Antwort

#### Aufgabe: Auftrag 1.5: Dokumentation und Reflexion (Punkte: 0.00)

### **Teil A: README erstellen**

Erstelle eine `README.md` für dein Repository mit folgenden Abschnitten:

 

- **Projektname und Kurzbeschreibung**
- **Voraussetzungen** (Node.js-Version, Docker etc.)
- **Lokale Installation** (`npm install`, `npm start`)
- **Docker** (`docker build`, `docker run`)
- **API-Dokumentation** (Tabelle mit allen Endpoints)
- **Umgebungsvariablen** (Tabelle mit Name, Beschreibung, Default)

### **Teil B: Repository aufräumen**

Stelle sicher, dass dein Repository sauber ist:

- [ ] `.gitignore` vorhanden und korrekt (schliesst `node_modules`, `.env`, etc. aus)
- [ ] `.env.example` vorhanden mit Platzhaltern
- [ ] Keine Secrets im Code oder in der Git-History
- [ ] `.dockerignore` vorhanden
- [ ] `README.md` vorhanden und aktuell

### **Teil C: Reflexionsfragen**

Beantworte die folgenden fünf Fragen ausführlich:

 

**Frage A:** Vergleiche den Hostname, den `/api/status` zurückgibt, in drei Situationen: lokal, in einem Container, in zwei verschiedenen Containern. Was fällt dir auf? Was sagt das über Container aus?

> **Eingabefeld** (richtext): Deine Antwort hier:

**Frage B**: Warum sind «wegwerfbare» Container (Disposability) ein Vorteil und kein Nachteil? Nenne ein konkretes Szenario aus dem Betrieb.

> **Eingabefeld** (richtext): Deine Antwort hier:

**Frage C**: Vergleiche die Starter-App mit deiner eigenen App anhand von **3 konkreten 12-Factor-Prinzipien**. Was machst du besser? Was ist gleich?

> **Eingabefeld** (richtext): Deine Antwort hier:

## 02_Deployment-Aufträge (LB1)

### Allgemeine Informationen

Der praktische Teil des Moduls besteht aus fünf Challenges. Drei davon werden bearbeitet und abgegeben.

 

Jede Challenge deckt ein zentrales Thema moderner Deployment-Praxis ab und wird eigenständig bewertet. Die bestehenden Unterrichts-Inhalte liefern die fachlichen Grundlagen, die Umsetzung erfolgt selbstständig.

| Info | Detail  |
| Bewertung | Max. 10 Punkte pro Challenge, max. 30 Punkte insgesamt  |
| Abgabe | Per Teams bis 17.05.2026, 23:59 Uhr  |
| Anzahl | 3 der 5 Challenges  |

### Challenges im Überblick

| Challenge | Thema | Link  |
| C1 | Multi-Service-Architektur mit Docker Compose | C1: Docker Compose  |
| C2 | CI/CD mit GitHub Actions | C2: CI/CD mit GitHub Actions  |
| C3 | Cloud-Plattform Deployment | C3: Cloud-Plattform Deployment  |
| C4 | Kubernetes | C4: Kubernetes  |
| C5 | Eigene Idee | C5: Eigene Idee  |

### Aufbau einer Abgabe

Jede Abgabe besteht aus drei Teilen.

 

**Git-Repository.** Enthält den Code, die Konfiguration und ein `README.md`. Der Link wird in Teams eingereicht.

 

**Dokumentation (max. 4 Seiten).** Beschreibt, was umgesetzt wurde, welche Entscheidungen getroffen wurden und welche Erkenntnisse daraus entstanden sind. Enthält relevante Scripts und Code-Ausschnitte.

 

**Screencast oder Live-Demo (2 bis 5 Minuten).** Zeigt das laufende Setup vom Auslösen des Deployments bis zur erreichbaren Anwendung.

Ohne Screencast oder Live-Demo sind maximal 5 Punkte pro Challenge erreichbar.

### Punkteverteilung pro Challenge

| Kriterium | Punkte | Beschreibung  |
| Umsetzung | 4 | Funktionalität, erfüllte Anforderungen, saubere Konfiguration, keine Secrets im Code  |
| Dokumentation | 3 | Umsetzung nachvollziehbar beschrieben, Entscheidungen begründet, Learnings reflektiert  |
| Screencast / Live-Demo | 3 | Funktionierendes Setup und gesamter Ablauf sichtbar  |

In die Umsetzungs-Bewertung fliessen Komplexität und Ambition des gewählten Setups ein.

### Bewertung Dokumentation

Für die vollen 3 Punkte enthält die Dokumentation folgende Aspekte:

- Was wurde umgesetzt und aus welchem Grund wurde diese Lösung gewählt
- Architektur: Aufbau der Komponenten inklusive Diagramm
- Setup-Anleitung, mit der Dritte das Setup reproduzieren können
- Code- und Konfigurationsausschnitte mit Erklärung
- Begründung der wichtigsten Entscheidungen
- Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde

| Punkte | Kriterien  |
| 3 | Alle sechs Aspekte  |
| 2 | Vier der sechs Aspekte  |
| 1 | Zwei der sechs Aspekte  |
| 0 | Weniger als zwei  |

### Bewertung Screencast / Live-Demo

Für die vollen 3 Punkte zeigt die Aufzeichnung oder Demo folgende Aspekte:

- Setup-Prozess sichtbar (z.B. `docker compose up`, Pipeline läuft)
- Anwendung ist erreichbar und funktioniert (Browser oder `curl`)
- Änderungs-Zyklus: Code ändern, Build, aktualisierte Anwendung

| Punkte | Kriterien  |
| 3 | Alle drei Aspekte  |
| 2 | Zwei der drei Aspekte  |
| 1 | Einer der drei Aspekte  |
| 0 | Kein Screencast oder Demo  |

### * C1: Docker Compose

#### Einführung

## **Warum Docker Compose?**

In der Praxis bestehen Anwendungen selten aus einem einzigen Container. Ein typisches Webprojekt umfasst mindestens einen Webserver, eine Applikation und eine Datenbank. Dazu kommen häufig Caching-Dienste, Worker-Prozesse oder Monitoring-Tools. All diese Dienste einzeln mit `docker run` zu starten, wird schnell unübersichtlich und fehleranfällig.

 

Docker Compose löst dieses Problem, indem die gesamte Infrastruktur in einer einzigen YAML-Datei (`docker-compose.yml`) beschrieben wird. Das bringt drei wesentliche Vorteile:

 

 
*
Quelle: *[*https://miro.medium.com/1*ltc8W2kSyH7I-KidlugYNQ.png*](https://miro.medium.com/1*ltc8W2kSyH7I-KidlugYNQ.png)

 

- **Multi-Service-Apps** lassen sich mit einem einzigen Befehl (`docker compose up`) starten, stoppen und neu aufbauen
- **Infrastructure as Code (IaC)**: Die Konfiguration liegt versioniert im Repository. Jede Änderung ist nachvollziehbar, und das Setup lässt sich jederzeit reproduzieren
- **Dev/Prod-Parität**: Entwickelnde arbeiten lokal mit derselben Service-Architektur, die später auch in der Produktion läuft. Das reduziert die klassischen "Auf meinem Rechner funktioniert es"-Probleme erheblich

## **Wie funktioniert Docker Compose?**

Docker Compose arbeitet auf einem **einzelnen Host**. Es liest die `docker-compose.yml`, erstellt daraus die definierten Container, Netzwerke und Volumes und koordiniert deren Start. Dabei kommunizieren die Services über ein gemeinsames Docker-Netzwerk miteinander, ohne dass Ports nach aussen exponiert werden müssen.

 

> 
Docker Compose eignet sich hervorragend für lokale Entwicklung und einfache Deployments. Für verteilte Systeme über mehrere Server hinweg ist Kubernetes die passende Lösung.

## **Typische Multi-Service-Architektur**

Das folgende Diagramm zeigt eine realistische Architektur, wie sie in vielen Webprojekten vorkommt:

### **Was passiert hier?**

- **Nur das Frontend (Nginx) ist von aussen erreichbar** über Port 80. Es nimmt HTTP-Anfragen entgegen und leitet sie als Reverse Proxy an das Backend weiter
- **Das Backend (Node.js)** verarbeitet die Geschäftslogik und greift auf PostgreSQL und Redis zu
- **Der Worker** übernimmt Hintergrundaufgaben (z. B. E-Mail-Versand, Datenverarbeitung) und nutzt ebenfalls DB und Cache
- **PostgreSQL und Redis** sind nur intern erreichbar. Sie exponieren keine Ports nach aussen, was die Sicherheit erhöht
- **Das Volume **`**db-data**` sorgt dafür, dass die Datenbankdaten einen Neustart der Container überleben

Dieses Muster, bei dem nur der Einstiegspunkt von aussen zugänglich ist und alle anderen Dienste im internen Netzwerk bleiben, ist ein bewährtes Sicherheitskonzept, das sich mit Docker Compose einfach umsetzen lässt.

#### Konfiguration

## **Top-Level-Struktur**

Eine `docker-compose.yml` besteht aus drei Hauptbereichen:

```yaml
services:
  # Die Container, die gestartet werden sollen

networks:
  # Netzwerke für die Kommunikation zwischen Services

volumes:
  # Persistente Datenspeicher
```

Nur `services` ist zwingend erforderlich. `networks` und `volumes` werden bei Bedarf ergänzt. Schauen wir uns die einzelnen Bereiche genauer an.

## **Services konfigurieren**

### **Image vs. Build**

Es gibt zwei Wege, um festzulegen, welches Image ein Service nutzt:

```yaml
services:
  # Variante 1: Fertiges Image von einer Registry
  database:
    image: postgres:16-alpine

  # Variante 2: Image lokal aus einem Dockerfile bauen
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
```

Beide Varianten lassen sich auch kombinieren. Mit `image` und `build` zusammen wird das gebaute Image unter dem angegebenen Namen getaggt:

```yaml
services:
  backend:
    build: ./backend
    image: mein-projekt/backend:latest
```

### **Umgebungsvariablen**

Umgebungsvariablen lassen sich direkt in der Compose-Datei oder über eine externe Datei setzen:

```yaml
services:
  backend:
    # Variante 1: Direkt definiert
    environment:
      - NODE_ENV=production
      - DB_HOST=database
      - DB_PORT=5432

    # Variante 2: Aus einer Datei geladen
    env_file:
      - .env
```

> 
**Tipp:** `env_file` eignet sich besonders für Zugangsdaten und andere Werte, die nicht ins Repository gehören. Dazu gleich mehr im Abschnitt zu Secrets.

### **Ports: expose vs. ports**

Der Unterschied zwischen `ports` und `expose` ist sicherheitsrelevant:

```yaml
services:
  frontend:
    ports:
      - "80:80"       # Host-Port 80 → Container-Port 80 (von aussen erreichbar)

  backend:
    expose:
      - "3000"         # Nur intern im Docker-Netzwerk erreichbar

  database:
    # Ohne ports/expose: ebenfalls nur intern erreichbar
    # Andere Services können trotzdem auf Port 5432 zugreifen
```

| Konfiguration | Von aussen erreichbar? | Von anderen Services erreichbar?  |
| `ports: "8080:3000"` | Ja, über Port 8080 | Ja, über Port 3000  |
| `expose: "3000"` | Nein | Ja, über Port 3000  |
| Nichts angegeben | Nein | Ja, über den Standard-Port des Images  |

### **Restart-Policies**

Was soll passieren, wenn ein Container abstürzt?

```yaml
services:
  backend:
    restart: unless-stopped   # Startet neu, ausser er wurde manuell gestoppt

  database:
    restart: always           # Startet immer neu, auch nach Docker-Daemon-Restart

  migration:
    restart: "no"             # Einmalig ausführen, nicht neu starten

  worker:
    restart: on-failure       # Nur bei Fehler (Exit-Code != 0) neu starten
```

Für lang laufende Services wie Datenbanken oder Webserver ist `unless-stopped` oder `always` sinnvoll. Für einmalige Tasks wie Migrationen passt `"no"`.

## **Netzwerke**

### **Default Network**

Wenn keine Netzwerke definiert werden, erstellt Docker Compose automatisch ein Netzwerk für das Projekt. Alle Services landen in diesem Netzwerk und können sich gegenseitig erreichen.

### **Custom Networks und Isolation**

Mit eigenen Netzwerken lässt sich gezielt steuern, welche Services miteinander kommunizieren dürfen:

```yaml
services:
  frontend:
    networks:
      - frontend-net

  backend:
    networks:
      - frontend-net
      - backend-net

  database:
    networks:
      - backend-net

networks:
  frontend-net:
  backend-net:
```

In diesem Beispiel:

- `frontend` kann mit `backend` kommunizieren (beide in `frontend-net`).
- `backend` kann mit `database` kommunizieren (beide in `backend-net`).
- `frontend` kann **nicht** direkt auf `database` zugreifen, da sie kein gemeinsames Netzwerk teilen.

Das ist ein einfaches, aber wirkungsvolles Sicherheitskonzept.

### **DNS-Auflösung: Service-Namen statt Localhost**

Ein häufiger Stolperstein für Einsteiger: Innerhalb von Docker Compose ersetzt der **Service-Name** die Rolle von `localhost`.

```yaml
services:
  backend:
    environment:
      # Falsch:
      # DB_HOST=localhost
      # Richtig:
      DB_HOST=database
      REDIS_HOST=cache

  database:
    image: postgres:16-alpine

  cache:
    image: redis:7-alpine
```

Docker Compose betreibt einen internen DNS-Server. Der Service-Name wird automatisch zur IP-Adresse des entsprechenden Containers aufgelöst. Das funktioniert, weil die Services im selben Docker-Netzwerk laufen.

## **Abhängigkeiten und Startreihenfolge**

### **depends_on mit Healthchecks**

`depends_on` alleine garantiert nur, dass ein Container **gestartet** wird, bevor ein anderer. Das heisst aber nicht, dass der Dienst darin auch **bereit** ist. Mit Healthchecks lässt sich das sicherstellen:

```yaml
services:
  backend:
    build: ./backend
    depends_on:
      database:
        condition: service_healthy
      cache:
        condition: service_started

  database:
    image: postgres:16-alpine
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 3s
      retries: 5

  cache:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
```

Der Backend-Service startet erst, wenn PostgreSQL tatsächlich Verbindungen annimmt (nicht nur, wenn der Container läuft).

## **Persistenz mit Volumes**

Ohne Volumes gehen alle Daten verloren, sobald ein Container entfernt wird. Für Datenbanken ist das offensichtlich problematisch:

```yaml
services:
  database:
    image: postgres:16-alpine
    volumes:
      - db-data:/var/lib/postgresql/data    # Named Volume (persistent)
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql  # Bind Mount (Datei vom Host)

volumes:
  db-data:    # Wird von Docker verwaltet
```

| Volume-Typ | Syntax | Verwendung  |
| Named Volume | `db-data:/pfad/im/container` | Persistente Daten (DB, Uploads)  |
| Bind Mount | `./lokal:/pfad/im/container` | Entwicklung (Code, Konfiguration)  |

## **Secrets und Umgebungsvariablen**

Zugangsdaten wie Datenbankpasswörter gehören nicht in die `docker-compose.yml`, da diese Datei typischerweise ins Repository eingecheckt wird. Die bewährte Lösung:

 

**1. Eine **`**.env**`**-Datei für die tatsächlichen Werte (nicht im Repository):**

```
POSTGRES_PASSWORD=mein-geheimes-passwort
POSTGRES_USER=app
POSTGRES_DB=meine_datenbank
```

**2. Eine **`**.env.example**`** als Vorlage (im Repository):**

```
POSTGRES_PASSWORD=changeme
POSTGRES_USER=app
POSTGRES_DB=meine_datenbank
```

**3. Referenz in der **`**docker-compose.yml**`**:**

```yaml
services:
  database:
    image: postgres:16-alpine
    env_file:
      - .env
```

**4. **`**.env**`** in die **`**.gitignore**`** aufnehmen:**

```
.env
```

Neue Teammitglieder kopieren `.env.example` zu `.env` und passen die Werte an. So landen keine Secrets im Repository, und trotzdem weiss jede Person, welche Variablen benötigt werden.

#### Praxis

## **Vollständiges Beispiel: Multi-Service-App**

Das folgende Beispiel zeigt eine realistische Konfiguration mit einem Node.js-Backend, PostgreSQL, Redis und pgAdmin als Datenbank-Verwaltungstool.

```yaml
services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=database
      - DB_PORT=5432
      - DB_USER=${POSTGRES_USER}
      - DB_PASSWORD=${POSTGRES_PASSWORD}
      - DB_NAME=${POSTGRES_DB}
      - REDIS_HOST=cache
      - REDIS_PORT=6379
    depends_on:
      database:
        condition: service_healthy
      cache:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - frontend-net
      - backend-net

  database:
    image: postgres:16-alpine
    env_file:
      - .env
    volumes:
      - db-data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER}"]
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped
    networks:
      - backend-net

  cache:
    image: redis:7-alpine
    command: redis-server --maxmemory 128mb --maxmemory-policy allkeys-lru
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped
    networks:
      - backend-net

  pgadmin:
    image: dpage/pgadmin4:latest
    environment:
      - PGADMIN_DEFAULT_EMAIL=${PGADMIN_EMAIL}
      - PGADMIN_DEFAULT_PASSWORD=${PGADMIN_PASSWORD}
    ports:
      - "8080:80"
    depends_on:
      database:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - backend-net

volumes:
  db-data:
  redis-data:

networks:
  frontend-net:
  backend-net:
```

Die zugehörige `.env`-Datei:

```
POSTGRES_USER=app
POSTGRES_PASSWORD=sicheres-passwort
POSTGRES_DB=meine_app
PGADMIN_EMAIL=admin@example.com
PGADMIN_PASSWORD=admin-passwort
```

## **Was passiert bei **`**docker compose up**`**?**

Wenn dieser Befehl ausgeführt wird, läuft folgende Sequenz ab:

 

- Docker Compose liest die `docker-compose.yml` und die `.env`-Datei.
- Die Netzwerke `frontend-net` und `backend-net` werden erstellt.
- Die Volumes `db-data` und `redis-data` werden angelegt (falls noch nicht vorhanden).
- Das Backend-Image wird aus `./backend/Dockerfile` gebaut.
- Die Images für PostgreSQL, Redis und pgAdmin werden heruntergeladen (falls noch nicht lokal vorhanden).
- `database` und `cache` starten zuerst, da andere Services von ihnen abhängen.
- Docker Compose wartet, bis die Healthchecks von `database` und `cache` erfolgreich sind.
- Erst dann starten `backend` und `pgadmin`.
- Alle Container laufen. Das Backend ist auf `http://localhost:3000` erreichbar, pgAdmin auf `http://localhost:8080`.

## **Nützliche Befehle**

| Befehl | Beschreibung  |
| `docker compose up` | Startet alle Services (blockiert das Terminal)  |
| `docker compose up -d` | Startet alle Services im Hintergrund (detached)  |
| `docker compose up --build` | Baut Images neu und startet dann  |
| `docker compose down` | Stoppt und entfernt Container und Netzwerke  |
| `docker compose down -v` | Wie oben, entfernt zusätzlich Volumes  |
| `docker compose ps` | Zeigt laufende Services und deren Status  |
| `docker compose logs` | Zeigt Logs aller Services  |
| `docker compose logs -f backend` | Folgt den Logs eines bestimmten Services  |
| `docker compose exec backend sh` | Öffnet eine Shell im laufenden Container  |
| `docker compose build` | Baut alle Images neu, ohne zu starten  |
| `docker compose pull` | Aktualisiert alle externen Images  |
| `docker compose restart backend` | Startet einen Service neu  |

## **Wann Docker Compose, wann Kubernetes?**

| Kriterium | Docker Compose | Kubernetes  |
| Einsatzbereich | Lokale Entwicklung, kleine Deployments | Produktion, grosse verteilte Systeme  |
| Hosts | Einzelner Host | Cluster mit mehreren Nodes  |
| Skalierung | Manuell, auf einem Host | Automatisch, über viele Hosts  |
| Lernkurve | Niedrig | Hoch  |
| Konfiguration | Eine YAML-Datei | Viele YAML-Dateien (Deployments, Services, Ingress, ...)  |
| Self-Healing | Restart-Policies | Vollständiges Self-Healing mit Rescheduling  |
| Setup-Aufwand | Minimal (Docker genügt) | Erheblich (Cluster-Setup nötig)  |

> 
**Faustregel:** Docker Compose eignet sich, wenn alles auf einem Server läuft und das Team überschaubar ist. Sobald Hochverfügbarkeit, automatische Skalierung oder ein verteiltes System nötig werden, ist Kubernetes die bessere Wahl.

## **Video-Empfehlungen**

| Thema | Link | Dauer  |
| Docker Compose Tutorial (Überblick) | [Fireship: Docker Compose in 12 Minutes](https://www.youtube.com/watch?v=HG6yIjZapSA) | 12 Min.  |
| Docker Networking erklärt | [TechWorld with Nana: Docker Networking](https://www.youtube.com/watch?v=bKFMS5C4CG0) | 20 Min.  |
| Docker Compose Full Tutorial | [TechWorld with Nana: Docker Compose Tutorial](https://www.youtube.com/watch?v=SXwC9fSwct8) | 60 Min.  |

## **Vertiefung**

| Thema | Link  |
| Offizielle Compose-Referenz | [docs.docker.com/compose](https://docs.docker.com/compose/)  |
| Compose File Specification | [docs.docker.com/compose/compose-file](https://docs.docker.com/compose/compose-file/)  |
| Networking in Compose | [docs.docker.com/compose/networking](https://docs.docker.com/compose/networking/)  |
| Environment Variables in Compose | [docs.docker.com/compose/environment-variables](https://docs.docker.com/compose/environment-variables/)  |
| Awesome Docker Compose | [github.com/docker/awesome-compose](https://github.com/docker/awesome-compose)  |

#### * Auftrag C1

# C1 · Multi-Service-Architektur mit Docker Compose

*Zeitbudget ca. 3 bis 4 Stunden. Maximal 10 Punkte.*

## Ausgangslage

Einzelne Container zu bauen ist Handwerk. Eine Anwendung zu orchestrieren, bei der mehrere Services mit unterschiedlichen Lebenszyklen, Netzwerk-Anforderungen und Datenpersistenz zusammenspielen, ist eine eigene Disziplin.

 

In diesem Auftrag entwirfst und baust du eine Anwendung, bei der mindestens drei Services sinnvoll zusammenarbeiten. Was sinnvoll bedeutet, entscheidest du selbst und begründest es im README.

## Auftrag

Am Ende steht ein Git-Repository, bei dem `docker compose up` eine funktionierende Anwendung startet. Die Services kommunizieren miteinander, tauschen Daten aus und speichern persistent. Ein Frontend, das ausschliesslich statische Inhalte ausliefert und nicht mit dem Backend kommuniziert, erfüllt den Auftrag nicht.

 

Welche fachliche Aufgabe die Anwendung erfüllt, ist dir überlassen. Entscheidend ist, dass eine erkennbare Aufgabe dahintersteht und die Services echte Abhängigkeiten zueinander haben.

## Technische Anforderungen

Mindestens drei Services, davon mindestens einer mit eigenem Dockerfile und Multi-Stage-Build. Konfiguration über Environment-Variablen mit `.env.example` im Repository, `.env` in `.gitignore`. Mindestens ein Named Volume für persistente Daten. Mindestens ein Healthcheck, der den funktionalen Zustand eines Service prüft, gefolgt von `depends_on` mit `condition: service_healthy`. Mindestens ein Custom Network zur logischen Trennung der Services.

 

Die Anwendung ist ohne Downtime neustartbar. Der Ausfall eines einzelnen Service darf die Gesamtanwendung nicht lahmlegen, sobald der Service wieder verfügbar ist, stellt sich der Normalbetrieb automatisch her. Restart-Policies und Healthcheck-Verhalten sind entsprechend gesetzt.

 

Alle Services geben strukturierte Logs auf `stdout` aus, nachvollziehbar über `docker compose logs`. Die Logs enthalten mindestens Zeitstempel, Log-Level und eine Aussage zum Ereignis.

 

Abweichungen sind möglich, sofern sie im README begründet sind.

## Bewertung

Die 10 Punkte verteilen sich gemäss den Vorgaben des Moduls auf Umsetzung, Dokumentation und Screencast.

 

**Umsetzung (4 Punkte)**

Bewertet wird, ob `docker compose up` fehlerfrei startet, alle technischen Anforderungen erfüllt sind, die Konfiguration sauber aufgebaut ist und keine Secrets im Code stehen. Komplexität und Ambition des gewählten Setups fliessen in die Bewertung ein.

 

**Dokumentation (3 Punkte)**

Für 3 Punkte deckt die Dokumentation alle folgenden Aspekte ab: Was wurde umgesetzt und aus welchem Grund wurde diese Lösung gewählt. Architektur-Diagramm und Beschreibung der Komponenten. Setup-Anleitung, mit der das Projekt durch Dritte reproduziert werden kann. Relevante Code- und Konfigurationsausschnitte mit Erklärung. Begründung der wichtigsten Architektur- und Technologie-Entscheidungen. Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde.

 

Vier der sechs Aspekte ergeben 2 Punkte, zwei der sechs Aspekte 1 Punkt. Maximaler Umfang 4 Seiten.

 

**Screencast oder Live-Demo (3 Punkte)**

Zwei bis fünf Minuten. Für 3 Punkte werden gezeigt: der Setup-Prozess (zum Beispiel `docker compose up`), die laufende und erreichbare Anwendung im Browser oder per `curl`, sowie ein Änderungs-Zyklus mit Code-Änderung, Build und sichtbarer Auswirkung.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

## Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug.

## Abgabe

Abgabe via Teams bis 17.05.2026, 23:59. Enthalten sind der Git-Repository-Link mit vollständigem Code und `README.md`, die Dokumentation (max. 4 Seiten) sowie der Screencast-Link oder Anmeldung zur Live-Demo.

### * C2: CI/CD mit GitHub Actions

#### Einführung

## **Das Problem: Manuelle Builds skalieren nicht**

In kleinen Projekten funktioniert der manuelle Ansatz noch: lokal bauen, lokal testen, manuell deployen. Sobald aber ein Team von fünf Entwickelnden mehrmals täglich pusht, bricht dieses Vorgehen zusammen. Niemand weiss, ob der aktuelle Stand auf `main` tatsächlich funktioniert, bis jemand manuell testet und Fehler (hoffentlich) auffallen.

 

CI/CD macht aus **"Ich hoffe, es funktioniert"** ein **"Ich weiss, es funktioniert"**.

 

Typische Probleme ohne Pipeline:

- Fehler werden erst spät entdeckt, oft erst beim manuellen Testen oder in Produktion
- Verschiedene Entwickelnde haben unterschiedliche lokale Konfigurationen
- Build- und Deploy-Schritte sind nicht dokumentiert und nur im Kopf einzelner Personen
- Integration von Code verschiedener Teammitglieder führt regelmässig zu Konflikten

## **Pipeline-Visualisierung**

Eine typische CI/CD-Pipeline durchläuft mehrere Stages. Jede Stage muss erfolgreich sein, bevor die nächste startet:
*
 

Quelle: *[*https://docs.github.com/assets/cb-25535/mw-1440/images/help/actions/overview-actions-simple.webp*](https://docs.github.com/assets/cb-25535/mw-1440/images/help/actions/overview-actions-simple.webp)

 

Wenn der Lint-Step fehlschlägt, laufen Test, Build und Deploy **gar nicht erst**. Das spart Zeit und Ressourcen, und die Entwickelnden bekommen sofort Feedback, wo das Problem liegt.

## **CI vs. CD vs. CD**

Diese drei Begriffe werden oft verwechselt. Sie bauen aufeinander auf:

| Begriff | Steht für | Was passiert  |
| **CI** | Continuous Integration | Jeder Push wird automatisch gebaut und getestet. Fehler werden sofort erkannt.  |
| **CD** | Continuous Delivery | Nach erfolgreichem CI ist die App **bereit** für Deployment. Ein Mensch gibt den letzten Klick.  |
| **CD** | Continuous Deployment | Kein manueller Schritt mehr. Jeder erfolgreiche Build auf `main` geht automatisch in Produktion.  |

### **Continuous Integration (CI)**

Der Kern von CI ist die automatische Verifikation: Bei jedem Push wird der Code gebaut, gelintet und getestet. Fehler fallen innerhalb von Minuten auf, nicht erst Tage später.

### **Continuous Delivery vs. Continuous Deployment**

Der Unterschied liegt im letzten Schritt. Bei **Continuous Delivery** steht am Ende ein manueller Freigabeschritt: Eine verantwortliche Person prüft und gibt das Deployment frei. Bei **Continuous Deployment** entfällt dieser Schritt komplett. Jeder erfolgreiche Build landet automatisch in Produktion.

### **Was reicht für diese Challenge?**

Für den Auftrag C2 reicht **Continuous Delivery**. Die Pipeline muss den Code automatisch bauen, testen und ein Docker Image erstellen. Ein automatisches Deployment in Produktion ist nicht erforderlich, aber der Weg dahin muss automatisiert sein.

#### Konzepte und Aufbau

## **Workflow, Job, Step, Action: Die Hierarchie**

GitHub Actions ist hierarchisch aufgebaut. Jede Ebene hat eine klare Aufgabe:

| Konzept | Erklärung  |
| **Workflow** | Eine YAML-Datei in `.github/workflows/`. Definiert **wann** und **was** passiert.  |
| **Job** | Eine logische Einheit innerhalb eines Workflows. Jeder Job läuft auf einem eigenen Runner (frische Maschine).  |
| **Step** | Ein konkreter Befehl oder eine Action innerhalb eines Jobs. Steps laufen sequentiell.  |
| **Action** | Eine wiederverwendbare Komponente. Z.B. `actions/checkout@v4` checkt den Code aus. Muss nicht selbst geschrieben werden.  |

 

 

Jeder **Job** bekommt einen frischen Runner. Dateien aus dem vorherigen Job sind nicht automatisch verfügbar. Deshalb braucht jeder Job, der mit dem Code arbeitet, einen eigenen `actions/checkout@v4`-Step.

## **Runner**

Ein **Runner** ist die Maschine, auf der ein Job ausgeführt wird. GitHub stellt gehostete Runner bereit:

| Runner | Beschreibung | Typischer Einsatz  |
| `ubuntu-latest` | Linux-VM (Standard) | Die meisten Projekte, Docker-Builds  |
| `windows-latest` | Windows-VM | .NET-Projekte, Windows-spezifische Builds  |
| `macos-latest` | macOS-VM | iOS/macOS-Apps, Swift-Projekte  |
| **Self-hosted** | Eigene Maschine | Spezielle Hardware, private Netzwerke, Kostenkontrolle  |

> 
**Tipp:** Für die meisten Projekte reicht `ubuntu-latest`. Dieser Runner ist am schnellsten verfügbar und hat die beste Docker-Unterstützung.

## **Artifacts und Caching**

### **Artifacts**

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

### **Caching**

**Caching** beschleunigt die Pipeline, indem häufig genutzte Dateien (z.B. `node_modules`) wiederverwendet werden:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"  # Cached automatisch node_modules basierend auf package-lock.json
```

Der Unterschied ist spürbar: Ohne Cache dauert `npm ci` typischerweise **30-60 Sekunden**. Mit Cache sind es oft nur **5-10 Sekunden**.

## **Matrix Strategy**

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

Das erzeugt **3 parallele Jobs**, einen für Node 18, einen für Node 20 und einen für Node 22. So ist sichergestellt, dass die App auf allen unterstützten Versionen funktioniert.

## **Environment Secrets vs. Repository Secrets**

GitHub bietet zwei Ebenen für Secrets:

| Art | Scope | Wann nutzen?  |
| **Repository Secrets** | Verfügbar in allen Jobs des Repos | API-Keys, Docker-Registry-Passwörter  |
| **Environment Secrets** | Nur in Jobs mit bestimmtem `environment` | Produktions-Datenbank-URL, Cloud-Credentials  |

```yaml
# Environment Secret, nur im deploy-Job verfügbar
deploy:
  runs-on: ubuntu-latest
  environment: production  # <-- Schaltet Environment Secrets frei
  steps:
    - run: echo "Deploying with ${{ secrets.PROD_DATABASE_URL }}"
```

**Environment Secrets** bieten zusätzliche Schutzfunktionen:

- **Required Reviewers**: Eine Person muss den Deploy bestätigen
- **Wait Timer**: z.B. 5 Minuten Wartezeit vor dem Deploy
- **Branch Protection**: Nur `main` darf in `production` deployen

## **Workflow-Struktur: Vollständiges Beispiel**

GitHub Actions nutzt YAML-Dateien im Ordner `.github/workflows/`. Die folgende Struktur zeigt alle wesentlichen Steps von Checkout bis GHCR-Push:

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

Die wichtigsten Elemente im Überblick:

- `**on**`: Definiert die Trigger (push, pull_request, schedule, workflow_dispatch)
- `**jobs**`: Enthält alle Jobs, die parallel oder sequentiell (`needs`) laufen
- `**steps**`: Einzelne Schritte, entweder `uses` (vorgefertigte Action) oder `run` (Shell-Befehl)
- `**secrets**`: Verschlüsselte Variablen, Zugriff mit `${{ secrets.NAME }}`

#### Pipelines, Registries und Best Practices

## **Zentrale Konzepte im Überblick**

| Konzept | Erklärung  |
| **Trigger** (`on`) | Wann die Pipeline läuft: `push`, `pull_request`, `schedule`, `workflow_dispatch` (manuell)  |
| **Jobs** | Unabhängige Einheiten, die parallel oder sequentiell (`needs`) laufen  |
| **Steps** | Einzelne Schritte innerhalb eines Jobs, entweder `uses` (vorgefertigte Action) oder `run` (Shell-Befehl)  |
| **Secrets** | Verschlüsselte Variablen unter Settings > Secrets. Zugriff mit `${{ secrets.NAME }}`  |
| **Artifacts** | Dateien, die zwischen Jobs oder als Download geteilt werden können  |

## **Branch-Strategie**

In einem Team wird **nie direkt auf **`**main**` gearbeitet:

Der typische Ablauf:

- Feature-Branch erstellen: `git checkout -b feature/add-login`
- Code schreiben und pushen
- Pull Request gegen `main` öffnen
- Pipeline läuft automatisch (Tests, Lint, Build)
- Nur bei grüner Pipeline wird gemerged

Für die Pipeline bedeutet das: Bei Pull Requests laufen nur Tests und Lint. Deployment-Steps laufen ausschliesslich auf `main`.

## **Secrets verwalten**

Niemals Passwörter, API-Keys oder Tokens im Code speichern. GitHub bietet dafür **Repository Secrets**:

- Repository > Settings > Secrets and variables > Actions
- "New repository secret" > Name und Wert eingeben
- Im Workflow: `${{ secrets.MEIN_SECRET }}`

Das vorinstallierte `GITHUB_TOKEN` reicht für die meisten Aktionen (GHCR-Push, Status-Checks). Für externe Services wie Docker Hub oder Cloud-Anbieter werden separate Secrets benötigt.

## **Fail Fast mit **`**needs**`

Ohne `needs` laufen alle Jobs parallel. Mit `needs` werden Abhängigkeiten definiert, sodass bei einem Fehler nachfolgende Jobs übersprungen werden:

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

Dieses Muster spart Ressourcen und gibt schnelles Feedback: Wenn die Tests fehlschlagen, wird weder gebaut noch deployt.

## **Docker Image Registry**

### **Was ist eine Container Registry?**

Eine Container Registry ist ein zentraler Speicherort für Docker Images, vergleichbar mit npm für Node-Pakete oder PyPI für Python. Das gebaute Image wird dorthin gepusht und kann von dort überall heruntergeladen und gestartet werden, sei es auf einem Server, in Kubernetes oder in der Cloud.

### **GHCR vs. Docker Hub**

| Eigenschaft | GHCR (ghcr.io) | Docker Hub  |
| **Anbieter** | GitHub | Docker Inc.  |
| **Authentifizierung** | `GITHUB_TOKEN` (automatisch in Actions) | Separater Docker-Hub-Account nötig  |
| **Private Images** | Kostenlos (an Repo-Visibility gekoppelt) | 1 privates Image kostenlos, danach kostenpflichtig  |
| **Integration** | Direkt in GitHub (Packages-Tab) | Separate Plattform  |
| **URL-Format** | `ghcr.io/username/image:tag` | `docker.io/username/image:tag`  |
| **Empfehlung** | Für GitHub-basierte Projekte ideal | Für öffentliche Images / Open Source  |

Für dieses Modul empfiehlt sich **GHCR**, weil die Integration mit GitHub Actions nahtlos ist und keine zusätzlichen Accounts oder Secrets benötigt werden.

## **Image Tagging Strategy**

Jedes Image braucht mindestens einen **Tag**, eine Art Versionsnummer. Folgende Strategien haben sich bewährt:

| Tag | Beispiel | Wann nutzen?  |
| `latest` | `myapp:latest` | Immer der neueste Build. **Nicht** für Produktion empfohlen, da unklar ist, welche Version dahinter steckt.  |
| **Semantic Version** | `myapp:1.2.3` | Klare Versionierung. Ideal für Releases.  |
| **Git SHA** | `myapp:a1b2c3d` | Jeder Commit hat ein eindeutiges Image. Perfekt für Nachvollziehbarkeit.  |
| **Branch + SHA** | `myapp:main-a1b2c3d` | Kombination aus Kontext und Eindeutigkeit.  |

### **Multi-Tag-Beispiel**

In der Praxis werden oft mehrere Tags gleichzeitig vergeben:

```yaml
# Beispiel: Multi-Tag-Strategie in GitHub Actions
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

## **Alternativen zu GitHub Actions**

GitHub Actions ist nicht das einzige CI/CD-Tool. Je nach Projekt und Infrastruktur gibt es Alternativen:

| Tool | Stärke | Wann sinnvoll?  |
| **GitLab CI/CD** | Alles-in-einem-Plattform (Git + CI + Registry + Monitoring) | Wenn GitLab statt GitHub genutzt wird  |
| **Jenkins** | Extrem flexibel, riesiges Plugin-Ökosystem | Grosse Unternehmen mit komplexen Pipelines und eigener Infrastruktur  |
| **CircleCI** | Schnelle Builds, gutes Caching | Performance-kritische Projekte  |
| **Azure DevOps** | Integration mit Microsoft-Ökosystem | .NET-Projekte, Azure Cloud  |
| **Bitbucket Pipelines** | In Bitbucket integriert | Teams, die Atlassian-Produkte nutzen  |

> 
**Für dieses Modul** nutzen wir GitHub Actions, weil es am einfachsten aufzusetzen ist und keine zusätzliche Infrastruktur benötigt

## **Video-Empfehlungen**

| Video | Dauer | Link  |
| GitHub Actions Tutorial | ~1h | TechWorld with Nana  |
| CI/CD in 100 Seconds | ~2 Min. | Fireship  |

## **Vertiefung**

Wer tiefer einsteigen will:

- [GitHub Actions Dokumentation (offiziell)](https://docs.github.com/en/actions) - die offizielle Referenz, sehr gut geschrieben
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions) - tausende vorgefertigte Actions
- [Docker: Build and push images with GitHub Actions](https://docs.docker.com/build/ci/github-actions/) - offizielle Docker-Anleitung für GHCR/Docker Hub
- [Fireship: GitHub Actions Tutorial](https://www.youtube.com/watch?v=eB0nUzAI7M8) - kompakter Einstieg (12 Min.)
- [The Twelve-Factor App: Build, Release, Run](https://12factor.net/build-release-run) - das Prinzip hinter CI/CD

#### * Auftrag C2

# C2 · CI/CD mit GitHub Actions

Zeitbudget ca. 3 bis 4 Stunden. Maximal 10 Punkte.

## Ausgangslage

Ein Build auf dem eigenen Laptop beweist wenig. Produktionsreife entsteht, wenn jeder Push automatisch geprüft, gebaut und ausgeliefert wird, reproduzierbar und ohne manuelles Eingreifen.

 

In diesem Auftrag setzt du eine GitHub-Actions-Pipeline auf, die Code aus einem Repository automatisiert in ein versioniertes Container-Image überführt und in eine Registry veröffentlicht.

## Auftrag

Am Ende steht ein Git-Repository mit einem funktionierenden Workflow unter `.github/workflows/`. Bei jedem Push auf den Hauptbranch läuft die Pipeline vollständig durch. Das Ergebnis ist ein getaggtes Image in einer Container-Registry deiner Wahl.

 

Als Basis kannst du die Anwendung aus C1, ein eigenes Projekt oder eine einfachere Applikation verwenden. Entscheidend ist, dass die Pipeline sinnvoll auf das Projekt zugeschnitten ist.

## Technische Anforderungen

Die Pipeline besteht mindestens aus den drei Stages Build, Test und Push. Der Build erzeugt ein Docker-Image, der Test führt automatisierte Tests aus (Unit-Tests, Linting oder beides), der Push veröffentlicht das Image in einer Registry. Schlägt eine Stage fehl, bricht die Pipeline ab und der Push findet nicht statt.

 

Images werden mit mindestens zwei Tags versehen: einem menschenlesbaren (zum Beispiel `latest` oder eine Semver-Version) und einem eindeutigen, nachvollziehbaren (Git-SHA oder Build-Nummer). Die Wahl der Registry steht dir frei, sie wird im README begründet. Secrets (Registry-Credentials, API-Keys) liegen in den GitHub-Repository-Secrets und werden zur Laufzeit in die Pipeline eingefügt. Im Repository selbst stehen keine Zugangsdaten. Die Pipeline nutzt GitHub-Actions-Mechanismen zur Effizienz: Dependency-Caching, Docker-Layer-Caching oder vergleichbares. Ein Build ohne Code-Änderung läuft erkennbar schneller als ein erster Build. Der Workflow hat mindestens einen Trigger für den Push auf den Hauptbranch. Zusätzliche Trigger (Pull Requests, Tags, manuelle Ausführung) sind möglich und im README begründet.

 

Weitere Abweichungen sind möglich, sofern sie im README begründet sind.

## Bewertung

Die 10 Punkte verteilen sich gemäss den Vorgaben des Moduls auf Umsetzung, Dokumentation und Screencast.

 

**Umsetzung (4 Punkte)**

Bewertet wird, ob die Pipeline bei einem Push auf den Hauptbranch fehlerfrei durchläuft, alle technischen Anforderungen erfüllt sind, die Workflow-Datei sauber strukturiert ist und keine Secrets im Code stehen. Komplexität und Ambition der Pipeline fliessen in die Bewertung ein.

 

**Dokumentation (3 Punkte)**

Für 3 Punkte deckt die Dokumentation alle folgenden Aspekte ab: Was wurde umgesetzt und aus welchem Grund wurde diese Lösung gewählt. Pipeline-Diagramm oder Stage-Übersicht mit Beschreibung. Setup-Anleitung, mit der die Pipeline durch Dritte reproduziert werden kann, inklusive der benötigten Secrets. Relevante Workflow- und Konfigurationsausschnitte mit Erklärung. Begründung der wichtigsten Entscheidungen (Registry-Wahl, Tagging-Strategie, Trigger, Caching). Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde.

 

Vier der sechs Aspekte ergeben 2 Punkte, zwei der sechs Aspekte 1 Punkt. Maximaler Umfang 4 Seiten.

 

**Screencast oder Live-Demo (3 Punkte)**

Zwei bis fünf Minuten. Für 3 Punkte werden gezeigt: ein Push auf das Repository mit ausgelöster Pipeline, der vollständige Durchlauf aller Stages im GitHub-Actions-UI, sowie das resultierende Image in der gewählten Registry.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

## Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug.

## Abgabe

Abgabe via Teams bis 17.05.2026, 23:59. Enthalten sind der Git-Repository-Link mit vollständigem Code und `README.md`, die Dokumentation (max. 4 Seiten) sowie der Screencast-Link oder Anmeldung zur Live-Demo.

### * C3: Cloud-Plattform Deployment

#### Einführung

## **Vom lokalen Container in die Cloud**

"Läuft auf meinem Rechner" ist kein Deployment. Der Schritt vom lokalen Container zur Cloud-Plattform ist konzeptionell einfach, die Details sind allerdings tückisch: Konfiguration, HTTPS, Absturz-Recovery, Logs, Monitoring. Die eigene App muss für andere erreichbar sein, jederzeit, nicht nur wenn der Laptop offen ist.

 

In diesem Kapitel geht es darum, wie PaaS-Plattformen (Platform as a Service) funktionieren, welche Optionen es gibt und wie eine App Schritt für Schritt in die Cloud kommt.

## **Cloud-Service-Modelle**

Bevor eine App deployed wird, ist es wichtig zu verstehen, welche Abstraktionsebenen es in der Cloud gibt. Je höher die Abstraktion, desto weniger muss selbst verwaltet werden, aber desto weniger Kontrolle bleibt.

| Modell | Steht für | Selbst verwaltet | Anbieter verwaltet | Beispiele  |
| **IaaS** | Infrastructure as a Service | OS, Runtime, App, Daten | Hardware, Netzwerk, Virtualisierung | AWS EC2, Azure VMs, DigitalOcean Droplets, Hetzner Cloud  |
| **PaaS** | Platform as a Service | App, Daten | Alles andere (OS, Runtime, Scaling, HTTPS) | Railway, Render, Fly.io, Heroku  |
| **FaaS** | Function as a Service | Einzelne Funktionen | Alles inkl. Server-Management | AWS Lambda, Vercel Functions, Cloudflare Workers  |
| **SaaS** | Software as a Service | Konfiguration | Alles | Gmail, Slack, Notion  |

Für diese Challenge ist **PaaS** der richtige Einstiegspunkt. Der Fokus liegt auf der App, die Plattform kümmert sich um den Rest.

 
*
Quelle: https://www.stackscale.de/wp-content/uploads/2022/04/servicemodelle-fur-clouds-iaas-paas-saas-stackscale.jpg*

## **Wie funktioniert ein PaaS-Deployment?**

Der typische Ablauf bei einem PaaS-Deployment sieht so aus:

Die Plattform erkennt nach dem Push automatisch die verwendete Sprache, baut ein Container-Image (via Buildpack oder Dockerfile), startet die App, prüft per Healthcheck, ob sie funktioniert, und leitet dann den Traffic über HTTPS auf die neue Instanz.

## **Buildpacks vs. Dockerfile**

PaaS-Plattformen bieten zwei Wege, eine App zu bauen:

| Methode | Beschreibung | Wann verwenden  |
| **Buildpacks** | Die Plattform erkennt die Sprache automatisch (z.B. `package.json` → Node.js) und baut ein Image | Einfache Apps, Standard-Stacks, wenn kein Dockerfile geschrieben werden soll  |
| **Dockerfile** | Ein `Dockerfile` wird mitgeliefert, die Plattform baut daraus ein Image | Volle Kontrolle, Custom Dependencies, Multi-Stage Builds  |

**Buildpack-Erkennung** funktioniert so:

- `package.json` vorhanden → Node.js-Buildpack
- `requirements.txt` oder `Pipfile` → Python-Buildpack
- `go.mod` → Go-Buildpack
- `Dockerfile` vorhanden → Docker-Build

## **Was PaaS-Plattformen übernehmen**

- **HTTPS:** Automatisches TLS-Zertifikat, kein manuelles Setup nötig
- **DNS:** Eine Subdomain wird bereitgestellt (z.B. `myapp.railway.app`)
- **Auto-Restart:** Wenn die App abstürzt, wird sie automatisch neu gestartet
- **Logs:** Zentrales Log-Dashboard, keine SSH-Verbindung nötig
- **Deploy-on-Push:** Push auf `main` löst automatisches Re-Deployment aus
- **Rollbacks:** Zurück zur vorherigen Version mit einem Klick

## **Was sich gegenüber lokal ändert**

| Lokal | Cloud  |
| `docker compose up` | Push auf `main` löst automatisches Deployment aus  |
| `localhost:3000` | `https://myapp.railway.app`  |
| `docker logs` | Plattform-Log-Dashboard  |
| `.env`-Datei | Umgebungsvariablen im Plattform-Dashboard  |
| SSH in Container möglich | Kein SSH, Logs sind das einzige Debugging-Tool  |
| Neustart: `docker compose restart` | Automatischer Neustart bei Absturz  |
| Der eigene Rechner muss laufen | App läuft 24/7 auf Cloud-Infrastruktur  |

 

> 
Strukturierte Logs und ein Health-Endpoint sind Überlebensnotwendigkeiten in der Cloud. Ohne Logs ist Debugging unmöglich, ohne Health-Endpoint weiss die Plattform nicht, ob die App lebt.

#### Plattformen

## **Plattform-Übersicht**

| Plattform | Free Tier | Stärke | Einschränkung  |
| **Railway** | $5 Guthaben/Monat | Einfachstes Setup, gute DX, PostgreSQL inklusive | Guthaben begrenzt  |
| **Render** | Kostenloser Web Service | Grosszügiger Free Tier, managed PostgreSQL | Free Tier: Service schläft nach 15 Min. Inaktivität  |
| **Fly.io** | 3 shared VMs gratis | Docker-nativ, globale Edges, mehr Kontrolle | Kreditkarte erforderlich, komplexer als Railway  |
| **Vercel** | Grosszügiger Free Tier | Optimal für Frontend/Next.js, Edge Functions | Primär für Frontend, Backend-Limitierungen  |

## **Kosten-Vergleich (Free Tier Limits)**

| Plattform | Compute | Datenbank | Bandbreite | Einschränkungen  |
| **Railway** | $5/Monat Guthaben (ca. 500h) | PostgreSQL, MySQL, Redis inkl. | Im Guthaben enthalten | Guthaben-basiert, aufgebraucht = Stopp  |
| **Render** | 750h/Monat (1 Service) | PostgreSQL 90 Tage kostenlos | 100 GB/Monat | Service schläft nach Inaktivität, Cold Start ca. 30s  |
| **Fly.io** | 3 shared-cpu-1x VMs | Nicht inklusive (Supabase etc.) | 100 GB/Monat | Kreditkarte nötig, kein Free Tier für Storage  |
| **Vercel** | 100 GB-Hours Serverless | Nicht inklusive | 100 GB/Monat | Nur Serverless Functions, kein persistenter Server  |

## **Deep-Dive: Railway**

Railway ist die einsteigerfreundlichste PaaS-Plattform. Hier der vollständige Ablauf:

### **1. Account erstellen**

- Auf [railway.app](https://railway.app/) gehen
- Registrierung mit **GitHub-Account** (empfohlen) oder E-Mail
- Konto verifizieren (Railway benötigt eine Verifizierung für den Free Tier)

### **2. Projekt anlegen**

- Im Dashboard auf **"New Project"** klicken
- **"Deploy from GitHub repo"** auswählen
- Railway zeigt die verfügbaren GitHub-Repositories an

### **3. GitHub verbinden**

- Das Repository mit der App auswählen
- Railway erkennt automatisch die Sprache bzw. das Framework
- Falls ein `Dockerfile` vorhanden ist, wird es bevorzugt verwendet
- Falls nicht, kommt ein Buildpack zum Einsatz

### **4. Environment Variables setzen**

- Im Projekt-Dashboard auf den Service klicken, dann **"Variables"**
- Alle benötigten Variablen setzen:

```
NODE_ENV=production
DATABASE_URL=  (wird automatisch gesetzt, wenn eine DB hinzugefügt wird)
JWT_SECRET=mein-geheimer-schluessel
```

> 
Wenn eine Railway-Datenbank hinzugefügt wird, wird die `DATABASE_URL` automatisch als Variable gesetzt. Eine manuelle Eingabe ist nicht nötig.

### **5. Datenbank hinzufügen**

- Im Projekt: **"New"** → **"Database"** → **PostgreSQL** (oder MySQL, Redis, MongoDB)
- Railway erstellt eine managed Datenbank-Instanz
- Die Verbindungs-URL wird automatisch als Variable verfügbar
- Variable mit dem Service verbinden: `DATABASE_URL = ${{Postgres.DATABASE_URL}}`

### **6. Custom Domain (optional)**

- Service → **"Settings"** → **"Custom Domain"**
- Domain eintragen (z.B. `api.meinedomain.ch`)
- Railway gibt einen CNAME-Eintrag, der beim DNS-Provider gesetzt werden muss
- HTTPS wird automatisch konfiguriert (Let's Encrypt)

### **7. Deployment auslösen**

```
# Option A: Einfach pushen, Railway deployed automatisch
git push origin main

# Option B: Railway CLI verwenden
npm install -g @railway/cli
railway login
railway link    # Repository mit Railway-Projekt verknüpfen
railway up      # Manuelles Deployment
```

### **8. Logs und Monitoring**

- Im Dashboard auf den Service klicken, dann **"Logs"**
- Live-Logs der App werden angezeigt
- **Build Logs** zeigen den Build-Prozess
- **Deploy Logs** zeigen die Laufzeit-Ausgabe

## **Deep-Dive: Render**

Render bietet einen grosszügigen Free Tier und ist besonders beliebt für kleinere Projekte.

### **1. Account erstellen**

- Auf [render.com](https://render.com/) gehen
- Registrierung mit **GitHub**, **GitLab** oder E-Mail
- Keine Kreditkarte nötig für den Free Tier

### **2. Web Service erstellen**

- Dashboard → **"New"** → **"Web Service"**
- GitHub-Repository verbinden
- Render erkennt automatisch die Sprache

### **3. Build- und Start-Konfiguration**

| Feld | Beispiel (Node.js) | Beispiel (Python)  |
| **Build Command** | `npm install && npm run build` | `pip install -r requirements.txt`  |
| **Start Command** | `npm start` | `gunicorn app:app`  |
| **Root Directory** | `/` (oder Subdirectory) | `/`  |
| **Environment** | `Node` | `Python 3`  |

 

> 
Wer ein `Dockerfile` hat, wählt statt "Web Service" die Option **"Docker"** als Environment. Render baut dann das Dockerfile.

### **4. Environment Variables setzen**

- Service → **"Environment"** → **"Add Environment Variable"**
- Alle benötigten Variablen setzen (Key-Value-Paare)
- Es lassen sich auch **Environment Groups** erstellen, die von mehreren Services geteilt werden

### **5. Datenbank einrichten**

- Dashboard → **"New"** → **"PostgreSQL"**
- Den **Free** Plan wählen
- Nach Erstellung: Die **Internal Database URL** kopieren (für Services auf Render)
- Diese URL als `DATABASE_URL` Variable im Web Service setzen

> 
Die kostenlose Render-Datenbank wird nach **90 Tagen automatisch gelöscht**. Rechtzeitig ein Backup erstellen oder auf einen bezahlten Plan upgraden.

### **6. Custom Domain (optional)**

- Service → **"Settings"** → **"Custom Domains"**
- Domain eingeben und DNS-Einträge beim Provider setzen
- HTTPS wird automatisch mit Let's Encrypt konfiguriert

## **Free Tier Hinweis: Sleep Mode**

Im kostenlosen Plan schläft der Service nach **15 Minuten Inaktivität** ein. Der erste Request danach dauert **ca. 30 Sekunden** (Cold Start). Für Demonstrationen und Lernprojekte ist das akzeptabel, für produktive Apps nicht.

## **Vor- und Nachteile von PaaS**

| Vorteile | Nachteile  |
| Extrem schnelles Setup (Minuten statt Stunden) | Weniger Kontrolle über die Infrastruktur  |
| Kein Server-Management nötig | Vendor Lock-in, Migration kann aufwändig sein  |
| Automatisches HTTPS und DNS | Kosten skalieren nicht immer linear  |
| Deploy-on-Push, kein manuelles Deployment | Free Tiers haben Einschränkungen (Sleep, Limits)  |
| Automatische Restarts und Healthchecks | Debugging schwieriger als lokal (keine SSH)  |
| Managed Databases inklusive | Nicht geeignet für spezielle Infrastruktur-Anforderungen  |
| Rollbacks mit einem Klick | Abhängigkeit von einem Drittanbieter  |
| Skalierung (bei bezahlten Plänen) | Latenz höher als bei lokaler Infrastruktur  |

#### Cloud-Konzepte

## **Health-Endpoint**

Jede Cloud-App sollte einen `/health`-Endpoint bereitstellen. Dieser signalisiert der Plattform, ob die App funktioniert. Antwortet der Endpoint nicht mehr, startet die Plattform die App automatisch neu.

```js
// Express.js Beispiel
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});
```

Die Plattform ruft diesen Endpoint regelmässig auf. Ein `200 OK` bedeutet: alles in Ordnung. Bleibt die Antwort aus oder kommt ein Fehlercode zurück, wird die App als ungesund eingestuft und neu gestartet.

## **Strukturierte Logs**

In der Cloud gibt es kein lokales Terminal, in dem `console.log`-Ausgaben direkt beobachtet werden. Stattdessen landen alle Logs im Dashboard der Plattform. Strukturierte Logs im JSON-Format lassen sich dort wesentlich besser filtern und durchsuchen als unformatierte Textzeilen.

```js
// Statt:
console.log('User created: ' + user.email);

// Besser:
console.log(JSON.stringify({
  event: 'user_created',
  email: user.email,
  timestamp: new Date().toISOString()
}));
```

### **Warum strukturierte Logs?**

| Unstrukturiert | Strukturiert (JSON)  |
| Schwer zu filtern | Einfach nach Feldern filterbar (z.B. `event`, `email`)  |
| Kein einheitliches Format | Konsistentes Schema über alle Log-Einträge  |
| Nur von Menschen lesbar | Maschinenlesbar, ideal für Log-Aggregation  |
| Grep-basierte Suche | Feldbasierte Abfragen im Dashboard  |

In produktiven Umgebungen werden strukturierte Logs oft an Dienste wie Datadog, Grafana Loki oder AWS CloudWatch weitergeleitet. Das JSON-Format macht diese Integration erst möglich.

## **Port-Konfiguration**

Die meisten PaaS-Plattformen setzen die Umgebungsvariable `PORT` automatisch. Die App muss auf diesen Port hören:

```js
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
```

> 
Immer auf `0.0.0.0` binden, nicht auf `localhost` oder `127.0.0.1`. Sonst ist die App von aussen nicht erreichbar. Der Grund: `localhost` akzeptiert nur Verbindungen vom selben Rechner, `0.0.0.0` akzeptiert Verbindungen von allen Netzwerk-Interfaces.

## **Video-Empfehlungen**

| Video | Kanal | Dauer | Beschreibung  |
| Deploy a Node.js App to Railway | Railway | ca. 10 Min. | Offizielles Tutorial von Railway  |
| How to Deploy on Render | Render | ca. 8 Min. | Schritt-für-Schritt Render Deployment  |
| Vercel Deploy in 5 Minutes | Fireship | ca. 5 Min. | Schnelles Frontend-Deployment  |
| AWS vs GCP vs Azure | Fireship | ca. 12 Min. | Überblick über die grossen Cloud-Provider  |
| PaaS vs IaaS vs SaaS Explained | IBM Technology | ca. 10 Min. | Verständliche Erklärung der Service-Modelle  |

## **Vertiefung**

| Ressource | Link | Beschreibung  |
| Railway Docs | [docs.railway.app](https://docs.railway.app/) | Offizielle Railway-Dokumentation  |
| Render Docs | [docs.render.com](https://docs.render.com/) | Offizielle Render-Dokumentation  |
| Fly.io Docs | [fly.io/docs](https://fly.io/docs) | Offizielle Fly.io-Dokumentation  |
| The Twelve-Factor App | [12factor.net](https://12factor.net/) | Best Practices für Cloud-Apps, Pflichtlektüre  |
| Cloud Computing Patterns | [cloudpatterns.org](https://cloudpatterns.org/) | Architektur-Patterns für Cloud-Anwendungen  |

#### * Auftrag C3

# C3 · Cloud-Plattform Deployment

Zeitbudget ca. 3 bis 4 Stunden. Maximal 10 Punkte.

## Ausgangslage

Lokal läuft die Anwendung, in der Registry liegt das Image, doch öffentlich erreichbar ist sie damit noch nicht. Cloud-Plattformen wie Railway, Render, Fly.io oder Vercel schliessen diese Lücke und übernehmen Hosting, Skalierung und TLS. Alternativ lässt sich dieselbe Funktionalität mit einer selbst gehosteten PaaS wie Coolify auf einem eigenen Server umsetzen. Der Preis des Komforts bei Managed-Plattformen ist eine Abhängigkeit von deren Eigenheiten, der Preis der Self-Hosted-Variante ist die Verantwortung für den Unterbau.

 

In diesem Auftrag deployst du eine Anwendung auf eine Plattform deiner Wahl und machst sie unter einer öffentlichen URL erreichbar.

## Auftrag

Am Ende ist eine Anwendung unter einer öffentlichen, per HTTP oder HTTPS erreichbaren URL verfügbar. Das zugehörige Git-Repository enthält den Code, die Deployment-Konfiguration und eine Dokumentation, die den Weg vom Repository bis zur laufenden Anwendung nachvollziehbar beschreibt.

 

Welche Plattform du verwendest, entscheidest du selbst und begründest die Wahl im README. Zugelassen sind Managed-Plattformen wie Railway, Render, Fly.io oder Vercel sowie Self-Hosted-Lösungen wie Coolify auf einem eigenen Server oder einer VM. Welche fachliche Aufgabe die Anwendung erfüllt, ist dir überlassen. Eine reine Statik-Seite ohne Backend-Logik erfüllt den Auftrag nicht.

## Technische Anforderungen

Die Anwendung läuft auf einer öffentlichen Plattform und ist per HTTP oder HTTPS unter einer stabilen URL erreichbar.

 

Die Plattform wird im README genannt und die Wahl begründet. Konfiguration läuft über Environment-Variablen, die auf der Plattform gesetzt werden. Im Repository liegt eine `.env.example`, im laufenden Deployment sind keine Secrets hardcoded. Mindestens ein persistenter Datenspeicher ist eingerichtet. Das kann eine Managed Database der Plattform sein, ein angebundener Storage oder ein plattformspezifisches Volume. Daten überstehen einen Neustart oder ein Redeploy. Ein neues Deployment ist reproduzierbar. Entweder durch Git-Push mit plattform-nativer Auto-Deploy-Funktion, durch einen dokumentierten CLI-Befehl oder durch einen Workflow. Manuelles Klicken durch die Plattform-UI ohne Dokumentation reicht nicht. Die Anwendung gibt strukturierte Logs aus, die über das Logging-Interface der Plattform einsehbar sind.

 

Abweichungen sind möglich, sofern sie im README begründet sind.

## Bewertung

Die 10 Punkte verteilen sich gemäss den Vorgaben des Moduls auf Umsetzung, Dokumentation und Screencast.

 

**Umsetzung (4 Punkte)**

Bewertet wird, ob die Anwendung unter einer öffentlichen URL erreichbar ist, alle technischen Anforderungen erfüllt sind, die Deployment-Konfiguration sauber aufgebaut ist und keine Secrets im Code stehen. Komplexität und Ambition des gewählten Setups fliessen in die Bewertung ein.

 

Automatisiertes Deployment per Git-Push oder Pipeline wird positiv bewertet.

 

**Dokumentation (3 Punkte)**

Für 3 Punkte deckt die Dokumentation alle folgenden Aspekte ab: Was wurde umgesetzt und aus welchem Grund wurde diese Plattform gewählt. Architektur-Diagramm mit den beteiligten Komponenten. Setup-Anleitung, mit der das Deployment durch Dritte reproduziert werden kann, inklusive der benötigten Plattform-Accounts und Secrets. Relevante Konfigurationsausschnitte mit Erklärung. Begründung der wichtigsten Entscheidungen (Plattform-Wahl, Datenhaltung, Deployment-Methode). Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

 

**Screencast oder Live-Demo (3 Punkte)**

Zwei bis fünf Minuten. Für 3 Punkte werden gezeigt: die öffentlich erreichbare Anwendung unter ihrer URL, das Auslösen eines Deployments (Git-Push oder CLI-Befehl) sowie die Logs des laufenden Deployments im Plattform-Interface.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

## Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug.

 

Die Nutzung der Free-Tiers der genannten Plattformen ist ausreichend. Fallen Kosten an, ist das eigenverantwortlich zu klären.

## Abgabe

Abgabe via Teams bis 17.05.2026, 23:59. Enthalten sind der Git-Repository-Link mit vollständigem Code und `README.md`, die Dokumentation (max. 4 Seiten), die öffentliche URL der laufenden Anwendung sowie der Screencast-Link oder Anmeldung zur Live-Demo.

### * C4: Kubernetes

#### Einführung

## **Was ist Kubernetes?**

Kubernetes (K8s) ist ein Container-Orchestrierungssystem. Docker startet Container, Kubernetes verwaltet sie: Wie viele Instanzen laufen, was bei einem Absturz passiert, wie der Traffic verteilt wird. Es ist der Industriestandard für Container in Produktion.
*
Quelle: kubernetes.io, offizielle Darstellung der Kubernetes-Komponenten*

## **Warum Kubernetes?**

Docker Compose reicht für viele Projekte. Ab einer gewissen Grösse stösst man aber an Grenzen. Kubernetes löst Probleme, die Docker Compose nicht abdecken kann.

### **Self-Healing**

Wenn ein Container abstürzt, startet Kubernetes ihn automatisch neu. Niemand muss um 3 Uhr morgens aufstehen.

### **Horizontal Scaling**

Man definiert: "Ich will 5 Instanzen meiner App." Kubernetes verteilt sie auf die verfügbaren Nodes und sorgt dafür, dass immer 5 laufen

 

**Rolling Updates**

Neue Version deployen **ohne Downtime**: Kubernetes startet neue Pods, wartet bis sie bereit sind, und beendet dann die alten.

 

 

### **Service Discovery**

Pods kommen und gehen, ihre IP-Adressen ändern sich ständig. Kubernetes löst das mit **Services**: Ein stabiler DNS-Name (z.B. `myapp-service`), der immer auf die richtigen Pods zeigt.

## **Wann Docker Compose nicht mehr reicht**

| Anforderung | Docker Compose | Kubernetes  |
| Mehrere Container starten | Ja | Ja  |
| Auto-Restart bei Crash | `restart: always` (basic) | Liveness/Readiness Probes (intelligent)  |
| Horizontale Skalierung | Manuell (`docker compose up --scale`) | Deklarativ + Autoscaling  |
| Rolling Updates ohne Downtime | Nein | Ja, eingebaut  |
| Load Balancing | Nein (nur DNS Round-Robin) | Ja, eingebaut  |
| Multi-Server (Cluster) | Nein (ein Host) | Ja, das ist der Hauptzweck  |
| Self-Healing | Basic | Vollständig  |

## **Kubernetes vs Docker Compose**

| Eigenschaft | Docker Compose | Kubernetes  |
| **Konfiguration** | `docker-compose.yml` | Mehrere YAML-Manifeste (`Deployment`, `Service`, etc.)  |
| **Lernkurve** | Flach (30 Min. zum Einstieg) | Steil (Tage bis Wochen)  |
| **Einsatzgebiet** | Lokale Entwicklung, kleine Projekte | Produktion, grosse Systeme  |
| **Skalierung** | `--scale web=3` (ein Host) | `kubectl scale --replicas=3` (Multi-Host, Autoscaler)  |
| **Netzwerk** | Ein Bridge-Network, DNS by Container-Name | Services, Ingress, Network Policies  |
| **Secrets** | `.env`-Dateien | Kubernetes Secrets (Base64, integriert)  |
| **Health Checks** | `healthcheck` in Compose (basic) | Liveness + Readiness Probes (feingranular)  |
| **Updates** | `docker compose up -d` (kurze Downtime) | Rolling Update (zero Downtime)  |
| **Setup** | Docker installieren, fertig | Cluster aufsetzen (minikube, Cloud, etc.)  |
| **Kosten** | Minimal (ein Server) | Höher (Control Plane + Worker Nodes)  |

 

> 
**Faustregel:** Wenn eine App auf einem einzigen Server läuft und 1-5 Container nötig sind, reicht Docker Compose. Sobald Hochverfügbarkeit, Skalierung oder Multi-Server gefragt sind, ist Kubernetes die richtige Wahl.

#### Architektur

## **Architektur**

Kubernetes besteht aus zwei Ebenen: der **Control Plane** (Steuerungsebene) und den **Worker Nodes** (Arbeitsknoten).

### **Control Plane**

Die Control Plane ist das "Gehirn" des Clusters. Sie nimmt Befehle entgegen, plant die Verteilung von Pods und überwacht den Zustand.

- **API Server** nimmt alle Befehle entgegen (`kubectl` kommuniziert damit)
- **Scheduler** entscheidet, auf welchem Node ein neuer Pod platziert wird
- **Controller Manager** vergleicht Soll- mit Ist-Zustand und korrigiert Abweichungen
- **etcd** speichert den gesamten Cluster-Zustand als Key-Value-Store

### **Worker Nodes**

Auf den Worker Nodes laufen die eigentlichen Anwendungen.

- **Kubelet** ist der Agent auf jedem Node, startet und überwacht Pods
- **Container Runtime** führt die Container aus (containerd, CRI-O)

## **Komponenten-Übersicht**

| Komponente | Aufgabe  |
| **API Server** | Zentraler Eingang für alle Befehle. `kubectl` spricht mit dem API Server.  |
| **Scheduler** | Entscheidet, auf welchem Node ein neuer Pod läuft (basierend auf verfügbaren Ressourcen).  |
| **Controller Manager** | Überwacht den Zustand und sorgt dafür, dass Soll = Ist (z.B. 3 Replicas gewünscht, 2 laufen, 1 wird gestartet).  |
| **etcd** | Key-Value-Store, speichert den gesamten Cluster-Zustand.  |
| **Kubelet** | Agent auf jedem Worker Node. Startet und überwacht Pods.  |
| **Container Runtime** | Führt die Container aus (containerd, CRI-O).  |

 

**Deklarativer Ansatz:** Man beschreibt den gewünschten Zustand ("3 Instanzen meiner App sollen laufen"). Kubernetes sorgt dafür, dass dieser Zustand eingehalten wird. Das ist der zentrale Unterschied zu imperativem Vorgehen, bei dem einzelne Schritte manuell ausgeführt werden.

## **Die wichtigsten Ressourcen**

| Ressource | Was ist das? | Analogie  |
| **Pod** | Kleinste Einheit in K8s. Ein oder mehrere Container, die zusammen laufen. | Ein Docker-Container (meistens 1:1)  |
| **Deployment** | Verwaltet Pods. Sorgt für gewünschte Anzahl Replicas, Rolling Updates, Rollbacks. | `docker compose` für einen einzelnen Service  |
| **Service** | Stabiler Netzwerk-Endpunkt für Pods. Pods kommen und gehen, der Service bleibt. | Ein Load Balancer vor den Containern  |
| **ConfigMap** | Konfigurationsdaten als Key-Value-Paare. Wird in Pods gemountet oder als Env-Vars injiziert. | Eine `.env`-Datei  |
| **Secret** | Wie ConfigMap, aber Base64-kodiert und für sensible Daten (Passwörter, Tokens). | Verschlüsselte `.env`-Datei  |

### **Zusammenspiel der Ressourcen**

Das folgende Diagramm zeigt, wie die Ressourcen zusammenhängen. Das Deployment erstellt und verwaltet die Pods. Der Service leitet Traffic an die Pods weiter. ConfigMap und Secret liefern Konfigurationswerte als Umgebungsvariablen.

 

 

> 
**Tipp**: Der selector ist das verbindende Element. Deployment und Service finden "ihre" Pods über Labels (z.B. app: myapp). Deshalb müssen Labels konsistent vergeben werden.

#### Manifeste

Kubernetes-Ressourcen werden in YAML-Manifesten beschrieben. Jedes Manifest definiert den gewünschten Zustand einer Ressource. Hier werden die beiden wichtigsten Manifeste Zeile für Zeile erklärt.

## **Deployment-Manifest**

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1          # Welche API-Version? Deployments gehören zur "apps/v1"-Gruppe.
kind: Deployment              # Was für eine Ressource? Hier: ein Deployment.
metadata:
  name: myapp                 # Name des Deployments, muss im Namespace eindeutig sein.
  labels:
    app: myapp                # Labels sind Key-Value-Paare zum Organisieren und Filtern.
spec:                          # spec = Spezifikation: Was soll erreicht werden?
  replicas: 2                  # Wie viele Pod-Instanzen sollen laufen?
  selector:
    matchLabels:
      app: myapp               # Welche Pods gehören zu diesem Deployment? (Muss mit template.labels übereinstimmen)
  template:                    # Vorlage für die Pods, die erstellt werden
    metadata:
      labels:
        app: myapp             # Jeder erstellte Pod bekommt dieses Label
    spec:
      containers:
        - name: myapp          # Name des Containers innerhalb des Pods
          image: myapp:latest  # Welches Docker Image soll verwendet werden?
          imagePullPolicy: Never  # Lokales Image verwenden (wichtig für minikube!)
          ports:
            - containerPort: 3000   # Welchen Port exponiert der Container?
```

### **Felder-Erklärung**

| Feld | Bedeutung | Wichtig weil...  |
| `apiVersion` | API-Gruppe und Version | Verschiedene Ressourcen haben verschiedene API-Versionen  |
| `kind` | Typ der Ressource | K8s muss wissen, was es erstellen soll  |
| `metadata.name` | Eindeutiger Name | Zum Referenzieren in `kubectl get deployment myapp`  |
| `metadata.labels` | Organisatorische Tags | Für Selektion, Filterung und Gruppierung  |
| `spec.replicas` | Gewünschte Pod-Anzahl | K8s sorgt **immer** dafür, dass genau diese Anzahl läuft  |
| `spec.selector` | Welche Pods gehören dazu? | Verbindet Deployment mit seinen Pods via Labels  |
| `spec.template` | Pod-Vorlage | Beschreibt, wie jeder Pod aussehen soll  |
| `containers[].image` | Docker Image | Das Image, das der Pod ausführt  |
| `containers[].imagePullPolicy` | Pull-Verhalten | `Never` für lokale Images (minikube), `Always` oder `IfNotPresent` für Registry-Images  |
| `containers[].ports` | Exponierte Ports | Zur Dokumentation und für Service-Routing  |

##  

## **Erweiterte Felder: Resources, Probes und Env**

```yaml
  resources:
            requests:
              memory: "64Mi"       # Minimum: K8s reserviert mindestens 64 MiB RAM
              cpu: "100m"          # Minimum: 100 Millicores = 0.1 CPU-Kerne
            limits:
              memory: "128Mi"      # Maximum: Pod wird gekillt (OOMKilled), wenn er mehr braucht
              cpu: "250m"          # Maximum: Pod wird gedrosselt, wenn er mehr braucht
          livenessProbe:
            httpGet:
              path: /health        # K8s ruft GET /health auf
              port: 3000
            initialDelaySeconds: 10  # Warte 10 Sek. nach Start, bevor die erste Prüfung
            periodSeconds: 10        # Prüfe alle 10 Sekunden
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
          startupProbe:
            httpGet:
              path: /health
              port: 3000
            failureThreshold: 30     # Maximal 30 Versuche
            periodSeconds: 2         # Alle 2 Sekunden prüfen = max. 60 Sek. Startzeit
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:          # Wert kommt aus einem Kubernetes Secret
                  name: myapp-secret
                  key: database-url
            - name: NODE_ENV
              valueFrom:
                configMapKeyRef:       # Wert kommt aus einer ConfigMap
                  name: myapp-config
                  key: node-env
```

### **Erweiterte Felder-Erklärung**

| Feld | Was passiert?  |
| `resources.requests` | Minimum-Ressourcen. K8s platziert den Pod nur auf Nodes, die mindestens so viel frei haben.  |
| `resources.limits` | Maximum-Ressourcen. Wenn überschritten: CPU wird gedrosselt, bei RAM-Überschreitung wird der Pod gekillt.  |
| `livenessProbe` | "Lebt der Pod noch?" Falls nicht, startet Kubernetes ihn neu.  |
| `readinessProbe` | "Ist der Pod bereit für Traffic?" Falls nicht, bekommt er keinen Traffic, wird aber nicht gekillt.  |
| `startupProbe` | "Hat der Pod den Start abgeschlossen?" Solange diese Probe nicht erfolgreich ist, werden Liveness und Readiness nicht geprüft. Nützlich für Anwendungen mit langer Startzeit.  |
| `env[].valueFrom.secretKeyRef` | Env-Var kommt aus einem Kubernetes Secret (sensible Daten).  |
| `env[].valueFrom.configMapKeyRef` | Env-Var kommt aus einer ConfigMap (Klartext-Konfiguration).  |

 

> 
**Wichtig:** Die `startupProbe` schützt langsam startende Anwendungen davor, von der `livenessProbe` vorzeitig gekillt zu werden. Ohne `startupProbe` kann es passieren, dass K8s den Pod neustartet, obwohl er nur länger zum Hochfahren braucht.

## **Service-Manifest**

```yaml
# k8s/service.yaml
apiVersion: v1                 # Services gehören zur Core-API (v1)
kind: Service                  # Ressourcentyp: Service
metadata:
  name: myapp-service          # Name des Services, wird auch als DNS-Name verwendet!
spec:
  type: NodePort               # Wie ist der Service erreichbar? (siehe Tabelle unten)
  selector:
    app: myapp                 # Leite Traffic an alle Pods mit Label "app: myapp"
  ports:
    - protocol: TCP
      port: 80                 # Port, auf dem der Service hört (cluster-intern)
      targetPort: 3000         # Port im Pod, an den weitergeleitet wird
      nodePort: 30080          # Port auf dem Node (von aussen erreichbar, nur bei NodePort)
```

### **Felder-Erklärung**

| Feld | Bedeutung  |
| `metadata.name` | DNS-Name im Cluster. Andere Pods können `http://myapp-service` verwenden.  |
| `spec.type` | Erreichbarkeit: ClusterIP (intern), NodePort (extern via Port), LoadBalancer (extern via IP)  |
| `spec.selector` | Welche Pods bekommen den Traffic? Alle mit passendem Label.  |
| `ports.port` | Der Port, auf dem der Service lauscht (cluster-intern).  |
| `ports.targetPort` | Der Port im Container, an den der Traffic weitergeleitet wird.  |
| `ports.nodePort` | Externer Port auf dem Node (Bereich 30000-32767). Nur bei `type: NodePort`.  |

Der `selector` verbindet Service und Deployment. Wenn der Service `selector: app: myapp` hat, leitet er Traffic an **alle Pods** weiter, die das Label `app: myapp` tragen, egal ob 2 oder 20 Pods laufen. Das ist automatisches Load Balancing.

## **Service-Typen im Vergleich**

| Typ | Erreichbar von | Wann nutzen?  |
| **ClusterIP** | Nur innerhalb des Clusters | Default. Für interne Kommunikation (z.B. Backend zu Datenbank)  |
| **NodePort** | Von aussen über `<NodeIP>:<NodePort>` | Lokale Entwicklung mit minikube  |
| **LoadBalancer** | Von aussen über eine externe IP | Produktion in der Cloud (AWS, GCP, Azure)  |
| **Ingress** | Von aussen über Domain + Pfad | Produktion: mehrere Services hinter einer Domain (z.B. `/api` zu Backend, `/` zu Frontend)  |

 

> 
**Tipp:** Für den Auftrag C4 ist `NodePort` die einfachste Wahl. In Kombination mit minikube lässt sich der Service direkt via `minikube service myapp-service` im Browser öffnen.

#### Praxis

## **Skalierung demonstrieren**

### **Manuell skalieren mit **`**kubectl scale**`

```yaml
# Aktuelle Situation: 2 Replicas
kubectl get pods
# NAME                     READY   STATUS    RESTARTS   AGE
# myapp-7d4b8c6f5-abc12   1/1     Running   0          5m
# myapp-7d4b8c6f5-def34   1/1     Running   0          5m

# Auf 5 Replicas skalieren
kubectl scale deployment myapp --replicas=5

# Sofort prüfen (-w = watch)
kubectl get pods -w
# NAME                     READY   STATUS              RESTARTS   AGE
# myapp-7d4b8c6f5-abc12   1/1     Running             0          5m
# myapp-7d4b8c6f5-def34   1/1     Running             0          5m
# myapp-7d4b8c6f5-ghi56   0/1     ContainerCreating   0          2s
# myapp-7d4b8c6f5-jkl78   0/1     ContainerCreating   0          2s
# myapp-7d4b8c6f5-mno90   0/1     ContainerCreating   0          2s
```

### **Was passiert intern beim Skalieren?**

### **Herunterskalieren**

```atxt
# Zurück auf 2 Replicas
kubectl scale deployment myapp --replicas=2
# Kubernetes beendet 3 Pods (graceful shutdown mit SIGTERM)
```

Kubernetes wartet beim Herunterskalieren standardmässig 30 Sekunden (konfigurierbar via `terminationGracePeriodSeconds`), damit laufende Requests noch abgeschlossen werden können.

## **Horizontal Pod Autoscaler (HPA)**

Statt manuell zu skalieren, kann Kubernetes **automatisch** skalieren basierend auf Metriken:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70  # Wenn CPU > 70% → skaliere hoch
```

> 
**Hinweis:** Für den Auftrag C4 reicht manuelle Skalierung mit `kubectl scale`. HPA ist Bonus-Material.

## **kubectl-Befehlsreferenz**

| Befehl | Was macht er?  |
| `kubectl apply -f k8s/` | Wendet alle YAML-Dateien im Ordner an  |
| `kubectl get pods` | Zeigt alle laufenden Pods  |
| `kubectl get services` | Zeigt alle Services  |
| `kubectl get deployments` | Zeigt alle Deployments  |
| `kubectl describe pod <name>` | Detaillierte Infos zu einem Pod (Events, Status, Fehler)  |
| `kubectl logs <pod-name>` | Zeigt Logs eines Pods  |
| `kubectl logs <pod-name> -f` | Logs live streamen  |
| `kubectl exec -it <pod-name> -- /bin/sh` | Shell in einem Pod öffnen  |
| `kubectl scale deployment myapp --replicas=5` | Skaliert auf 5 Instanzen  |
| `kubectl delete -f k8s/` | Löscht alle Ressourcen aus den YAML-Dateien  |
| `kubectl port-forward service/myapp-service 8080:80` | Lokaler Port-Forward zum Service  |
| `kubectl rollout status deployment/myapp` | Zeigt den Status eines Rollouts  |
| `kubectl rollout undo deployment/myapp` | Rollback zum vorherigen Deployment  |

## **Lokales Setup**

Für den Auftrag C4 braucht es keinen Cloud-Cluster. Es gibt drei gängige lokale Optionen:

| Tool | Vorteile | Nachteile | Installation  |
| **minikube** | Einfachstes Setup, gut dokumentiert, `minikube service` für einfachen Zugriff | Etwas langsamer, braucht VM oder Docker | `brew install minikube` / `choco install minikube` / `winget install minikube`  |
| **kind** | Schnell, leichtgewichtig, mehrere Nodes möglich | Kein eingebauter `service`-Befehl, Netzwerk-Setup manueller | `brew install kind` / `go install sigs.k8s.io/kind@latest`  |
| **Docker Desktop** | Bereits installiert (wenn Docker Desktop genutzt), Ein-Klick-Aktivierung | Ressourcen-hungrig, eingeschränkte Konfiguration | Docker Desktop, Settings, Kubernetes, Enable  |

**Empfehlung:** Mit **minikube** starten. Es hat die beste Dokumentation und das einfachste Setup für Einsteigende.

## **Vor- und Nachteile von Kubernetes**

| Vorteile | Nachteile  |
| Self-Healing: abgestürzte Container werden automatisch neu gestartet | Steile Lernkurve, viele Konzepte und YAML-Dateien  |
| Horizontale Skalierung (manuell und automatisch via HPA) | Overhead: Control Plane braucht selbst Ressourcen  |
| Rolling Updates ohne Downtime | Für kleine Projekte Overkill (Docker Compose reicht oft)  |
| Deklarativer Ansatz: Zustand beschreiben, K8s kümmert sich | Debugging schwieriger als bei Docker Compose  |
| Service Discovery und Load Balancing eingebaut | Lokales Setup (minikube) kann langsam und ressourcenhungrig sein  |
| Riesiges Ökosystem (Helm, Istio, ArgoCD, Prometheus, ...) | YAML-Manifeste werden schnell lang und repetitiv  |
| Industriestandard, Wissen ist sehr gefragt auf dem Arbeitsmarkt | Netzwerk-Konzepte (Services, Ingress, Network Policies) komplex  |

## **Video-Empfehlungen**

| Video | Dauer | Link  |
| Kubernetes Explained in 100 Seconds | ~2 Min. | Fireship  |
| Kubernetes Crash Course | ~1h | TechWorld with Nana  |
| minikube Tutorial | ~15 Min. | YouTube  |

## **Vertiefung**

- [Kubernetes Dokumentation (offiziell)](https://kubernetes.io/docs/home/) , die offizielle Referenz, sehr umfangreich
- [Kubernetes Basics Tutorial (interaktiv)](https://kubernetes.io/docs/tutorials/kubernetes-basics/), Hands-on im Browser
- [The Illustrated Children's Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/), humorvoller Einstieg mit Bildern
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/), alle wichtigen Befehle auf einen Blick
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way), für Fortgeschrittene: K8s komplett manuell aufsetzen
- [Lens, Kubernetes IDE](https://k8slens.dev/), grafische Oberfläche für Kubernetes

#### * Auftrag C4

# C4 · Kubernetes

Zeitbudget ca. 3 bis 4 Stunden. Maximal 10 Punkte.

## Ausgangslage

Docker Compose orchestriert Container auf einem einzelnen Host. Kubernetes orchestriert Container über Cluster hinweg und bringt dabei ein eigenes Modell mit: Pods, Deployments, Services, Replikation, Rollout-Strategien, deklarative Zustandsbeschreibung. Wer Kubernetes einsetzen will, muss nicht nur Container verstehen, sondern auch wie ein Cluster Ressourcen verwaltet und konsistent hält.

 

In diesem Auftrag deployst du eine Anwendung auf einen Kubernetes-Cluster. Die Manifests beschreiben den gewünschten Zustand, der Cluster stellt ihn her.

## Auftrag

Am Ende läuft eine Anwendung in einem Kubernetes-Cluster. Im Git-Repository liegen alle Manifests oder Chart-Dateien, mit denen sich das Setup reproduzieren lässt. Die Anwendung ist im Cluster erreichbar, innerhalb des Clusters über einen Service, von aussen über Port-Forward, NodePort, Ingress oder eine vergleichbare Methode.

 

Ob du einen lokalen Cluster (minikube, Docker Desktop, kind) oder einen Cloud-Cluster (GKE, AKS, DigitalOcean) verwendest, entscheidest du selbst und begründest es im README. Welche Anwendung du deployst, ist dir überlassen, solange sie eine erkennbare fachliche Aufgabe erfüllt.

## Technische Anforderungen

Die Anwendung läuft als Deployment mit mindestens zwei Replicas. Ein zugehöriger Service exponiert die Anwendung innerhalb des Clusters. Konfiguration wird über eine ConfigMap eingebunden, Zugangsdaten oder ähnlich sensible Werte über ein Secret. Keine Zugangsdaten stehen direkt in den Deployment-Manifests.

 

Das Deployment definiert Resource Requests und Limits für CPU und Memory. Die Werte sind bewusst gewählt und im README nachvollziehbar. Der Pod verfügt über Liveness- und Readiness-Probes. Die Readiness-Probe verhindert, dass der Service Traffic an einen noch nicht startbereiten Pod weiterleitet. Die Liveness-Probe erlaubt dem Cluster, einen nicht mehr arbeitsfähigen Pod automatisch neu zu starten. Das Deployment ist reproduzierbar. Welche Methode verwendet wird, ist dir überlassen: reine YAML-Manifests mit `kubectl apply`, ein Helm Chart oder Kustomize-Overlays. Die Wahl wird im README begründet. Ein Rebuild des Clusters aus den Dateien im Repository muss funktionieren. Ein Rolling Update ist demonstrierbar. Eine geänderte Image-Version oder Konfiguration wird ausgerollt, ohne dass die Anwendung von aussen nicht erreichbar ist.

 

Abweichungen sind möglich, sofern sie im README begründet sind.

## Bewertung

Die 10 Punkte verteilen sich gemäss den Vorgaben des Moduls auf Umsetzung, Dokumentation und Screencast.

 

**Umsetzung (4 Punkte)**

Bewertet wird, ob die Anwendung im Cluster läuft und erreichbar ist, alle technischen Anforderungen erfüllt sind, die Manifests sauber strukturiert sind und keine Secrets im Klartext stehen. Komplexität und Ambition des gewählten Setups fliessen in die Bewertung ein.

 

**Dokumentation (3 Punkte)**

Für 3 Punkte deckt die Dokumentation alle folgenden Aspekte ab: Was wurde umgesetzt und aus welchem Grund wurde dieser Cluster-Typ und diese Deploy-Methode gewählt. Architektur-Diagramm mit den Kubernetes-Ressourcen und deren Zusammenhang. Setup-Anleitung, mit der das Deployment durch Dritte reproduziert werden kann, inklusive Cluster-Voraussetzungen. Relevante Manifest- oder Chart-Ausschnitte mit Erklärung. Begründung der wichtigsten Entscheidungen (Cluster-Wahl, Deploy-Methode, Probe-Konfiguration, Resource Requests und Limits). Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde.

 

Vier der sechs Aspekte ergeben 2 Punkte, zwei der sechs Aspekte 1 Punkt. Maximaler Umfang 4 Seiten.

 

**Screencast oder Live-Demo (3 Punkte)**

Zwei bis fünf Minuten. Für 3 Punkte werden gezeigt: das Erstellen oder Aktualisieren der Ressourcen im Cluster (`kubectl apply`, `helm install` oder vergleichbar), die laufende Anwendung mit mehreren Pods (`kubectl get pods`) und der erreichbare Zugriff, sowie ein Rolling Update mit sichtbarer Ablösung der alten Pods durch neue.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

## Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug.

 

Bei Cloud-Clustern ist auf Kosten zu achten. Die Nutzung von Free-Tiers oder Free-Credits ist möglich, fallen Kosten an, liegt das in der eigenen Verantwortung.

## Abgabe

Abgabe via Teams bis 17.05.2026, 23:59. Enthalten sind der Git-Repository-Link mit vollständigem Code, den Manifests oder Chart-Dateien und `README.md`, die Dokumentation (max. 4 Seiten) sowie der Screencast-Link oder Anmeldung zur Live-Demo.

### * C5: Eigene Idee

#### Einführung

Wenn dich keines der vier vorgegebenen Themen anspricht oder du eine Idee hast, die darüber hinausgeht, dann ist diese Challenge für dich. Du definierst dein eigenes Deployment-Thema. Anforderungen an Umfang, Qualität und Dokumentation bleiben identisch zu C1–C4.

## **Wie definiere ich ein gutes Projekt?**

Bevor du loslegst, solltest du dein Projekt sauber abgrenzen. Ein häufiger Fehler ist, sich zu viel vorzunehmen und dann nichts richtig zu machen. Die folgende Tabelle hilft dir bei der Einschätzung.

### **Scope richtig setzen**

| Kriterium | Gutes Zeichen | Warnsignal  |
| **Umfang** | Vergleichbar mit C1–C4 (ca. 4 Lektionen) | "Ich baue eine komplette Produktions-Infrastruktur"  |
| **Fokus** | Ein klares Deployment-Thema im Zentrum | Drei verschiedene Technologien gleichzeitig lernen  |
| **Ergebnis** | Funktionierendes, demonstrierbares Setup | Theoretische Analyse ohne praktische Umsetzung  |
| **Lerneffekt** | Du lernst etwas Neues über Deployment/DevOps | Du machst nur, was du schon kannst  |
| **Dokumentierbarkeit** | Im Screencast in 2–5 Min. zeigbar | Zu komplex, um es verständlich zu erklären  |

### **Template für deine Ideenbeschreibung**

Beantworte diese Fragen, bevor du mit der Lehrperson sprichst:

 

**Meine Idee:** [Titel]

 

**Was will ich umsetzen?** [2–3 Sätze: Was ist das Ziel?]

 

**Warum ist das ein relevantes Deployment-Thema?** [Warum gehört das in dieses Modul?]

 

**Was ist IN-SCOPE?**

- [Punkt 1]
- [Punkt 2]
- [Punkt 3]

**Was ist OUT-OF-SCOPE?**

- [Was mache ich bewusst NICHT?]

**Welche Technologien verwende ich?**

- [Technologie 1, wofür]
- [Technologie 2, wofür]

**Was ist mein Definition of Done?** [Wann bin ich fertig? Was muss funktionieren?]

#### Projektideen

Die folgenden Ideen dienen als Inspiration. Du kannst sie übernehmen, kombinieren oder etwas völlig anderes vorschlagen. Für jede Idee findest du eine kurze Erklärung, eine mögliche Architektur und weiterführende Links.

## **Monitoring-Stack mit Prometheus und Grafana**

Prometheus ist ein Open-Source-Monitoring-System, das Metriken von deinen Applikationen sammelt. Grafana visualisiert diese Metriken in Echtzeit-Dashboards. Zusammen bilden sie den De-facto-Standard für Monitoring in der DevOps-Welt.

### **Architektur**

### **Mögliche Bestandteile**

- App mit `/metrics`-Endpoint (z. B. via `prom-client` in Node.js)
- Prometheus mit `prometheus.yml`-Konfiguration
- Grafana mit vorkonfiguriertem Dashboard
- Alertmanager für Benachrichtigungen
- Alles via Docker Compose

### **Mini-Beispiel: Prometheus Config**

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['backend:3000']
```

### **Weiterführende Links**

- [Prometheus Docs: Getting Started](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana Tutorials](https://grafana.com/tutorials/)
- Video: "Prometheus and Grafana Tutorial" von TechWorld with Nana (~30 Min.)

## **Blue/Green oder Canary Deployment**

Deployment-Strategien für Zero-Downtime-Releases. Bei **Blue/Green** läuft die neue Version (Green) parallel zur alten (Blue), und der Traffic wird auf einen Schlag umgeschaltet. Bei **Canary** geht erst ein kleiner Prozentsatz des Traffics an die neue Version, dann schrittweise mehr.

### **Architektur (Blue/Green)**

### **Mögliche Bestandteile**

- Traefik oder Nginx als Reverse Proxy
- Zwei Versionen der App gleichzeitig
- Traffic-Routing über Labels oder Weights
- Rollback-Szenario demonstriert

### **Weiterführende Links**

- [Martin Fowler: BlueGreenDeployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)
- [Traefik Docs: Weighted Round Robin](https://doc.traefik.io/traefik/routing/services/#weighted-round-robin)
- Video: "Deployment Strategies Explained" von IBM Technology (~10 Min.)

## **GitOps mit ArgoCD oder FluxCD**

GitOps bedeutet: Das Git-Repository ist die einzige Quelle der Wahrheit für deine Infrastruktur. ArgoCD oder FluxCD überwachen dein Repository und synchronisieren Änderungen automatisch in den Kubernetes-Cluster. Statt `kubectl apply` machst du einen Git-Commit.

### **Architektur**

### **Mögliche Bestandteile**

- Lokaler Kubernetes-Cluster (minikube/kind)
- ArgoCD oder FluxCD installiert
- App-Manifeste im Git-Repository
- Änderung im Repository löst automatisches Deployment im Cluster aus

### **Weiterführende Links**

- [ArgoCD: Getting Started](https://argo-cd.readthedocs.io/en/stable/getting_started/)
- [FluxCD Docs](https://fluxcd.io/docs/)
- [Video: "ArgoCD Tutorial for Beginners" von TechWorld with Nana (~1h)](https://www.youtube.com/watch?v=MeU5_k9ssrs)

#### * Auftrag C5

# C5 · Eigene Idee

Zeitbudget ca. 3 bis 4 Stunden. Maximal 10 Punkte.

## Ausgangslage

Die vier vorgegebenen Challenges decken zentrale Bereiche moderner Deployment-Praxis ab. Daneben gibt es weitere Themen, die in einem Deployment-Modul ihren Platz hätten: Monitoring und Observability, GitOps, Service Meshes, Secret Management, Security Scanning, Infrastructure as Code mit Terraform oder z.B Load Testing in Pipelines

 

In diesem Auftrag wählst du ein solches Thema selbst, formulierst einen konkreten Auftrag dazu und setzt ihn um.

## Auftrag

Am Ende steht eine vollständig umgesetzte Lösung zu einer selbst gewählten Deployment-Thematik, inklusive Git-Repository, Dokumentation und lauffähigem Ergebnis. Der Auftrag wird vor Beginn der Umsetzung schriftlich eingereicht und muss genehmigt werden.

## Vorgehen

Du reichst einen kurzen Vorschlag (ca. eine halbe Seite) per Direktnachricht in Teams ein, der folgende Punkte beantwortet: Welches Thema wird bearbeitet. Welches konkrete Ergebnis steht am Ende. Welche technischen Anforderungen legst du dir selbst auf. Wie wird die Lösung nachvollziehbar gezeigt.

 

Erst nach Freigabe beginnst du mit der Umsetzung. **Deadline für den Vorschlag ist der 08.05.2026, 23:59.**

## Thematische Grenzen

Die Arbeit muss im Deployment-Umfeld verortet sein. Im Deployment-Umfeld bedeutet: das Thema bezieht sich auf den Weg von Code zu laufender Software, auf den Betrieb laufender Software oder auf die Infrastruktur darunter. Reine Frontend-Entwicklung, reine Datenanalyse oder Backend-Logik ohne Deployment-Bezug sind nicht zugelassen.

 

Gängige Themen im Rahmen dieses Auftrags: Monitoring-Stack mit Prometheus und Grafana inklusive eigener Metriken, GitOps mit ArgoCD oder Flux, Service Mesh mit Linkerd oder Istio in Grundzügen, Secret Management mit Vault oder SOPS, Container-Security-Scanning in einer Pipeline, Infrastructure as Code mit Terraform gegen einen Cloud-Provider, Load-Testing als Pipeline-Stage, Chaos Engineering mit Litmus oder Chaos Mesh.

 

Diese Liste ist nicht abschliessend. Andere Themen sind möglich, sofern sie im Vorschlag klar verortet und begründet sind.

## Technische Anforderungen

Die Lösung erreicht mindestens das Anspruchsniveau der Challenges C1 bis C4. Der Auftrag darf keine einfachere Variante eines bestehenden Themas sein. Wer beispielsweise Docker Compose wählt, muss deutlich über das hinausgehen, was C1 verlangt. Die Lösung ist reproduzierbar. Dritte können das Setup anhand der Dokumentation nachbauen, ohne auf Informationen zurückgreifen zu müssen, die nicht im Repository stehen.

 

Konfiguration läuft über Environment-Variablen oder ein geeignetes Secret-Management. Im Repository stehen keine Zugangsdaten im Klartext.

Die Lösung zeigt einen messbaren Effekt. Ein Monitoring zeigt reale Metriken, ein Security-Scan findet Befunde, ein GitOps-Setup reagiert nachvollziehbar auf Änderungen im Repository. Ein Setup, das zwar installiert ist, aber keinen sichtbaren Nutzen oder Wirkungsbereich hat, erfüllt den Auftrag nicht.

 

Weitere Anforderungen ergeben sich aus dem Vorschlag und werden Teil der Bewertungsgrundlage.

## Bewertung

Die 10 Punkte verteilen sich gemäss den Vorgaben des Moduls auf Umsetzung, Dokumentation und Screencast.

 

**Umsetzung (4 Punkte)**

Bewertet wird, ob die Lösung vollständig umgesetzt ist, die selbst gesetzten und genehmigten Anforderungen erfüllt sind, die Konfiguration sauber aufgebaut ist und keine Secrets im Code stehen. Komplexität und Ambition des gewählten Themas fliessen in die Bewertung ein. 

 

Eine Lösung unter dem Niveau von C1 bis C4 kann maximal 2 Punkte erreichen.

 

**Dokumentation (3 Punkte)**

Für 3 Punkte deckt die Dokumentation alle folgenden Aspekte ab: Was wurde umgesetzt und aus welchem Grund wurde dieses Thema gewählt. Architektur-Diagramm oder vergleichbare Darstellung der Komponenten. Setup-Anleitung, mit der die Lösung durch Dritte reproduziert werden kann. Relevante Code- und Konfigurationsausschnitte mit Erklärung. Begründung der wichtigsten Entscheidungen. Reflexion der Learnings inklusive dem, was rückblickend anders gelöst würde.

 

Vier der sechs Aspekte ergeben 2 Punkte, zwei der sechs Aspekte 1 Punkt. Maximaler Umfang 4 Seiten.

 

**Screencast oder Live-Demo (3 Punkte)**

Zwei bis fünf Minuten. Für 3 Punkte werden gezeigt: das laufende Setup, ein konkreter Anwendungsfall oder Wirkungsnachweis des gewählten Themas sowie die Reproduzierbarkeit der Lösung aus dem Repository heraus.

 

Zwei der drei Aspekte ergeben 2 Punkte, einer ergibt 1 Punkt. Ohne Screencast oder Live-Demo maximal 5 Punkte insgesamt.

## Rahmenbedingungen

KI-Tools sind zugelassen und in der Dokumentation zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug.

 

Fallen bei Cloud-Diensten Kosten an, liegt das in der eigenen Verantwortung. Die Nutzung von Free-Tiers oder Free-Credits ist ausreichend.

## Abgabe

Vorschlag via Teams bis 08.05.2026, 23:59. Nach Freigabe erfolgt die Umsetzung.

 

Finale Abgabe via Teams bis 17.05.2026, 23:59. Enthalten sind der Git-Repository-Link mit vollständigem Code und `README.md`, die Dokumentation (max. 4 Seiten) sowie der Screencast-Link oder Anmeldung zur Live-Demo.

## 03_Projektarbeit (LB2)

### Informationen

Das Vertiefungsprojekt ist die eigenständige Anwendung dessen, was in den Challenges geübt wurde. Das Ergebnis ist ein vollständiges, produktionsreifes Deployment einer eigenen Anwendung.

### Worum es geht

Im Zentrum des Projekts stehen drei Aktivitäten, die zusammen das komplette Deployment-Handwerk abbilden.

 

Die Containerisierung läuft über Dockerfiles und ein Compose-File, die Services sind sauber getrennt. Eine Pipeline, üblicherweise GitHub Actions, übernimmt Build, Tests und Veröffentlichung in eine Registry, sodass manuelle Schritte die Ausnahme bleiben. Die Zielplattform für das Deployment ist frei wählbar: eine Managed-Plattform wie Railway, Render oder Fly.io, eine Self-Hosted-Lösung wie Coolify auf einem eigenen Server oder ein Kubernetes-Cluster.

 

Die drei Schritte greifen ineinander. Ein Push ins Git-Repository löst den Build aus, das fertige Image landet in einer Registry, die Zielplattform zieht es und startet die aktualisierte Anwendung.

### Rahmenbedingungen

|   |    |
| Arbeitsform | Einzel- oder Partnerarbeit  |
| Applikation | Eigene Entwicklung oder bestehendes Projekt  |
| Deployment-Tool | Frei wählbar, passend zur Anwendung und zum Zielsystem  |
| Deadline | 30.05.2026, 23:59 Uhr  |

### Produktionsreife

«Online» reicht nicht. Eine produktionsreife Anwendung erfüllt sechs Qualitätsmerkmale:

| Merkmal | Bedeutung  |
| Containerisiert | Alle Services laufen in Containern, nachvollziehbar über Dockerfile(s) und Compose-File  |
| Automatisiert | Deployment läuft über eine Pipeline, nicht per Hand  |
| Konfigurierbar | Environment-Variablen genutzt, Secrets sicher verwaltet  |
| Erreichbar | Anwendung läuft stabil unter einer definierten Adresse  |
| Überwachbar | Strukturierte Logs und funktionierende Healthchecks  |
| Dokumentiert | Projekt ist für Dritte aufsetzbar, Setup auf einem anderen Rechner reproduzierbar  |

Diese sechs Merkmale bilden die Grundlage der Bewertung und werden in der Dokumentation nachgewiesen.

### Abgabe

Abgabe via Teams bis 30.05.2026, 23:59.

 

Enthalten sind der Git-Repository-Link mit vollständigem Code, Konfiguration und `README.md`, ein Screencast von 5 bis 10 Minuten, der den gesamten Deployment-Prozess zeigt (Push, Pipeline-Durchlauf, laufende Anwendung), sowie optional der Link zur laufenden Anwendung.

### Projektideen

Mögliche Ausgangspunkte, wenn keine eigene Idee vorhanden ist:

| Idee | Beispiel-Stack | Schwerpunkt  |
| To-Do-Anwendung | React + Express + PostgreSQL | Klassiker mit Frontend, Backend, Datenbank  |
| Blog oder CMS | Next.js + API + Datenbank | SSR-Deployment, Build-Prozess  |
| REST-API | Express oder FastAPI + Datenbank + Swagger | API-fokussiert, gut testbar  |
| Chat-Anwendung | Node.js + WebSockets | Fragen zu Skalierung und State  |
| Portfolio-Website | Astro, Hugo oder Eleventy + CDN | Statisch, schnell, gut für CI/CD  |
| Bestehende Semesterarbeit | Stack aus einem früheren Modul | Vorhandenes Projekt produktionsreif machen  |

Diese Liste ist nicht abschliessend. Eigene Ideen sind ausdrücklich willkommen, sofern der Deployment-Bezug erkennbar bleibt.

### * Auftrag LB2

### Mindestanforderungen

Für eine genügende Bewertung sind folgende Punkte erfüllt:

- Anwendung ist containerisiert, Dockerfile liegt im Repository
- CI/CD-Pipeline automatisiert mindestens Build und Deployment
- Deployment läuft auf einer Zielplattform (Managed Cloud, Self-Hosted wie Coolify, oder Kubernetes)
- Konfiguration über Environment-Variablen, keine Secrets im Code
- Healthcheck ist implementiert und funktioniert
- README enthält Architektur, Setup-Anleitung und Entscheidungsbegründungen
- Screencast zeigt Pipeline und laufende Anwendung

### Erweiterte Anforderungen

Darüber hinausgehende Umsetzungen fliessen positiv in die Bewertung ein. 

 

Mögliche Richtungen sind Monitoring und Logging (Prometheus, Grafana, Loki), eine bewusst gewählte und dokumentierte Deployment-Strategie (Rolling, Blue/Green, Canary), Security-Massnahmen (Non-Root-Container, Dependency Scanning, HTTPS), Infrastructure as Code (Terraform, Pulumi, Helm), eine Datenbank mit Backup-Strategie oder als Managed Service, automatisierte Tests in der Pipeline (Unit, Integration, E2E), eine Custom Domain oder ein Multi-Environment-Setup mit getrennten Dev- und Prod-Umgebungen.

 

Welche Erweiterungen gewählt werden, ist abhängig von Anwendung und Plattform und wird im README begründet.

### Repository

Ein Git-Repository mit vollständigem Code, Konfiguration und `README.md`. Das README ist die zentrale Dokumentation und deckt folgende Bereiche ab:

| Abschnitt | Inhalt  |
| Projektübersicht | Was die Anwendung ist und was sie tut  |
| Architekturübersicht | Services und ihre Kommunikation, als Text und Diagramm  |
| Technologie-Stack | Eingesetzte Tools und Technologien  |
| Setup-Anleitung | Schritt für Schritt, durch Dritte reproduzierbar  |
| Entscheidungsbegründungen | Warum diese Plattform, warum dieses Tool  |
| Learnings | Erkenntnisse aus dem Projekt, was rückblickend anders gelöst würde  |

Für das Architektur-Diagramm genügt eine einfache Darstellung. Geeignete Werkzeuge sind draw.io (browserbasiert), Excalidraw (Whiteboard-Stil) oder Mermaid (Diagramme als Code, funktioniert direkt in GitHub-Markdown).

### Screencast

Dauer 5 bis 10 Minuten. Gezeigt werden eine kurze Übersicht über die Repository-Struktur, ein ausgelöster Pipeline-Durchlauf nach einem Code-Push, die laufende und erreichbare Anwendung mit einem funktionalen Nachweis, Logs oder Monitoring sofern eingerichtet, sowie eine kurze Erklärung der Architektur.

 

Der Screencast ist Pflicht. Ohne Screencast sind maximal 15 von 30 Punkten erreichbar.

### * Bewertungsraster LB2

## Bewertungsraster LB2

### Übersicht

| Bereich | Max. Punkte  |
| Deployment-Setup | 12  |
| Dokumentation und Screencast | 9  |
| Qualität und Best Practices | 9  |
| **Total** | **30**  |

### Deployment-Setup (max. 12 Punkte)

| Kriterium | 0 Punkte | 1 Punkt | 2 Punkte | 3 Punkte  |
| Containerisierung | Kein Dockerfile | Dockerfile vorhanden, nicht optimiert | Layer-Caching, `.dockerignore`, sinnvolle Base-Image-Wahl | Multi-Stage, Non-Root, optimierte Image-Grösse  |
| CI/CD-Pipeline | Keine Pipeline | Nur Build | Build und Deploy automatisiert | Lint, Test, Build, Deploy mit definierter Branch-Strategie  |
| Konfiguration und Secrets | Secrets im Code | Env-Vars teilweise umgesetzt | Env-Vars korrekt genutzt, `.env.example` vorhanden | Secrets via Plattform oder Vault, Multi-Environment-Setup  |
| Deployment-Ziel | Nicht erreichbar | Läuft lokal oder einmalig | Stabil erreichbar unter definierter Adresse | Stabil erreichbar mit HTTPS und Healthcheck-gesteuertem Rollout  |

### Dokumentation und Screencast (max. 9 Punkte)

| Kriterium | 0 Punkte | 1 Punkt | 2 Punkte | 3 Punkte  |
| README | Kein README | Projektbeschreibung vorhanden | Architektur und Setup-Anleitung enthalten | Vollständig, Setup in unter 30min durch Dritte reproduzierbar  |
| Screencast | Kein Screencast | Unter 3 Minuten, unvollständig | 5 bis 10 Minuten, Pipeline und Anwendung gezeigt | Kompletter Zyklus, Architektur erklärt, strukturiert präsentiert  |
| Entscheidungen und Learnings | Nicht vorhanden | Oberflächliche Begründungen | Technische Argumente für getroffene Entscheidungen | Alternativen abgewogen, Reflexion mit konkreten Learnings  |

### Qualität und Best Practices (max. 9 Punkte)

| Kriterium | 0 Punkte | 1 Punkt | 2 Punkte | 3 Punkte  |
| Security | Root-User, offene Ports | Teilweise umgesetzt | Non-Root, HTTPS, saubere Secret-Verwaltung | Zusätzlich Dependency-Scanning oder Security-Header  |
| Reproduzierbarkeit | Nicht nachbaubar | Teilweise nachbaubar | Komplett nachbaubar mit Dokumentation | Ein Befehl startet alles (zum Beispiel `docker compose up`)  |
| Komplexität und Ambition | Minimaler Aufwand erkennbar | Grundanforderungen erfüllt | Über das Minimum hinaus (zum Beispiel Monitoring, IaC) | Anspruchsvolles Setup mit mehreren erweiterten Aspekten  |

### Rahmenbedingungen

| Regel | Details  |
| Ohne Screencast | Maximal 15 von 30 Punkten  |
| Verspätete Abgabe | Pro angefangenem Tag −0.5 Noten  |
| Plagiate und Kopien | Note 1.0  |
| KI-Tools | Erlaubt, im README zu deklarieren. Wer KI-generierten Code nicht erklären kann, riskiert Punktabzug  |
| Deadline | 30.05.2026, 23:59 Uhr (Screencast, Dokumentation, Artefakte)  |

## 04_Zusatz

### Monitoring und Logging

Deployment endet nicht, wenn die App live ist. Ab diesem Moment beginnt der wichtigste Teil: sicherstellen, dass alles läuft. **Ohne Monitoring fliegst du blind.**

 

Stell dir vor, deine App hat ein Memory Leak. Sie wird langsamer und langsamer. Nach 3 Tagen stürzt sie ab. Ohne Monitoring merkst du das erst, wenn sich ein Kunde beschwert, oder gar nicht.

## **Die drei Säulen der Observability**

Observability beschreibt, wie gut du den internen Zustand deines Systems von aussen verstehen kannst. Es gibt drei Säulen:
*
Quelle: https://opentelemetry.io/img/otel-diagram.sv*

### **Metrics**

Numerische Messwerte über Zeit. Du willst Trends erkennen und Anomalien entdecken.

| Metrik | Was sie dir sagt  |
| **CPU-Auslastung** | Ist die App unter Last?  |
| **Speicherverbrauch** | Gibt es ein Memory Leak?  |
| **Request-Rate** | Wie viele Anfragen kommen rein?  |
| **Error-Rate** | Wie viele Anfragen schlagen fehl?  |
| **Response-Zeit (P95)** | Wie schnell antwortet die App?  |

**Gängige Tools:Logs**

Textbasierte Aufzeichnungen: Was ist passiert, wann, warum? Logs sind dein Flugschreiber. Wenn etwas schiefgeht, sind Logs das Erste, was du anschaust.

 

**Gängige Tools:**

| Tool | Beschreibung  |
| [ELK Stack](https://www.elastic.co/de/elastic-stack) | Elasticsearch + Logstash + Kibana — der Klassiker  |
| [Grafana Loki](https://grafana.com/oss/loki/) | Leichtgewichtig, gut mit Grafana integriert  |
| [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) | AWS-nativ  |

### **Traces**

Verfolgen eines Requests durch mehrere Services. Essentiell bei Microservices. Wenn deine App aus 5 Services besteht und ein Request langsam ist: welcher Service ist schuld? Traces zeigen dir den Weg.

 

**Gängige Tools:**

| Tool | Beschreibung  |
| [OpenTelemetry](https://opentelemetry.io/) | Offener Standard (empfohlen)  |
| [Jaeger](https://www.jaegertracing.io/) | Open Source, von Uber entwickelt  |
| [Zipkin](https://zipkin.io/) | Open Source, von Twitter entwickelt  |

**Strukturiertes Logging**

Der grösste Fehler beim Logging: unstrukturierte Strings.

```js
// Schlecht: nicht durchsuchbar, nicht parsebar:
console.log('User 123 logged in from 192.168.1.1');

// Gut: strukturiert als JSON, maschinenlesbar:
logger.info({
  event: 'user_login',
  userId: 123,
  ip: '192.168.1.1',
  timestamp: new Date().toISOString()
});
```

**Warum strukturiert?**

| Aspekt | Unstrukturiert | Strukturiert  |
| **Suche** | Regex auf Freitext | Filter auf Felder (userId=123)  |
| **Alerting** | Schwer automatisierbar | Einfach: «Alert bei event=error»  |
| **Dashboard** | Nicht möglich | Aggregation über Felder  |

### **Log-Levels**

Verwende konsistente Log-Levels:

| Level | Wann verwenden  |
| `error` | Etwas ist kaputt, muss gefixt werden  |
| `warn` | Etwas ist verdächtig, aber funktioniert noch  |
| `info` | Normaler Betrieb, wichtige Ereignisse  |
| `debug` | Detaillierte Informationen für die Entwicklung  |

## **12-Factor Logs**

Die [12-Factor App](https://12factor.net/logs) definiert eine klare Regel: **Die App schreibt auf stdout/stderr. Die Umgebung entscheidet, was damit passiert.**

 

Das bedeutet:

- In der **Entwicklung:** Logs erscheinen in der Konsole
- In **Docker:** `docker logs` zeigt sie an
- In **Kubernetes:** Logs werden von einem Log-Collector (Fluentd, Loki) eingesammelt
- In der **Cloud:** Die Plattform leitet sie an den Logging-Service weiter

```js
// In der App, immer gleich:
console.log(JSON.stringify({ event: 'request', method: 'GET', path: '/api/users' }));

// Die Umgebung entscheidet:
// - Lokal: direkt in der Konsole
// - Docker: docker logs <container>
// - K8s: Fluentd → Elasticsearch → Kibana
```

## **Prometheus + Grafana: Schnellstart**

Die Kombination Prometheus + Grafana ist der Open-Source-Standard für Monitoring. Ein einfaches Setup mit Docker Compose:

 

Quelle: https://miro.medium.com/1*n-cVQ0NJRyMIVrLhCienxw.png

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'my-app'
    static_configs:
      - targets: ['app:3000']
```

Deine App muss einen `/metrics`-Endpoint bereitstellen. Für Node.js gibt es dafür das Paket `prom-client`:

```js
const client = require('prom-client');

// Default-Metriken sammeln (CPU, Memory, etc.)
client.collectDefaultMetrics();

// Eigene Metrik: Request-Counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'path', 'status']
});

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({ method: req.method, path: req.path, status: res.statusCode });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
```

## **Alerting**

Monitoring ohne Alerting ist wie ein Rauchmelder ohne Alarm. Definiere Regeln:

| Regel | Schwellenwert | Aktion  |
| Error-Rate > 5% | 5 Minuten lang | Slack-Nachricht  |
| Response-Zeit P95 > 2s | 10 Minuten lang | E-Mail  |
| CPU > 90% | 15 Minuten lang | Auto-Scaling oder Alert  |
| Healthcheck fehlgeschlagen | 3× hintereinander | PagerDuty / SMS  |

## **Video-Empfehlungen**

- 🎬 [«How Prometheus Monitoring works», TechWorld with Nana (20 Min.)](https://www.youtube.com/watch?v=h4Sl21AKiDg)
- 🎬 [«Logging in Kubernetes», TechWorld with Nana (15 Min.)](https://www.youtube.com/watch?v=E0gMpKb4NJI)

### Healthchecks

Jede produktionsreife Applikation braucht Healthchecks. Sie beantworten zwei Fragen:

- **Lebt die App noch?** (Liveness)
- **Ist die App bereit, Traffic zu empfangen?** (Readiness)

Ohne Healthchecks weiss weder Docker noch Kubernetes, ob deine App wirklich funktioniert. Ein Container kann laufen, aber die App darin kann hängen.

## **Liveness vs. Readiness**

| Check | Endpoint | Frage | Beispiel  |
| **Liveness** | `/health` | Lebt der Prozess noch? | Einfacher 200-Response  |
| **Readiness** | `/ready` | Kann die App Traffic verarbeiten? | DB-Verbindung prüfen, Cache warm  |

**Warum zwei Checks?**

- **Liveness schlägt fehl:** Container wird neu gestartet
- **Readiness schlägt fehl:** Container bekommt keinen Traffic (wird aus dem Load Balancer entfernt), aber läuft weiter

## **Implementierung in Express.js**

```js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Liveness: Ist die App am Leben?
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Readiness: Ist die App bereit für Traffic?
app.get('/ready', async (req, res) => {
  try {
    // Prüfe DB-Verbindung
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'ready', db: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'not ready', db: 'disconnected', error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## **Healthcheck in Docker**

Docker hat einen eingebauten `HEALTHCHECK`-Befehl im Dockerfile:

```yaml
FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Healthcheck: Alle 30 Sekunden prüfen
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

EXPOSE 3000
CMD ["node", "server.js"]
```

| Parameter | Bedeutung | Empfehlung  |
| `--interval` | Wie oft prüfen | 30s  |
| `--timeout` | Maximale Wartezeit | 5s  |
| `--start-period` | Grace Period beim Start | 10–30s  |
| `--retries` | Wie oft fehlschlagen, bevor «unhealthy» | 3  |

Prüfe den Status mit:

```shell
docker ps
# CONTAINER ID   IMAGE     STATUS
# abc123         my-app    Up 5 min (healthy)

docker inspect --format='{{.State.Health.Status}}' <container>
# healthy
```

## **Healthchecks in Docker Compose**

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
```

## **Healthchecks in Kubernetes**

Kubernetes unterscheidet drei Arten von Probes:

| Probe | Zweck | Bei Fehlschlag  |
| **livenessProbe** | Lebt der Pod? | Pod wird neu gestartet  |
| **readinessProbe** | Bereit für Traffic? | Pod wird aus dem Service entfernt  |
| **startupProbe** | Ist der Pod fertig gestartet? | Liveness/Readiness werden pausiert  |

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app:latest
          ports:
            - containerPort: 3000
          # Liveness: Neustart bei Hänger
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 30
            timeoutSeconds: 5
            failureThreshold: 3
          # Readiness: Kein Traffic bis bereit
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          # Startup: Grace Period für langsame Starts
          startupProbe:
            httpGet:
              path: /health
              port: 3000
            failureThreshold: 30
            periodSeconds: 10
```

## **Best Practices**

| Regel | Warum  |
| Liveness-Check einfach halten | Sonst wird die App unnötig neu gestartet  |
| Readiness-Check prüft Dependencies | DB, Cache, externe APIs  |
| `startupProbe` für langsame Apps | Verhindert, dass Liveness zu früh zuschlägt  |
| Keine Auth auf Health-Endpoints | Monitoring-Tools müssen ohne Token zugreifen können  |
| Sinnvolle Timeouts und Retries | Nicht zu aggressiv, nicht zu lax  |

### Security

Security ist keine optionale Ergänzung. Jede öffentlich erreichbare App ist ein potenzielles Angriffsziel. Die meisten Sicherheitslücken entstehen nicht durch raffinierte Hacker-Angriffe, sondern durch Konfigurationsfehler beim Deployment.

## **HTTPS: immer und überall**

Ohne HTTPS werden alle Daten im Klartext übertragen: Passwörter, Tokens, persönliche Daten. **Es gibt keinen Grund, im Jahr 2025 ohne HTTPS zu deployen.**

| Kontext | Lösung  |
| **PaaS (Railway, Vercel, Render)** | HTTPS ist automatisch aktiviert, du musst nichts tun  |
| **Eigener Server** | [Let's Encrypt](https://letsencrypt.org/): kostenlose Zertifikate, automatisch erneuerbar  |
| **Kubernetes** | [cert-manager](https://cert-manager.io/): automatisiert Let's Encrypt in K8s  |
| **Lokal/Entwicklung** | HTTP ist okay, aber verwende nie HTTP-only Cookies in Produktion  |

```shell
# Let's Encrypt mit Certbot (eigener Server)
sudo certbot --nginx -d example.com -d www.example.com
```

## **Container Security**

Container sind nicht per se sicher. Ein Container mit Root-Rechten und einem veralteten Base-Image ist eine Einladung für Angreifer.

### **Die wichtigsten Regeln**

| Regel | Warum  |
| **Minimale Base-Images** | Weniger Software = weniger Angriffsfläche  |
| **Non-root User** | Begrenzt den Schaden bei einem Einbruch  |
| **Images regelmässig updaten** | Sicherheitslücken werden laufend entdeckt  |
| **Keine Secrets in Images** | Images werden oft in Registries gespeichert  |
| **Dependency Scanning** | Bekannte Schwachstellen automatisch erkennen  |

### **Base-Image-Vergleich**

| Image | Grösse | Pakete | Sicherheit  |
| `node:2`4 | ~1 GB | Viele (Debian) | Grössere Angriffsfläche  |
| `node:24-slim` | ~200 MB | Reduziert | Besser  |
| `node:24-alpine` | ~130 MB | Minimal (Alpine) | Am besten für Produktion  |

## **Sicheres Dockerfile: Best Practice**

```yaml
# ── Stage 1: Build ──────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Stage 2: Production ────────────────────────
FROM node:24-alpine AS production

# Security: Non-root User
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

WORKDIR /app

# Nur Production-Dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Build-Artefakte kopieren
COPY --from=builder /app/dist ./dist

# Ownership setzen
RUN chown -R appuser:appgroup /app

# Als Non-root User ausführen
USER appuser

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

EXPOSE 3000
CMD ["node", "dist/server.js"]
```

**Was macht dieses Dockerfile sicher?**

| Massnahme | Erklärung  |
| **Multi-Stage Build** | Build-Tools landen nicht im Production-Image  |
| **Alpine-Base** | Minimale Angriffsfläche  |
| **Non-root User** | Container läuft nicht als Root  |
| **npm ci --only=production** | Keine Dev-Dependencies im Image  |
| **npm cache clean** | Kein Cache im Image  |
| **HEALTHCHECK** | Docker weiss, ob die App lebt  |

## **Dependency Scanning**

Deine App ist nur so sicher wie ihre schwächste Dependency. Automatisiertes Scanning findert bekannte Schwachstellen:

| Tool | Kontext | Beschreibung  |
| [Snyk](https://snyk.io/) | CLI + CI/CD | Scannt Dependencies, Container-Images, IaC  |
| [Trivy](https://trivy.dev/) | CLI + CI/CD | Open Source, scannt Images und Filesystems  |
| [Dependabot](https://github.com/dependabot) | GitHub | Automatische PRs bei veralteten Dependencies  |
| `npm audit` | Node.js | Eingebaut, schneller Check  |

```yaml
# GitHub Actions: Trivy-Scan
- name: Scan image with Trivy
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'my-app:latest'
    format: 'table'
    exit-code: '1'
    severity: 'CRITICAL,HIGH'
```

### **Die .env-Datei richtig verwenden**

```
# .env: NICHT committen!
DATABASE_URL=postgres://user:password@localhost:5432/mydb
JWT_SECRET=super-secret-key-123
API_KEY=sk-abc123

# .env.example: committen! Zeigt die Struktur ohne Werte.
DATABASE_URL=postgres://user:password@host:5432/dbname
JWT_SECRET=your-jwt-secret-here
API_KEY=your-api-key-here
```

```
# .gitignore
.env
.env.local
.env.production
```

### **GitHub Secrets in Actions verwenden**

```yaml
# .github/workflows/deploy.yml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          API_KEY: ${{ secrets.API_KEY }}
        run: |
          echo "Deploying with secrets..."
```

### **Kubernetes Secrets**

```
# Secret erstellen
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL='postgres://user:pw@db:5432/mydb' \
  --from-literal=JWT_SECRET='super-secret'

# Im Pod verwenden
```

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
        - name: my-app
          envFrom:
            - secretRef:
                name: app-secrets
```

## **Wenn ein Secret im Git landet**

Es passiert. Wichtig ist, dass du sofort und richtig reagierst:

- **Sofort rotieren:** Neues Passwort / neuen Key generieren. Das alte Secret ist kompromittiert.
- **Git-History bereinigen:** Das Secret ist in der Git-History, auch wenn du es löschst.
- **Prüfen, ob missbraucht:** Logs checken, ob jemand das Secret verwendet hat.

```shell
# BFG Repo-Cleaner: entfernt Secrets aus der Git-History
# https://rtyley.github.io/bfg-repo-cleaner/

# 1. Secret in Datei speichern
echo "super-secret-key-123" > secrets-to-remove.txt

# 2. BFG laufen lassen
java -jar bfg.jar --replace-text secrets-to-remove.txt my-repo.git

# 3. Git-History bereinigen
cd my-repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 4. Force-Push (Achtung: informiere dein Team!)
git push --force
```

## **Security-Checkliste für dein Projekt**

- [ ] HTTPS aktiv (oder PaaS mit automatischem HTTPS)
- [ ] Keine Secrets im Code oder Git-Repository
- [ ] `.env` in `.gitignore`
- [ ] `.env.example` vorhanden
- [ ] Container läuft als Non-root User
- [ ] Minimales Base-Image (Alpine)
- [ ] Dependencies aktuell (`npm audit`, Dependabot)
- [ ] Healthcheck implementiert
- [ ] Keine Debug-Informationen in Produktion

## **Video-Empfehlungen**

- 🎬 [«Docker Security Best Practices», Snyk (12 Min.)](https://www.youtube.com/watch?v=JE2PJbbpjsM)
- 🎬 [«Kubernetes Security Best Practices», CNCF (25 Min.)](https://www.youtube.com/watch?v=oBf5lrmquYI)

## 05_Weitere-Ressourcen

Diese Seite sammelt hilfreiche Links, Kurse und Bücher rund um Deployment, DevOps und Cloud-Technologien. Du brauchst nicht alles durchzuarbeiten. Wähle aus, was dich interessiert.

## **Offizielle Dokumentationen**

| Technologie | Link | Bemerkung  |
| Docker | [docs.docker.com](https://docs.docker.com/) | Referenz für Dockerfile, Compose, CLI  |
| Kubernetes | [kubernetes.io/docs](https://kubernetes.io/docs) | Offizielle K8s-Doku, sehr umfangreich  |
| GitHub Actions | [docs.github.com/en/actions](https://docs.github.com/en/actions) | Workflows, Actions, Secrets  |
| Railway | [docs.railway.com](https://docs.railway.com/) | PaaS-Deployment, einfach zu starten  |
| Vercel | [vercel.com/docs](https://vercel.com/docs) | Frontend-Deployment, Serverless Functions  |
| Render | [docs.render.com](https://docs.render.com/) | Alternative zu Railway  |
| Terraform | [developer.hashicorp.com/terraform](https://developer.hashicorp.com/terraform) | Infrastructure as Code  |
| Helm | [helm.sh/docs](https://helm.sh/docs) | Kubernetes-Paketmanager  |

## **Video-Kurse und Tutorials**

### **Docker**

| Video | Kanal | Dauer  |
| [Docker Tutorial for Beginners](https://www.youtube.com/watch?v=pTFZFxd4hOI) | Programming with Mosh | 1 Std.  |
| [Docker in 100 Seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ) | Fireship | 2 Min.  |
| [Docker Compose Tutorial](https://www.youtube.com/watch?v=HG6yIjZapSA) | TechWorld with Nana | 1 Std.  |
| [you need to learn Docker RIGHT NOW!!](https://www.youtube.com/watch?v=eGz9DS-aIeY) | NetworkChuck | 20 Min.  |

### **Kubernetes**

| Video | Kanal | Dauer  |
| [Kubernetes Tutorial for Beginners](https://www.youtube.com/watch?v=X48VuDVv0do) | TechWorld with Nana | 4 Std.  |
| [Kubernetes in 100 Seconds](https://www.youtube.com/watch?v=PziYflu8cB8) | Fireship | 2 Min.  |
| [Kubernetes Crash Course](https://www.youtube.com/watch?v=s_o8dwzRlu4) | TechWorld with Nana | 1 Std.  |

### **CI/CD & GitHub Actions**

| Video | Kanal | Dauer  |
| [GitHub Actions Tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI) | TechWorld with Nana | 1 Std.  |
| [DevOps CI/CD Explained in 100 Seconds](https://www.youtube.com/watch?v=scEDHsr3APg) | Fireship | 2 Min.  |
| [GitHub Actions: Supercharge your GitHub Flow](https://www.youtube.com/watch?v=cP0I9w2coGU) | GitHub | 10 Min.  |

### **Cloud & Deployment**

| Video | Kanal | Dauer  |
| [What is DevOps?](https://www.youtube.com/watch?v=kBV8gPVZNEE) | GitHub | 8 Min.  |
| [Cloud Computing Explained](https://www.youtube.com/watch?v=M988_fsOSWo) | Fireship | 10 Min.  |
| [Terraform in 100 Seconds](https://www.youtube.com/watch?v=tomUWcQ0P3k) | Fireship | 2 Min.  |

## **Bücher und Lernpfade**

### **Bücher**

| Buch | Autor | Warum relevant  |
| **The Phoenix Project** | Gene Kim, Kevin Behr, George Spafford | Roman über DevOps-Transformation, macht die Kultur greifbar  |
| **Docker Deep Dive** | Nigel Poulton | Praxisnahe Docker-Referenz, regelmässig aktualisiert  |
| **Kubernetes Up & Running** | Kelsey Hightower, Brendan Burns | Der K8s-Klassiker, fundiert und praxisnah  |
| **The DevOps Handbook** | Gene Kim et al. | Weiterführung von «The Phoenix Project», mehr Theorie und Praxis  |
| **Site Reliability Engineering** | Google (kostenlos online) | Wie Google Systeme betreibt: [sre.google/sre-book](https://sre.google/sre-book/table-of-contents/)  |

### **Online-Lernpfade**

| Ressource | Link | Beschreibung  |
| **90DaysOfDevOps** | [github.com/MichaelCade/90DaysOfDevOps](https://github.com/MichaelCade/90DaysOfDevOps) | 90-Tage-Challenge, alle DevOps-Themen abgedeckt  |
| **12-Factor App** | [12factor.net](https://12factor.net/) | Die 12 Prinzipien für cloud-native Apps  |
| **KillerCoda** | [killercoda.com](https://killercoda.com/) | Interaktive K8s- und Docker-Szenarien im Browser  |
| **Play with Docker** | [labs.play-with-docker.com](https://labs.play-with-docker.com/) | Docker direkt im Browser ausprobieren  |
| **Play with Kubernetes** | [labs.play-with-k8s.com](https://labs.play-with-k8s.com/) | K8s direkt im Browser ausprobieren  |

## **Zertifizierungen (für Interessierte)**

Falls du dich beruflich in Richtung DevOps/Cloud spezialisieren willst, sind diese Zertifizierungen anerkannt:

| Zertifizierung | Anbieter | Level | Beschreibung  |
| **CKA** (Certified Kubernetes Administrator) | CNCF | Fortgeschritten | Praxisprüfung am Terminal, der Goldstandard für K8s  |
| **CKAD** (Certified Kubernetes Application Developer) | CNCF | Mittel | Fokus auf App-Entwicklung in K8s  |
| **AWS Cloud Practitioner** | AWS | Einstieg | Guter Einstieg in die AWS-Welt  |
| **Azure AZ-900** | Microsoft | Einstieg | Cloud-Grundlagen mit Azure  |
| **GitHub Actions Certification** | GitHub | Mittel | CI/CD mit GitHub Actions  |
| **Docker DCA** (Docker Certified Associate) | Docker | Mittel | Docker-Kernkompetenzen  |

## **Tools-Übersicht**

Eine Zusammenfassung aller Tools, die in diesem Modul vorkommen:

| Kategorie | Tools  |
| **Containerisierung** | Docker, Podman  |
| **Orchestrierung** | Docker Compose, Kubernetes, Helm  |
| **CI/CD** | GitHub Actions, GitLab CI, Jenkins  |
| **Cloud (PaaS)** | Railway, Vercel, Render, Fly.io  |
| **Cloud (IaaS)** | AWS, Google Cloud, Azure, DigitalOcean  |
| **Infrastructure as Code** | Terraform, Pulumi, Ansible  |
| **Monitoring** | Prometheus, Grafana, Datadog  |
| **Logging** | ELK Stack, Grafana Loki, CloudWatch  |
| **Security** | Trivy, Snyk, Dependabot, cert-manager  |
