# C1 — Multi-Service-Architektur mit Docker Compose

3 Services in einem Compose-Stack: **nginx** (Reverse Proxy) → **web** (Express + pg) → **postgres** (managed). Custom Network, Named Volume, Healthchecks, strukturierte JSON-Logs.

- **Stack-Definition:** [compose.yaml](./compose.yaml)
- **Web-Service-Code:** [web/](./web/)
- **Nginx-Konfiguration:** [nginx/nginx.conf](./nginx/nginx.conf)
- **Doku:** [DOCUMENTATION.md](./DOCUMENTATION.md) (alle 6 Aspekte, max. 4 Seiten)
- **Screencast-Drehbuch:** [SCREENCAST.md](./SCREENCAST.md)

## Quick start

```bash
cp .env.example .env
# .env editieren: POSTGRES_PASSWORD=<eigenes-passwort>
docker compose up --build
# Browser: http://localhost:8080
```

Stoppen: `docker compose down` (Daten bleiben). Reset inkl. DB: `docker compose down -v`.

## Architektur

```
   Browser
      │
      ▼   :8080
┌──────────┐         ┌─────────┐         ┌──────────┐
│  nginx   │ ──────▶ │  web    │ ──────▶ │ postgres │
│  :80     │  HTTP   │ :3000   │  TCP    │  :5432   │
│ (proxy)  │         │ Express │  pg     │ (DB)     │
└──────────┘         └─────────┘         └──────────┘
              app_net (custom bridge)
                                          ▼
                                      pg_data (named volume)
```

| Service | Image / Build | Aufgabe |
|---|---|---|
| `nginx` | `nginx:1.27-alpine` + custom config | Reverse Proxy, JSON-Access-Logs |
| `web` | Multi-Stage `web/Dockerfile` (Node 24-alpine, non-root, healthcheck) | Express-API, schreibt nach Postgres |
| `postgres` | `postgres:16-alpine` | Persistente DB, Tabelle `request_log` |

## Erfüllte C1-Anforderungen

| Anforderung | Wo erfüllt |
|---|---|
| ≥3 Services | `compose.yaml`: postgres, web, nginx |
| Multi-Stage-Build | [web/Dockerfile](./web/Dockerfile) |
| `.env.example` + `.env` in `.gitignore` | [.env.example](./.env.example), [.gitignore](./.gitignore) |
| Named Volume | `pg_data` (Postgres-Datenverzeichnis) |
| Healthcheck mit `depends_on: condition: service_healthy` | `postgres` (`pg_isready`) → `web` wartet; `web` (`/api/health`) → `nginx` wartet |
| Custom Network | `app_net` (bridge) |
| Restart-Policies | `restart: unless-stopped` auf allen Services |
| Strukturierte Logs auf stdout | nginx: JSON-Access-Log; web: JSON via [web/logger.js](./web/logger.js); postgres: stdout |

## Test-Walkthrough (Persistenz beweisen)

```bash
docker compose up --build -d

# Visit-Counter erhöhen
curl -X POST http://localhost:8080/api/visits
curl       http://localhost:8080/api/visits   # total: 1

# web stoppen + neu starten -> Daten bleiben
docker compose restart web
curl       http://localhost:8080/api/visits   # total: 1 (überlebt)

# Komplett neu, Volume bleibt
docker compose down                            # ohne -v !
docker compose up -d
curl       http://localhost:8080/api/visits   # total: 1 (überlebt)
```

## API (durchgereicht via nginx)

| Methode | Endpoint | Zweck |
|---|---|---|
| GET | `/api/health` | `{ "status": "healthy", "persistent": true }` |
| GET | `/api/status` | Hostname, Version, Timestamp, App, Persistent-Flag |
| GET | `/api/info` | Statische Info |
| GET | `/api/echo/:msg` | Echo + reversed |
| GET | `/api/prime?n=…` | Primzahl-Check |
| POST | `/api/visits` | Insert in `request_log` |
| GET | `/api/visits` | Total + letzte 20 Einträge |

## Lokal ohne Compose (nur web-Service, In-Memory-Fallback)

```bash
cd web
npm ci && npm test       # 9/9 grün, ohne DB
npm start                # http://localhost:3000
```

## Resilienz-Tests

```bash
# Postgres ausschalten -> web bleibt running, neue Schreibvorgaenge schlagen fehl
docker compose stop postgres
curl -X POST http://localhost:8080/api/visits   # 500 (erwartet)

# Postgres zurueck -> web faengt sich automatisch
docker compose start postgres
sleep 5
curl -X POST http://localhost:8080/api/visits   # 201 (Normalbetrieb)
```
