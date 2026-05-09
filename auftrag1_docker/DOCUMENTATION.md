# C1 — Multi-Service-Architektur mit Docker Compose · Dokumentation

**Modul:** HFI_DEP — Deployment (GIBB) · **Autor:** Jonas Frey · **Stand:** 2026-05-09
**Repo:** https://github.com/jonasfrey/GIBB_DEP_modul

---

## 1. Was wurde umgesetzt — und warum so?

Ein Compose-Stack mit **3 Services in produktionstypischer Form**:

```
nginx (Reverse Proxy) → web (Express) → postgres (DB)
```

Die Services haben **echte Abhängigkeiten**: nginx kann ohne web nichts proxyen, web kann ohne postgres keine Daten persistieren. Ausfall eines Service legt nicht den Stack lahm — nginx bleibt erreichbar, web kommt nach Postgres-Recovery von selbst zurück (`restart: unless-stopped` + Healthchecks).

**Fachliche Aufgabe:** Jeder Visit wird in `request_log` (Postgres) gezählt. Der Counter ist persistent (Named Volume) und überlebt Container-Restarts und einen `docker compose down` (ohne `-v`).

**Warum diese 3 Services?**
- **nginx** statt direkter Web-Exposure: zeigt das Proxy-Pattern (Layer-7-Routing, X-Forwarded-Header, separates Access-Log) und entkoppelt den Web-Container vom externen Port.
- **postgres** statt SQLite/File: erzwingt einen echten "Stateful Service" mit Healthcheck und Volume.
- **web** als Bindeglied: einzige Komponente mit eigener Codebase und eigenem Multi-Stage-Dockerfile.

---

## 2. Architektur

```
        Browser :8080                  Container-internal
            │
            ▼  HTTP
  ┌───────────────────┐    upstream    ┌─────────────────┐    pg-Pool    ┌───────────────────┐
  │     nginx         │ ─────────────▶ │      web        │ ────────────▶ │     postgres      │
  │  nginx:1.27-      │  proxy_pass    │  Node 24-alpine │   port 5432   │  postgres:16-     │
  │  alpine           │  Host/X-Fwd-*  │  Express + pg   │               │  alpine           │
  │  port 80          │                │  port 3000      │               │  port 5432        │
  │  JSON access-log  │                │  JSON logs      │               │  pg_isready hc    │
  │                   │                │  /api/health hc │               │                   │
  └───────────────────┘                └─────────────────┘               └─────────────────┘
                              ┌──────────── app_net (bridge) ────────────┐
                                                                         │
                                                                         ▼
                                                            pg_data (named volume)
```

**Komponenten:**

| Komponente | Rolle | Quelle |
|---|---|---|
| `nginx` | Reverse Proxy, JSON-Access-Logs | [nginx/nginx.conf](./nginx/nginx.conf) |
| `web` | Express-API, Postgres-Client | [web/server.js](./web/server.js), [web/db.js](./web/db.js) |
| `postgres` | Persistenz | offizielles Image `postgres:16-alpine` |
| `app_net` | Custom Bridge-Network, isoliert vom Default | `compose.yaml` |
| `pg_data` | Named Volume für `/var/lib/postgresql/data` | `compose.yaml` |
| Healthchecks | postgres (`pg_isready`), web (`wget /api/health`) | `compose.yaml` |

**Dependency-Kette (Compose):**
```
postgres (HEALTHY) → web (HEALTHY) → nginx (Start)
```

---

## 3. Setup-Anleitung (Reproduktion durch Dritte)

### 3.1 Voraussetzungen
- Docker ≥ 24 (inkl. Compose v2 plugin)
- Git

### 3.2 Schritte

```bash
git clone git@github.com:jonasfrey/GIBB_DEP_modul.git
cd GIBB_DEP_modul/auftrag1_docker

# 1. Env-Datei aus Template
cp .env.example .env
# .env oeffnen und POSTGRES_PASSWORD setzen (Pflicht).

# 2. Stack starten (Build + alle Services)
docker compose up --build

# Alternativ im Hintergrund:
docker compose up --build -d
docker compose logs -f       # JSON-Logs aller Services
```

