# C3 — Cloud-Plattform Deployment auf Render · Dokumentation

**Modul:** HFI_DEP — Deployment (GIBB) · **Autor:** Jonas Frey · **Stand:** 2026-05-09
**Repo:** https://github.com/jonasfrey/GIBB_DEP_modul · **Live:** _(URL nach Deployment einsetzen)_

---

## 1. Was wurde umgesetzt — und warum so?

Die Express-App aus C2 wurde auf [Render](https://render.com) öffentlich deployed, mit **Managed Postgres** als persistenter Datenspeicher. Statt UI-Klick-für-Klick ist die gesamte Infrastruktur als **Blueprint** (`render.yaml`) im Repo versioniert: ein einziger Klick im Render-Dashboard erzeugt Web Service + Datenbank reproduzierbar aus dem Repo.

**Warum Render?**
- **Echtes Free Tier ohne Kreditkarte** — anders als Fly.io (CC-Pflicht zur Verifikation) und Railway (5 $-Credit, dann paid).
- **Blueprint-Spec** macht das Deployment Infrastructure-as-Code — erfüllt die C3-Anforderung "reproduzierbar durch Dritte" sauberer als Plattform-CLIs.
- **Auto-Deploy bei Git-Push** out of the box, inklusive automatischem HTTPS und Health-Check-basierten Zero-Downtime-Wechseln.
- **Managed Postgres** auf gleicher Plattform → `DATABASE_URL` wird über `fromDatabase` automatisch injiziert; keine manuellen Secrets im Repo oder Dashboard.

**Was wurde gegenüber C2 geändert?**
1. **Persistenz auf Postgres umgestellt** (`db.js`, neue Endpoints `GET/POST /api/visits`, neue Tabelle `request_log`).
2. **Strukturierte JSON-Logs** auf `stdout` (`logger.js`) — Render fasst die zur Suche/Filterung im Log-Stream zusammen.
3. **In-Memory-Fallback**: ohne `DATABASE_URL` läuft die App weiter (für `npm test` und Local Dev).
4. **`render.yaml`** als deklarative Service- + DB-Definition.
5. **Health-Check-Pfad** in `render.yaml` definiert → Render rollt nicht aus, wenn `/api/health` nicht 200 liefert.

---

## 2. Architektur

```
                          ┌─────────────────────────────────────────────────┐
   git push origin main ─▶│  GitHub                                          │
                          │   └─ Webhook                                     │
                          └────────────────────────┬─────────────────────────┘
                                                   │
                                                   ▼
                          ┌─────────────────────────────────────────────────┐
                          │  Render (region: frankfurt)                      │
                          │  ┌──────────────────────┐    ┌────────────────┐ │
                          │  │  Web Service          │    │  Postgres       │ │
                          │  │  dep-myapp-c3         │◀──▶│  dep-myapp-db   │ │
                          │  │  - Docker (multi-st.) │ TLS│  - free plan    │ │
                          │  │  - Node 24 / Express  │    │  - DB depmyapp  │ │
                          │  │  - port: $PORT (auto) │    │  - request_log  │ │
                          │  │  - HTTPS + Health-CH. │    └────────────────┘ │
                          │  └──────────┬───────────┘                        │
                          └─────────────┼─────────────────────────────────────┘
                                        │
                                        ▼
                            https://dep-myapp-c3.onrender.com
```

**Komponenten:**

| Komponente | Rolle |
|---|---|
| GitHub | Source of Truth, Webhook nach Render |
| Render Blueprint | deklarative Service-/DB-Definition aus `render.yaml` |
| Render Web Service | Docker-Build, HTTP-Termination, HTTPS, Health-Checks |
| Render Postgres | Managed DB, TLS-Verbindung, `request_log`-Tabelle |
| `db.js` | Pool, Schema-Init (`CREATE TABLE IF NOT EXISTS`), CRUD |
| `logger.js` | JSON-Log nach `stdout` → Render Log-Stream |

**Datenfluss eines Deployments:**

```
git push  →  GitHub Webhook  →  Render Worker
                                  ├── Build (Docker, Layer-Cache)
                                  ├── Health-Check (/api/health)
                                  └── Cut-over (alte Instanz drainen)
```

---

## 3. Setup-Anleitung (Reproduktion durch Dritte)

### 3.1 Voraussetzungen
- GitHub-Account mit Zugriff auf `jonasfrey/GIBB_DEP_modul` (Fork erstellen, falls extern).
- Render-Account ([render.com](https://render.com), Free-Tier, GitHub-Login empfohlen).

### 3.2 Erstdeployment via Blueprint

```
1. Render-Dashboard → "New +" → "Blueprint"
2. Repo auswählen (im Fork: dort Render-App authorisieren)
3. Render erkennt auftrag3_cloud_render/render.yaml automatisch
4. "Apply" → erzeugt:
     - Web Service "dep-myapp-c3" (Docker, free, Frankfurt)
     - Database  "dep-myapp-db" (Postgres, free, Frankfurt)
5. Erste Build-Phase ~3 Min., dann läuft /api/health gegen 200
6. URL kopieren (Form: https://dep-myapp-c3-<hash>.onrender.com)
```

### 3.3 Folge-Deployments

```bash
git commit -am "feat: …"
git push origin main
# Render baut automatisch neu, swaps zero-downtime sobald /api/health passt.
```

### 3.4 Benötigte Secrets

**Keine.** `DATABASE_URL` wird durch `fromDatabase` automatisch injiziert (siehe §4.1). Falls extern noch ein API-Key wäre, ginge er per Dashboard → Service → Environment.

### 3.5 Lokale Reproduktion

```bash
cd auftrag3_cloud_render
cp .env.example .env
npm ci && npm test            # 9/9 grün, läuft mit In-Memory-Fallback
docker build -t dep-myapp-c3 . && docker run --rm -p 3000:3000 dep-myapp-c3
```

---

## 4. Code- und Konfigurations-Ausschnitte mit Erklärung

### 4.1 `render.yaml` — Blueprint

```yaml
services:
  - type: web
    name: dep-myapp-c3
    runtime: docker
    rootDir: auftrag3_cloud_render
    plan: free
    region: frankfurt
    autoDeploy: true
    healthCheckPath: /api/health
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase: { name: dep-myapp-db, property: connectionString }
databases:
  - name: dep-myapp-db
    plan: free
    region: frankfurt
```

- **`rootDir`** zeigt auf den Subfolder — der Rest des Monorepos wird ignoriert (kein zweiter Render-Account nötig für C2).
- **`fromDatabase`** ersetzt die manuelle Pflege eines `DATABASE_URL`-Secrets — die Connection-String wird von Render direkt referenziert. Kein Wert im Repo, kein Wert im Dashboard.
- **`healthCheckPath`** sorgt dafür, dass Render einen kaputten Build **nicht** als "live" markiert — die alte Instanz läuft weiter, bis `/api/health` 200 antwortet.

### 4.2 `db.js` — bedingter Pool + idempotentes Schema

```js
if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === "disable" ? false : { rejectUnauthorized: false }
  });
}
async function init() {
  if (!pool) { log.warn("DATABASE_URL not set, in-memory fallback"); return; }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS request_log (
      id SERIAL PRIMARY KEY, ts TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip TEXT, path TEXT)`);
}
```

- **Optionaler Pool**: gleiche Codebasis lokal (ohne DB) und produktiv (mit DB). Tests laufen ohne externes Setup.
- **`CREATE TABLE IF NOT EXISTS`** macht Schema-Init idempotent — keine Migrations-Pipeline nötig für ein einziges Deployment-Modell. (In Produktion: dedizierte Migrationen, hier Out-of-Scope.)
- **`rejectUnauthorized: false`**: Render-Postgres terminiert TLS mit eigenem Zertifikat. Für Free-Tier akzeptabel, in echter Produktion strenger lösen.

### 4.3 `logger.js` — JSON-Logs für Render-Log-Stream

```js
process.stdout.write(JSON.stringify({ ts, level, msg, ...extra }) + "\n");
```

- **`stdout` statt File**: 12-Factor-konform, Render leitet Container-`stdout` direkt in den Log-Stream weiter.
- **JSON pro Zeile**: erlaubt strukturierte Suche im Render-UI (z. B. nach `level=error`).

### 4.4 Express-Middleware: Request-Logging

```js
app.use((req, _res, next) => {
  log.info("http", { method: req.method, path: req.path, ip: req.ip });
  next();
});
```

Jeder Request hinterlässt eine strukturierte Log-Zeile — sichtbar in Render → Logs.

### 4.5 Dockerfile — Multi-Stage, Non-Root, Health-Check

```dockerfile
FROM node:24-alpine AS build
RUN npm ci --omit=dev
FROM node:24-alpine AS runtime
RUN addgroup -S app && adduser -S app -G app
USER app
HEALTHCHECK --interval=30s CMD wget -qO- http://127.0.0.1:${PORT:-3000}/api/health || exit 1
```

Identisch zu C2; keine doppelte Pflege nötig.

---

## 5. Begründung der wichtigsten Entscheidungen

| Entscheidung | Begründung |
|---|---|
| **Render** statt Fly.io / Railway / Vercel | Free-Tier ohne CC, Blueprint = IaC, native GitHub-Integration, Postgres im selben Tarif. Vercel scheidet aus, weil "reine Statik ohne Backend" laut Auftrag nicht reicht und Vercel-Functions Postgres-Pools schlecht handhaben. |
| **Managed Postgres** statt Volume | Portabel (auf jeder PaaS reproduzierbar), echtes Stateful-Service-Beispiel. Volumes wären an Fly.io gebunden. |
| **Blueprint (`render.yaml`)** statt UI-Klicks | Erfüllt die Anforderung "reproduzierbar durch Dritte" mit einem `git push`. UI-Klicks sind nicht versionierbar. |
| **Region Frankfurt** | EU-DSGVO-Region, niedrige Latenz aus CH; gleiche Region für Web + DB → kein Cross-Region-Egress. |
| **`fromDatabase` statt manuelles Secret** | Connection-String existiert nur im Plattform-Speicher, nie im Repo, nie im Render-UI-Eingabefeld. |
| **In-Memory-Fallback** | Test-Lauf braucht keine DB → schneller, keine Test-Container, keine Flakes. |
| **Strukturierte JSON-Logs** | Auftragsanforderung "strukturierte Logs"; ermöglicht spätere Anbindung an Loki/Datadog ohne Code-Änderung. |
| **Auto-Deploy on push** | Auftrag verlangt "reproduzierbares Deployment"; Auto-Deploy ist die simpelste Form. Render hält Rollback per UI-Klick bereit. |

---

## 6. Reflexion — Learnings & was anders gelöst würde

**Was gut funktioniert hat**
- **Blueprint-Spec** ist ein Treffer: ein Commit, ein Klick, fertig — und das ganze Setup ist im Repo nachlesbar.
- **`fromDatabase`** spart eine ganze Klasse von Secret-Management-Fehlern (kein Copy-Paste in UI-Felder).
- **In-Memory-Fallback** hält die Tests schnell und macht lokales Debugging trivial.
- **JSON-Logs** funktionieren in Render-UI sofort durchsuchbar.

**Was rückblickend anders wäre**
1. **Schema-Migrations** statt `CREATE TABLE IF NOT EXISTS`. Bei einer zweiten Tabelle wird das Pattern dünn — `node-pg-migrate` oder `drizzle-kit` hätten ich initial integriert.
2. **Connection-Pooling-Limits** explizit setzen (`max: 5` etc.). Render-Free-Postgres hat einen niedrigen Connection-Limit; ohne explizites Pool-Sizing fängt man unter Last `too many connections` ein.
3. **CI in C2 hätte das Render-Image triggern können** (`render-deploy-action`), statt Render auf den GitHub-Webhook horchen zu lassen. So würde ein CI-Fail das Deployment automatisch verhindern, statt erst Render's Health-Check.
4. **SSL strikt prüfen**: aktuell `rejectUnauthorized: false`. Mit eingebundenem Render-CA-Cert wäre Validierung möglich.
5. **Custom Domain + Render-Cron** für regelmässigen Postgres-Backup-Dump nach R2/S3 — wäre der nächste Schritt Richtung Produktion.

**KI-Tools (Pflichtdeklaration)**
- Pipeline-Skelett, `db.js`-Struktur, JSON-Logger und diese Doku entstanden mit Claude (Anthropic) als Pair-Programming-Assistent. Jeder Block wurde manuell gelesen, lokal getestet (`npm ci && npm run lint && npm test` → 9/9 grün, plus Docker-Build) und auf Korrektheit gegen die offizielle Render-Doku (https://render.com/docs/blueprint-spec) geprüft.
