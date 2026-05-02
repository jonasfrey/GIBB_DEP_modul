# C2 — CI/CD mit GitHub Actions

Node.js/Express-App aus C1, ergänzt um eine **GitHub-Actions-Pipeline** mit den Stages `test → build → push`.
Bei jedem Push auf `main` läuft die Pipeline automatisch durch und schiebt das Docker-Image als zwei
getaggte Versionen (`latest` + `sha-<commit>`) in die GitHub Container Registry (GHCR).

- **Workflow-Datei:** [.github/workflows/ci.yml](../.github/workflows/ci.yml)
- **Image:** `ghcr.io/jonasfrey/dep-myapp:latest`
- **Doku:** [DOCUMENTATION.md](./DOCUMENTATION.md) (max. 4 Seiten, mit allen 6 geforderten Aspekten)

## Voraussetzungen

| Tool    | Version             |
|---------|---------------------|
| Node.js | ≥ 20 (empfohlen 24) |
| Docker  | ≥ 24                |
| Git     | aktuell             |

## Lokal ausführen

```bash
cp .env.example .env
npm ci
npm run lint   # node --check (Syntax)
npm test       # node --test  (8 HTTP-Integrationstests)
npm start      # http://localhost:3000
```

## Docker

```bash
docker build -t dep-myapp .
docker run -d --name myapp -p 3000:3000 dep-myapp
curl http://localhost:3000/api/health  # {"status":"healthy"}
```

## Image aus GHCR ziehen

```bash
docker pull ghcr.io/jonasfrey/dep-myapp:latest
docker run -d -p 3000:3000 ghcr.io/jonasfrey/dep-myapp:latest
```

Falls das Repo privat ist, vorher anmelden:

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u jonasfrey --password-stdin
```

## Pipeline-Übersicht

```
push/PR auf main
   │
   ▼
┌───────────────┐    needs    ┌──────────────┐    needs    ┌──────────────┐
│  test         │────────────▶│  build       │────────────▶│  push        │
│  npm ci       │             │  docker build│             │  GHCR push   │
│  npm run lint │             │  smoke /api/ │             │  Tags:       │
│  npm test     │             │   health     │             │   latest,    │
└───────────────┘             └──────────────┘             │   sha-<sha>, │
                                                           │   <branch>   │
                                                           └──────────────┘
```

| Stage | Job        | Läuft auf | Bedingung                                 |
|-------|------------|-----------|-------------------------------------------|
| 1     | `test`     | ubuntu-latest | jeder Push & PR auf `main`            |
| 2     | `build`    | ubuntu-latest | wenn `test` grün                      |
| 3     | `push`     | ubuntu-latest | wenn `build` grün **und** Push auf `main` (kein PR) |

`pull_request`-Trigger pushen **nicht** — verhindert, dass forkende oder unfertige Branches das Registry-Image überschreiben.

## API

| Methode | Endpoint              | Beschreibung                                                     |
|---------|-----------------------|------------------------------------------------------------------|
| GET     | `/api/health`         | Liveness, `{ "status": "healthy" }`                              |
| GET     | `/api/info`           | Statische Info (Name, Klasse, Hobby)                             |
| GET     | `/api/status`         | Hostname, Version, Timestamp, App-Name                           |
| GET     | `/api/echo/:message`  | Echo + reversed (max. 200 Zeichen)                               |
| GET     | `/api/prime?n=<int>`  | Primzahl-Check (0 – 1 000 000)                                   |
| GET     | `/api/log`            | Schreibt + liest Log aus `DATA_DIR/requests.log`                 |

## Umgebungsvariablen

| Name          | Beschreibung                              | Default      |
|---------------|-------------------------------------------|--------------|
| `PORT`        | TCP-Port, auf dem die App lauscht         | `3000`       |
| `APP_NAME`    | Anzeigename der App                       | `dep-myapp`  |
| `APP_VERSION` | Versions-String für `/api/status`         | `1.0.0`      |
| `DATA_DIR`    | Verzeichnis für persistente Log-Dateien   | `./data`     |

## Secrets

In dieser Pipeline ist **kein zusätzliches Repository-Secret** nötig.
Für den GHCR-Push wird das von GitHub automatisch bereitgestellte `GITHUB_TOKEN`
mit `permissions.packages: write` verwendet (siehe [ci.yml](../.github/workflows/ci.yml)).

## Image-Tags

Das Image wird mit drei Tags versehen — die Aufgabe verlangt mindestens zwei:

| Tag                         | Zweck                                                       |
|-----------------------------|-------------------------------------------------------------|
| `latest`                    | Menschenlesbar, immer der jüngste `main`-Build              |
| `sha-<full-commit-sha>`     | Eindeutig, perfekt nachvollziehbar pro Commit               |
| `<branch>` (z. B. `main`)   | Praktisch beim Roll-back auf den letzten Branch-Stand       |

## Verwendete Actions

| Action                          | Zweck                                          |
|---------------------------------|------------------------------------------------|
| `actions/checkout@v4`           | Code auschecken                                |
| `actions/setup-node@v4`         | Node 20 + npm-Cache                            |
| `docker/setup-buildx-action@v3` | Buildx-Builder für effizienten Image-Build     |
| `docker/login-action@v3`        | Anmeldung an GHCR per `GITHUB_TOKEN`           |
| `docker/metadata-action@v5`     | Tags & OCI-Labels generieren                   |
| `docker/build-push-action@v6`   | Build + Push, mit GitHub-Actions-Layer-Cache   |