### 3.3 Zugriff

- App via nginx: <http://localhost:8080>
- Logs: `docker compose logs -f [nginx|web|postgres]`
- DB direkt: `docker compose exec postgres psql -U depmyapp -d depmyapp -c "SELECT * FROM request_log;"`

### 3.4 Reset

| Befehl | Wirkung |
|---|---|
| `docker compose stop` | Container stoppen, Volumes bleiben |
| `docker compose down` | Container entfernen, **Volumes bleiben** |
| `docker compose down -v` | **Volumes + Daten weg** (Full reset) |

### 3.5 Benötigte Secrets

Nur eines, in `.env`:
- `POSTGRES_PASSWORD` (Pflicht). Compose erzwingt das mit `${POSTGRES_PASSWORD:?…}` und scheitert, falls leer.

---

## 4. Code- und Konfigurations-Ausschnitte mit Erklärung

### 4.1 `compose.yaml` — Healthcheck-Kette

```yaml
postgres:
  healthcheck:
    test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER:-depmyapp} -d $${POSTGRES_DB:-depmyapp}"]
    interval: 5s
    retries: 10

web:
  depends_on:
    postgres:
      condition: service_healthy
  healthcheck:
    test: ["CMD", "wget", "-qO-", "http://127.0.0.1:3000/api/health"]
    interval: 10s
    retries: 5

nginx:
  depends_on:
    web:
      condition: service_healthy
```

- **`pg_isready`** ist der offizielle Postgres-Healthcheck — prüft, ob die DB Verbindungen akzeptiert (nicht nur, ob der Prozess läuft).
- **`service_healthy`** statt `service_started`: web startet erst, wenn Postgres **bereit** ist, nicht nur "process running". Verhindert Connection-Refused-Loops beim ersten Boot.
- **Doppelte Verschachtelung `$${VAR}`** wegen Compose-Variable-Substitution: einmal Compose, einmal Shell-Expansion im CMD-SHELL-Context.

### 4.2 `compose.yaml` — DATABASE_URL aus dot-env

```yaml
web:
  environment:
    DATABASE_URL: postgres://${POSTGRES_USER:-depmyapp}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB:-depmyapp}
```

- Hostname `postgres` ist der Service-Name → DNS in `app_net` löst das auf den richtigen Container.
- Kein Secret im Repo: `${POSTGRES_PASSWORD}` kommt aus `.env`, das per `.gitignore` ausgeschlossen ist.

### 4.3 `nginx.conf` — Strukturierte Access-Logs

```nginx
log_format json_combined escape=json
  '{"ts":"$time_iso8601","level":"info","msg":"http",'
  '"method":"$request_method","path":"$request_uri","status":$status,'
  '"upstream":"$upstream_addr","ip":"$remote_addr"}';
access_log /dev/stdout json_combined;
```

- Anforderung "strukturierte Logs mit Zeitstempel + Level + Aussage" auf nginx-Seite erfüllt.
- `/dev/stdout` statt File: Compose sammelt das automatisch via `docker compose logs`.

### 4.4 `web/db.js` — Idempotente Schema-Init

```js
await pool.query(`
  CREATE TABLE IF NOT EXISTS request_log (
    id SERIAL PRIMARY KEY,
    ts TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip TEXT, path TEXT
  )
`);
```

- Beim Boot ausgeführt, idempotent — keine separate Migrations-Pipeline nötig für ein einziges Tabellenmodell.
- Web-Container kann beliebig oft restartet werden, Schema bleibt stabil.

### 4.5 `web/Dockerfile` — Multi-Stage + Non-Root + Healthcheck

```dockerfile
FROM node:24-alpine AS build
RUN npm ci --omit=dev
FROM node:24-alpine AS runtime
RUN addgroup -S app && adduser -S app -G app
USER app
HEALTHCHECK --interval=30s CMD wget -qO- http://127.0.0.1:${PORT:-3000}/api/health || exit 1
```

