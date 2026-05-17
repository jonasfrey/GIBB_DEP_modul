# C3 — Cloud-Plattform Deployment auf Render

Express-App aus C2, deployed auf [Render](https://render.com) mit **Managed Postgres** für persistente Daten und **Auto-Deploy bei Git-Push**. Das Setup ist als **Blueprint** ([`render.yaml`](./render.yaml)) versioniert — Web Service + Datenbank werden mit einem Klick aus dem Repo erzeugt.

- **Plattform:** Render (Free Tier, Region Frankfurt)
- **Persistenz:** Render Postgres (managed, Tabelle `request_log`)
- **Deployment:** `git push origin main` → autoDeploy via Blueprint
- **Logs:** strukturiertes JSON auf `stdout` → Render-Log-Stream
- **Doku:** [DOCUMENTATION.md](./DOCUMENTATION.md) (max. 4 Seiten, alle 6 Aspekte)
- **Screencast-Drehbuch:** [SCREENCAST.md](./SCREENCAST.md)

## Live-URL

```
https://dep-myapp-c3.onrender.com
```

## Voraussetzungen

| Tool / Account | Hinweis |
|---|---|
| GitHub-Account | Repo muss erreichbar sein (public oder im Render-Account verbunden) |
| Render-Account | Free Tier reicht. Signup unter [render.com](https://render.com) — GitHub-Login empfohlen |
| Node.js ≥ 20 | nur für lokale Entwicklung |
| Docker ≥ 24 | nur für lokale Image-Tests |

**Keine zusätzlichen Repository-Secrets nötig.** `DATABASE_URL` wird von Render automatisch in den Web Service injiziert (siehe `render.yaml`, `fromDatabase`).

## Deployment via Blueprint (Erstdeployment)

1. Im Render-Dashboard: **New +** → **Blueprint**.
2. Repo `jonasfrey/GIBB_DEP_modul` verbinden.
3. Render erkennt [`auftrag3_cloud_render/render.yaml`](./render.yaml) automatisch und zeigt:
   - Web Service `dep-myapp-c3` (Docker, Frankfurt, Free Plan)
   - Database `dep-myapp-db` (Postgres, Frankfurt, Free Plan)
4. **Apply** klicken. Render baut das Docker-Image und stellt die DB bereit.
5. Beim ersten Start läuft `db.init()` und erstellt die Tabelle `request_log`.

## Re-Deployment

Auto-Deploy ist aktiv (`autoDeploy: true` in `render.yaml`):

```bash
git commit -am "deploy"
git push origin main
# Render zieht den Push, baut neu, schaltet ohne Downtime um.
```

Manuell aus dem UI: **Manual Deploy** → **Deploy latest commit**.

## Lokal ausführen

```bash
cp .env.example .env
npm ci
npm run lint
npm test       # 9/9 ohne DB (In-Memory-Fallback)
npm start      # http://localhost:3000
```

Mit echter Postgres lokal (optional, via Docker):

```bash
docker run -d --name pg -e POSTGRES_PASSWORD=secret -p 5432:5432 postgres:16
DATABASE_URL=postgres://postgres:secret@localhost:5432/postgres PGSSL=disable npm start
```

## Lokal als Container

```bash
docker build -t dep-myapp-c3 .
docker run --rm -p 3000:3000 dep-myapp-c3
curl http://localhost:3000/api/health
# {"status":"healthy","persistent":false}
```

## API

| Methode | Endpoint | Beschreibung |
|---|---|---|
| GET | `/api/health` | Liveness, `{ "status": "healthy", "persistent": <bool> }` |
| GET | `/api/info` | Statische Info (Name, Klasse, Hobby) |
| GET | `/api/status` | Hostname, Version, Timestamp, App, Persistent-Flag |
| GET | `/api/echo/:message` | Echo + reversed (max. 200 Zeichen) |
| GET | `/api/prime?n=<int>` | Primzahl-Check (0 – 1 000 000) |
| **POST** | **`/api/visits`** | **Visit zählen → INSERT in `request_log`** |
| **GET** | **`/api/visits`** | **Total-Count + letzte 20 Einträge** |

## Persistenz-Beweis

`POST /api/visits` schreibt in `request_log`. Nach einem **Manual Deploy** in Render bleibt der Total-Count erhalten — die DB-Instanz lebt unabhängig vom Web-Service-Container.

## Environment-Variablen

| Name | Wo gesetzt | Default |
|---|---|---|
| `PORT` | Render setzt automatisch | `3000` |
| `APP_NAME` | `render.yaml` `envVars` | `dep-myapp-c3` |
| `APP_VERSION` | `render.yaml` `envVars` | `1.0.0` |
| `DATABASE_URL` | `render.yaml` `fromDatabase` (auto-injected) | leer → In-Memory-Fallback |
| `PGSSL` | optional, `disable` für lokales Postgres ohne SSL | (SSL aktiv) |
| `NODE_ENV` | `render.yaml` | `production` |

## Strukturierte Logs

Alle Log-Zeilen sind JSON-Objekte mit `ts`, `level`, `msg` und optionalen Feldern:

```
{"ts":"2026-05-09T08:42:00Z","level":"info","msg":"http","method":"GET","path":"/api/visits","ip":"…"}
{"ts":"2026-05-09T08:42:00Z","level":"info","msg":"postgres ready, request_log table ensured"}
```

Render zeigt diese Zeilen unter **Logs** im Dashboard (oder via `render logs` CLI). Die JSON-Struktur erlaubt strukturierte Suche/Filterung.

## Begründung der Entscheidungen

Siehe [DOCUMENTATION.md §5](./DOCUMENTATION.md). Kurz:

- **Render** statt Fly.io/Railway: GitHub-Auto-Deploy ohne Kreditkarte, HTTPS automatisch, Blueprint = Infrastructure-as-Code.
- **Postgres** statt Volume: portabel (kein Vendor-Lock auf Fly-Volume-API), echtes "Stateful Service"-Setup.
- **Blueprint (`render.yaml`)** statt UI-Klicks: erfüllt die Anforderung "Reproduzierbar durch Dritte".
- **In-Memory-Fallback** ohne DATABASE_URL: lokaler Dev-Workflow ohne DB; Tests laufen ohne externes Setup.

## Bekannte Einschränkungen

- **Render-Free-Tier**: Web Service spinnt nach 15 Min. Idle herunter (Cold Start ≈ 30 s). Free-Postgres läuft 30 Tage, danach Suspend bis Upgrade.
- **SSL gegen Render-Postgres** läuft mit `rejectUnauthorized: false` — Render terminiert TLS, das interne Zertifikat wird nicht validiert. Akzeptabel für Free-Tier, in Produktion strenger setzen.