- Build- und Runtime-Stage getrennt → schlankeres Final-Image (kein npm im Runtime).
- Non-Root-User → erfüllt Security-Standard.
- Container-Healthcheck zusätzlich zum Compose-Healthcheck (Defense in Depth).

---

## 5. Begründung der wichtigsten Entscheidungen

| Entscheidung | Begründung |
|---|---|
| **3 Services nginx/web/postgres** statt z. B. web/redis/postgres | Reverse-Proxy-Pattern ist produktionsnäher, jeder Service hat klare Rolle, keine "Cache-um-des-Caches-willen". |
| **`condition: service_healthy`** statt `service_started` | Eliminiert Race-Conditions beim ersten Boot. Lehrbuchpattern. |
| **2 Healthchecks** (DB + web) statt nur einem | Spec verlangt einen, zwei kosten kaum Aufwand und decken die volle Dependency-Kette ab. |
| **Nginx als 3. Service** statt direktes Port-Mapping auf web | Zeigt explizit das Reverse-Proxy-Konzept (mit Custom Access-Logs als Bonus). |
| **`postgres:16-alpine`** statt full-fat | Kleineres Image, gleiche Funktionalität. Keine Locale-Probleme zu erwarten. |
| **Named Volume `pg_data`** statt Bind-Mount | Portabel zwischen Hosts, kein Permission-Problem zwischen Linux/Mac. |
| **`.env`-Variable mit `:?error`** | Force-Failure früh, falls Passwort fehlt — besser als ein leeres Postgres-Passwort. |
| **Strukturiertes JSON-Logging** auf nginx **und** web | Erlaubt späteren Anschluss an Loki/Datadog ohne Code-Änderung; einheitliches Format über Stack hinweg. |
| **`restart: unless-stopped`** statt `always` | Respektiert manuelles `docker compose stop`; bei Reboot kommt der Stack trotzdem zurück. |

---

## 6. Reflexion — Learnings & was anders gelöst würde

**Was gut funktioniert hat**
- **Healthcheck-Kette** macht das System selbsthelend: Postgres-Restart → web wartet bis healthy → bedient wieder Requests, ohne manuelles Eingreifen.
- **JSON-Logs** sind in `docker compose logs` sofort lesbar und maschinell parsebar.
- **`.env`-Pattern mit `:?`** sorgt für laute Fehlermeldungen statt stiller Boots in inkonsistenten Zuständen.
- **Multi-Stage-Dockerfile** aus C2/C3 wiederverwendet → keine doppelte Pflege.

**Was rückblickend anders wäre**
1. **Schema-Migrationen** statt `CREATE TABLE IF NOT EXISTS`: bei einer 2. Tabelle wird das Pattern dünn. `node-pg-migrate` wäre der nächste Schritt.
2. **Connection-Pool-Limits explizit setzen**: `pg.Pool` hat Defaults, die in produktionsnaher Last unangenehm werden. `max: 5` o. ä.
3. **TLS auf nginx terminieren**: aktuell HTTP-only auf `:8080`. Mit Self-Signed-Cert oder mkcert wäre Local-HTTPS möglich.
4. **Read-only Root-Filesystem** für web/nginx. Würde die Angriffsfläche weiter reduzieren — Out-of-Scope für C1, aber ein guter Production-Schritt.
5. **`docker compose watch`** für Live-Reload während Entwicklung wäre ein nettes DX-Upgrade.
6. **Adminer als 4. Service** für DB-Inspektion im Browser — bewusst weggelassen, weil C1 nur 3 verlangt und der zusätzliche Service nicht "echt benötigt" wäre.

**KI-Tools (Pflichtdeklaration)**
- Compose-Skelett, nginx-Konfig und diese Doku wurden mit Claude (Anthropic) als Pair-Programming-Assistent erstellt. Jeder Block wurde manuell gelesen, lokal verifiziert (`npm test` 9/9 grün, Compose-Stack startet bis healthy) und gegen die offizielle Compose-/nginx-Dokumentation geprüft.
