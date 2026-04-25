# Aufträge – Tag 1

## Vorbemerkungen

Diese Aufträge wurden am 25.04 im Präsenzunterricht bearbeitet. Sie sind nicht benotet, bilden aber das Fundament für sämtliche nachfolgenden Arbeiten im Modul Deployment. App, Dockerfile und Repository begleiten das gesamte Semester.

KI-Tools (Claude) wurden eingesetzt; jede Zeile in Dockerfile, Code und Konfiguration ist verstanden und erklärbar.

---

## Auftrag 1.1: Code-Review der Starter-App

Repository: <https://github.com/ndum/dep-starter-app>
Lokal getestet via `docker run -p 3000:3000 ghcr.io/ndum/dep-starter-app:latest`.

### Teil A: Sicherheitsanalyse

| #  | Problem                                                                 | Risiko                                                                                                              | Behebung                                                                                            | 12-Factor |
|----|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------|
| 1  | **Hardcodierte DB-Credentials** in `server.js:9` (`postgres://admin:supersecret123@…`) | Bei Push in ein öffentliches Repo werden Produktions-Zugangsdaten weltweit lesbar; Git-History bewahrt sie für immer auf, selbst nach späterem Entfernen. | URL aus `process.env.DATABASE_URL` lesen, `.env` in `.gitignore`, Secrets via Vault / GitHub Secrets / Azure Key Vault verteilen. | **III – Config** |
| 2  | **DB-URL inkl. Passwort wird beim Start auf stdout geloggt** (`server.js:101`) | Logs landen in zentralen Log-Aggregatoren (ELK, CloudWatch, Loki); jeder mit Log-Lesezugriff sieht das Klartext-Passwort. | Niemals Secrets loggen. Höchstens den Host loggen, niemals Credentials. | **III – Config**, **XI – Logs** |
| 3  | **Port hartcodiert** (`const PORT = 3000`) | Mehrere Instanzen auf dem gleichen Host kollidieren; keine Anpassung an PaaS-Umgebungen (Heroku/Cloud Run setzen `PORT` dynamisch). | `const PORT = parseInt(process.env.PORT, 10) \|\| 3000;` | **III – Config** |
| 4  | **`environment: "production"` hardcoded** (`server.js:38`) | Status-Endpoint lügt über die tatsächliche Umgebung; Debugging in DEV/STG wird erschwert, Monitoring-Alerts werden falsch klassifiziert. | Wert aus `process.env.NODE_ENV` ableiten. | **III – Config**, **X – Dev/Prod Parity** |
| 5  | **Container läuft als root** (Dockerfile setzt keinen `USER`) | Bei einer RCE in der App hat der Angreifer root-Rechte im Container; bei Container-Escape direkt root auf dem Host. | Im Dockerfile `RUN addgroup -S app && adduser -S app -G app` und `USER app` setzen. | (security baseline) |
| 6  | **`/api/log` schreibt in den Container-FS und liest IPs unbeschränkt zurück** | Beliebiger Anfrager kann das Log unbegrenzt anwachsen lassen → Disk-Fill-DoS. Beim Container-Restart sind die Daten zudem weg → fälschliche Annahme von Persistenz. | Nur auf stdout loggen, oder via Volume in externen Storage; Schreibrate begrenzen, Retention konfigurieren. | **VI – Processes**, **XI – Logs** |
| 7  | **Kein `.dockerignore`** | `.git`, eventuelle lokale `.env`-Dateien und `node_modules` landen im Image und werden veröffentlicht. | `.dockerignore` mit `.git`, `.env`, `node_modules`, `*.log` etc. anlegen. | (security baseline) |

### Teil B: Dockerfile-Review

Bestehendes Dockerfile:

```dockerfile
FROM node:24
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

Mindestens 5 Verbesserungen:

| # | Problem | Auswirkung | Verbesserung |
|---|---------|-----------|--------------|
| 1 | `node:24` (Debian-basiert, ~1.1 GB) | **Image-Grösse** explodiert; mehr Angriffsfläche | `node:24-alpine` (~150 MB) oder `node:24-slim` |
| 2 | `COPY . .` vor dem Install | **Build-Zeit**: jede Code-Änderung invalidiert den Dependency-Layer; `npm install` läuft jedes Mal | Erst `package*.json` kopieren, dann `npm ci`, danach Rest |
| 3 | `npm install` | **Reproduzierbarkeit**: kann Versionen aktualisieren, ignoriert Lockfile teilweise | `npm ci --omit=dev` (strikt, nutzt `package-lock.json`, schneller) |
| 4 | Keine User-Trennung → läuft als root | **Sicherheit**: Container-Breakouts haben root-Rechte | Eigenen User anlegen und `USER app` setzen |
| 5 | Kein Multi-Stage-Build | **Image-Grösse**: Build-Tools, Dev-Dependencies, Cache landen im finalen Image | Build-Stage für `npm ci`, Runtime-Stage kopiert nur `node_modules` + Source |
| 6 | Kein `.dockerignore` referenziert | **Image-Grösse / Sicherheit**: lokale `node_modules`, `.env`, `.git` werden mitkopiert | `.dockerignore` anlegen (siehe Auftrag 1.2) |
| 7 | Keine `HEALTHCHECK`-Direktive | **Reproduzierbarkeit / Betrieb**: Orchestrator weiss nicht, ob Container wirklich gesund ist | `HEALTHCHECK` auf `/api/health` |
| 8 | `CMD ["npm", "start"]` statt `CMD ["node", "server.js"]` | **Sicherheit / Betrieb**: `npm` fängt Signale (SIGTERM) ab → graceful Shutdown bricht; PID 1 ist `npm`, nicht der Node-Prozess | Direkt `node server.js` aufrufen |

Verbessertes Dockerfile (auch in [app/Dockerfile](app/Dockerfile)):

```dockerfile
# --- Build-Stage ---
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# --- Runtime-Stage ---
FROM node:24-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

RUN addgroup -S app && adduser -S app -G app
COPY --from=build /app/node_modules ./node_modules
COPY --chown=app:app server.js package.json ./
COPY --chown=app:app public ./public

USER app
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:${PORT:-3000}/api/health || exit 1

CMD ["node", "server.js"]
```

### Teil C: 12-Factor-Analyse

| Faktor | Aktueller Zustand in der Starter-App | Notwendige Änderung |
|---|---|---|
| **I — Codebase** | Eine Codebase im Git-Repo, ein Dockerfile. Grundsätzlich erfüllt. | Nichts grundlegend; sicherstellen, dass dieselbe Image-Version in allen Umgebungen läuft. |
| **III — Config** | Alles hartcodiert: `PORT`, `DB_URL`, `environment`. Secrets im Source. | Sämtliche Werte über `process.env` lesen; `.env.example` ins Repo, echte Secrets in Vault/GitHub-Secrets. |
| **V — Build, Release, Run** | Dockerfile macht `COPY . .` + `npm install` in einem Schritt; keine Versionspinnung des Base-Image, kein Lockfile-Use. | Multi-Stage-Build, `npm ci` mit Lockfile, deterministische Tags (`v1.0.0`, Git-SHA) statt `latest`; Release = Image + Config (Env-Vars), Run = Container starten. |
| **VI — Processes** | `/api/log` schreibt in den Container-FS → impliziter State im Prozess. | Stateless betreiben: Logs an stdout, persistente Daten in externe Stores (Volume → DB / S3). |
| **X — Dev/Prod Parity** | `environment: "production"` ist immer „production“, egal wo es läuft → DEV ≠ PROD-Wahrnehmung. Fehlende Env-Konfig zwingt zu Code-Änderungen pro Umgebung. | Gleiches Image überall, Unterschiede nur über Env-Vars (`NODE_ENV`, `DATABASE_URL`). |
| **XI — Logs** | App nutzt `console.log` an stdout (gut), schreibt aber auch in eine Datei (`requests.log`) – unsauber. | Ausschliesslich strukturierte Logs nach stdout; Aggregation übernimmt die Plattform (Docker, Loki, ELK …). |

---

## Auftrag 1.2: Eigene App bauen und containerisieren

Eigene App liegt im Ordner [`app/`](app/).
Technologie: **Node.js 24 / Express 5**.

### Pflicht-Endpoints

| Endpoint | Methode | Rückgabe |
|----------|---------|----------|
| `/api/health` | GET | `{ "status": "healthy" }` |
| `/api/info`   | GET | Name (Jonas Frey), Klasse (HFI_DEP), Hobby (3D-Druck) |
| `/api/status` | GET | Hostname, Version, Timestamp, App-Name |

### Eigene Endpoints

| Endpoint | Parameter | Beschreibung |
|----------|-----------|--------------|
| `/api/echo/:message` | Path | Echo + Länge + reversed |
| `/api/prime?n=<int>` | Query | Primzahl-Check (0 ≤ n ≤ 1 000 000) |
| `/api/log` | – | Schreibt Timestamp in Volume und gibt Historie zurück |

Frontend: [`app/public/index.html`](app/public/index.html) – ruft `/api/status`, `/api/info`, `/api/prime`, `/api/echo` auf und zeigt sie an.

### Konfiguration

Alle relevanten Werte über Env-Vars: `PORT` (3000), `APP_NAME` (`dep-myapp`), `APP_VERSION` (`1.0.0`), `DATA_DIR` (`./data`).
Keine Secrets im Code. [`app/.env.example`](app/.env.example) im Repo, [`app/.gitignore`](app/.gitignore) enthält `.env`.

### Docker

Siehe verbessertes Dockerfile in Teil B oben bzw. [`app/Dockerfile`](app/Dockerfile):

- Base: `node:24-alpine` (Multi-Stage, finales Image ohne Build-Tools)
- Layer Caching: `package*.json` separat, `npm ci --omit=dev` vor dem Code-Copy
- `.dockerignore` ([`app/.dockerignore`](app/.dockerignore)) schliesst `node_modules`, `.env`, `.git`, `data` aus
- `EXPOSE 3000`, `CMD ["node", "server.js"]`, `USER app`, `HEALTHCHECK`

### Nachweis

```bash
# 1) Lokal
cd app && npm install && npm start
curl http://localhost:3000/api/status
# → {"hostname":"<dein-host>","version":"1.0.0",...}

# 2) Im Container (anderer Hostname!)
docker build -t dep-myapp app
docker run -d --name myapp -p 3000:3000 dep-myapp
curl http://localhost:3000/api/status
# → {"hostname":"a1b2c3d4e5f6", ...}

# 3) Anderer Port via Env-Var
docker run -d --name myapp2 -p 8080:8080 -e PORT=8080 dep-myapp
curl http://localhost:8080/api/status
```

Smoke-Test lokal bereits durchgeführt – alle Endpoints liefern erwartete JSON-Responses.

**Link zum Repo:** _<noch zu pushen – `git remote add origin …` + `git push`>_

---

## Auftrag 1.3: Container im Betrieb

### Szenario A: Der unsichtbare Service

**Beobachtung:**
`docker run --rm alpine wget -qO- http://app1:3000/api/health`
→ `wget: bad address 'app1'` (Name kann nicht aufgelöst werden).

**Diagnose:**
Beide Container hängen am Default-Bridge-Netzwerk (`bridge`). Auf diesem Netzwerk gibt es **keine automatische DNS-Auflösung** zwischen Containern – der Name `app1` wird nicht in eine IP übersetzt. Kommunikation wäre nur über die rohe IP des Containers möglich (`docker inspect app1` → IP nehmen).

**Lösung:** Eigenes User-Defined Bridge-Netzwerk anlegen, beide Container daran hängen:

```bash
docker network create demo
docker run -d --name app1 --network demo dep-myapp
docker run --rm --network demo alpine wget -qO- http://app1:3000/api/health
# → {"status":"healthy"}
```

**Erklärung:**
Auf einem User-Defined-Netzwerk läuft ein interner DNS-Server (eingebaut in die Docker-Engine), der Container-Namen zu IPs auflöst. Zusätzlich ist der Traffic zwischen Containern auf demselben User-Defined-Netz isoliert vom Default-Bridge.

```
   ┌─────────────── Docker-Host ────────────────┐
   │                                            │
   │   network "demo" (user-defined bridge)     │
   │   ┌────────────┐        ┌────────────┐     │
   │   │  app1      │◄──DNS──┤ alpine     │     │
   │   │ 172.20.0.2 │        │ 172.20.0.3 │     │
   │   └────────────┘        └────────────┘     │
   │                                            │
   └────────────────────────────────────────────┘
```

### Szenario B: Die verschwindenden Daten

`/api/log`-Endpoint ist in [`app/server.js`](app/server.js) implementiert (schreibt in `DATA_DIR/requests.log`).

**Verhalten ohne Volume:** Nach `docker rm -f logapp` + Neustart sind alle Einträge weg. Grund: das Schreib-Layer eines Containers (UnionFS) wird beim Löschen verworfen.

**Lösung – mit Volume:**

```bash
docker volume create logdata
docker run -d --name logapp -p 3000:3000 -e DATA_DIR=/data -v logdata:/data dep-myapp

curl http://localhost:3000/api/log
curl http://localhost:3000/api/log
docker rm -f logapp
docker run -d --name logapp -p 3000:3000 -e DATA_DIR=/data -v logdata:/data dep-myapp
curl http://localhost:3000/api/log
# → Einträge aus erster Session sind weiterhin da
```

**Reflexionsfrage:**
Daten im Container-Filesystem zu speichern verletzt **12-Factor VI – Processes**: der Prozess soll zustandslos sein, sonst kann er nicht beliebig ersetzt, skaliert oder neu gestartet werden. Konkret schiefgehen kann es bei jedem Restart (Crash, Deploy, Auto-Scaler killt Pod), bei Rolling Updates (jede neue Instanz startet leer) und bei horizontaler Skalierung (Instanz A sieht Daten nicht, die Instanz B geschrieben hat).
**Volumes sind trotzdem richtig**, wenn der State *bewusst* zum Container gehört und nicht in einen externen Service ausgelagert werden kann oder soll – z. B. die Daten-Volumes von Datenbank-Containern (Postgres, MySQL), persistenter Cache, oder `/var/lib/<service>` von Stateful-Services. Die App selbst bleibt stateless; das Volume macht den dahinterliegenden *Service* persistent.

### Szenario C: Port-Konfigurationen analysieren

| # | Host-Port | Container-Port (Mapping) | App lauscht auf | Erreichbar? | URL |
|---|-----------|--------------------------|-----------------|-------------|-----|
| 1 | 3000 | 3000 | 3000 (Default) | ✅ Ja | <http://localhost:3000> |
| 2 | 8080 | 3000 | 3000 (Default) | ✅ Ja | <http://localhost:8080> |
| 3 | 3000 | 3000 | **4000** (via `PORT=4000`) | ❌ Nein | – Mapping geht auf Container-Port 3000, dort lauscht aber niemand |
| 4 | 8080 | 8080 | 8080 (via `PORT=8080`) | ✅ Ja | <http://localhost:8080> |

Kernsatz: das `-p` Mapping muss zum tatsächlichen Listen-Port der App im Container passen – `EXPOSE` ist nur Metadaten, kein Mapping.

### Szenario D: Systematisches Debugging

```bash
docker run -d -p 3000:3000 -e PORT=4000 --name broken dep-myapp
```

App auf <http://localhost:3000> nicht erreichbar.

**Schritt-für-Schritt:**

| # | Befehl | Erwartung | Was es zeigt |
|---|--------|-----------|--------------|
| 1 | `docker ps` | Container `broken` läuft, Port-Mapping `0.0.0.0:3000->3000/tcp` | Container ist gestartet, Mapping wie angegeben |
| 2 | `docker logs broken` | Startup-Log: `[dep-myapp] v1.0.0 läuft auf Port 4000` | App hört auf **4000**, nicht auf 3000 |
| 3 | `docker exec broken wget -qO- http://localhost:4000/api/health` | `{"status":"healthy"}` | App funktioniert *im* Container auf Port 4000 |
| 4 | `docker port broken` | `3000/tcp -> 0.0.0.0:3000` | Host-Port 3000 leitet auf Container-Port 3000 → dort lauscht niemand |

**Ursache:** `PORT=4000` ändert den Listen-Port der App, aber das `-p 3000:3000`-Mapping verbindet Host-3000 mit Container-3000. Container-Port 4000 ist nicht gemappt.

**Lösung A – Mapping anpassen:**
```bash
docker rm -f broken
docker run -d -p 3000:4000 -e PORT=4000 --name broken dep-myapp
```
**Lösung B – PORT entfernen oder auf 3000 setzen:**
```bash
docker rm -f broken
docker run -d -p 3000:3000 --name broken dep-myapp        # nutzt Default 3000
# oder explizit
docker run -d -p 3000:3000 -e PORT=3000 --name broken dep-myapp
```

---

## Auftrag 1.4: Architektur-Entscheidungen

### Frage A: Datenbank-Optionen

| Option | Vorteil | Nachteil |
|--------|---------|----------|
| 1 – DB im gleichen Container wie die App | Trivial zu starten, ein einziges `docker run` | Verletzt SRP & 12-Factor VI; bei Restart stirbt die DB mit; nicht skalierbar; Backup/Patching unmöglich ohne App-Downtime |
| 2 – DB in separatem Container | Klare Trennung, lokal & in CI reproduzierbar (Compose), unabhängige Lifecycles | Operativer Aufwand bleibt beim Team: Backups, Updates, Failover, Storage-Tuning, Sicherheits-Hardening |
| 3 – Managed Service (Azure SQL, RDS) | HA, Backups, Patches, Skalierung managed; SLA; geringere Betriebslast | Kosten; Vendor-Lock-in; lokale Entwicklung braucht Stub/Compose-Variante (Dev/Prod-Parity beachten) |

**Empfehlung Produktion:** Option 3 – Managed Service. Begründung: Datenbanken sind Stateful und ein häufiger Single Point of Failure; Backup, Point-in-Time-Recovery, Failover und Security-Patches selbst zu betreiben ist riskant und teuer im Personalaufwand. Lokal/CI: Option 2 (Compose mit gleicher Engine-Version → Dev/Prod Parity).

### Frage B: Skalierung auf 3 Instanzen

**Funktioniert auf Anhieb:**
- Stateless Endpoints (`/api/health`, `/api/info`, `/api/echo`, `/api/prime`, `/api/status`) – jede Instanz beantwortet jede Anfrage gleich.
- Loadbalancer kann Round-Robin verteilen.

**Geht kaputt:**
- **State im Prozess** (Caches, Counter, In-Memory-Sessions) – jede Instanz hat ihren eigenen → User wird auf Instanz B weitergeleitet und ist „ausgeloggt“. Lösung: externer Session-Store (Redis), JWT statt Server-Sessions.
- **Datei-Uploads / `/api/log`** – Datei landet auf dem lokalen FS einer einzigen Instanz; die anderen sehen sie nicht. Lösung: Object Storage (S3/Azure Blob), gemeinsames Volume nur als Notlösung.
- **Ports auf gleichem Host** – drei Container können nicht alle Host-Port 3000 binden; entweder unterschiedliche Host-Ports oder ein vorgeschalteter Reverse-Proxy / Orchestrator (Kubernetes-Service).
- **Cron-/Hintergrund-Jobs** – laufen versehentlich 3× parallel. Lösung: Leader-Election oder dedizierter Worker-Container.

### Frage C: Hardcodierte DB-URL

**Technisches Argument:** Die DB-URL ist ein **Konfigurations-Wert pro Umgebung** (DEV, STG, PROD haben verschiedene Hosts, Credentials, manchmal Engines). Wenn sie im Code steht, ist das Artefakt nicht mehr umgebungsneutral – Build und Release sind nicht mehr trennbar (Verstoss gegen 12-Factor V) und das gleiche Image kann nicht in mehreren Umgebungen laufen.

**Konkretes Schiefgehen-Szenario:** Entwickler testet lokal gegen `localhost:5432`, ändert die URL auf `prod-db.example.com`, committed versehentlich – das `prod`-Image rollt jetzt mit Prod-DB-Credentials in die DEV-Umgebung aus, und im nächsten Deployment-Lauf wird die DEV-DB plötzlich nicht mehr genutzt, oder schlimmer: ein DEV-Test schreibt direkt in die Produktions-DB, weil die URL hartcodiert ist. Zusätzlich landet das Passwort öffentlich im Git-Verlauf und kann nicht gelöscht werden, ohne die History umzuschreiben.

### Frage D: Big Bang vs. Rolling Update

| Kriterium | Big Bang | Rolling Update |
|-----------|----------|----------------|
| Downtime | Ja (alte Version stoppen, neue starten) | Nein (Instanzen werden einzeln getauscht) |
| Risiko | Hoch – Bug trifft alle User gleichzeitig | Mittel – Bug trifft nur den anteiligen Traffic der ersten Pods, frühzeitig erkennbar |
| Rollback | Langsam, manuell (Image zurückwechseln, neu starten) | Schnell, automatisiert (Orchestrator deployt vorherige Revision Pod-weise) |
| Komplexität | Niedrig (klassisch `docker-compose down && up`) | Mittel (Orchestrator wie Kubernetes, Health-Checks, Readiness-Probes nötig) |

**Wann was:**
- **Big Bang:** Interne Tools, Dev-Umgebungen, kleine Systeme ohne Verfügbarkeitsanspruch, Migrationen mit zwingenden Schema-Änderungen, die alle Instanzen gleichzeitig brauchen.
- **Rolling Update:** Web-/API-Apps mit Verfügbarkeits-Anspruch, Stateless Services, alles in Kubernetes – Standardstrategie, sobald mehr als ein Replica läuft.

---

## Auftrag 1.5: Dokumentation und Reflexion

### Teil A: README

README liegt in [`app/README.md`](app/README.md) und enthält Projektname, Voraussetzungen, lokale Installation, Docker-Befehle, Endpoint-Tabelle und Env-Var-Tabelle.

### Teil B: Repository aufgeräumt

- [x] [`app/.gitignore`](app/.gitignore) – schliesst `node_modules`, `.env`, `data/`, `*.log` aus
- [x] [`app/.env.example`](app/.env.example) – Platzhalter für `PORT`, `APP_NAME`, `APP_VERSION`, `DATA_DIR`
- [x] Keine Secrets im Code oder in der Git-History (App enthält nichts Sensibles, alle Werte über Env-Vars)
- [x] [`app/.dockerignore`](app/.dockerignore) – schliesst `.git`, `.env`, `node_modules`, `data`, `*.md` aus
- [x] [`app/README.md`](app/README.md) – aktuell, mit allen Pflicht-Abschnitten

### Teil C: Reflexionsfragen

**Frage A – Hostname in drei Situationen:**
Lokal liefert `/api/status` den Hostname meines Laptops (`legion5pro-Legion-5-Pro-16ARH7H`). In einem Container ist es eine 12-stellige Hex-ID (z. B. `a1b2c3d4e5f6`), die der Container-ID entspricht – Docker setzt sie als Hostname, sofern nichts anderes via `--hostname` definiert wird. In zwei Containern bekommt jeder seine eigene ID. Das zeigt: Container haben einen **eigenen Network-Namespace** (UTS-Namespace inkl. Hostname), sind also nach aussen vom Host getrennt; gleichzeitig sind sie austauschbar – ohne explizite Konfiguration trägt jede Instanz einen Wegwerf-Namen, was perfekt zum „Cattle, not Pets“-Prinzip passt.

**Frage B – Disposability als Vorteil:**
Wegwerfbare Container ermöglichen schnelle Restarts, automatische Recovery (Orchestrator startet abgestürzte Pods neu) und Rolling Updates ohne Downtime. Konkret: in einem Vorfall, bei dem ein Speicherleck nach 6 Stunden zu OOM führt, ist „auto-restart alle 4 h“ eine triviale, sichere Mitigation, weil der State extern liegt. Auch beim Skalieren werden in Sekunden weitere Replicas hochgezogen oder im Quiet-Window wieder abgebaut – kein Mensch muss eingreifen. Disposability ist die Voraussetzung für resiliente, automatisierbare Systeme.

**Frage C – Vergleich Starter-App ↔ eigene App (3 Faktoren):**

| Faktor | Starter-App | Eigene App |
|--------|-------------|------------|
| **III – Config** | DB-URL, Port, Environment hartcodiert; Secrets im Code | Alle Werte (`PORT`, `APP_NAME`, `APP_VERSION`, `DATA_DIR`) aus `process.env`; `.env.example` im Repo, `.env` ignoriert |
| **V – Build/Release/Run** | Single-Stage `node:24` + `npm install` + `COPY . .` | Multi-Stage Alpine, `npm ci --omit=dev`, `package.json` separat kopiert, deterministisch reproduzierbar |
| **VI – Processes** | `/api/log` schreibt in Container-FS, impliziter State | `/api/log` schreibt in `DATA_DIR`, das per Volume gemountet wird – Prozess bleibt zustandslos, Persistenz im Volume |

Gleich geblieben (beide): Pflicht-Endpoints, Frontend, Express, stdout-Logs.

**Frage D – Was war heute am schwierigsten / am lehrreichsten?**
Am ehesten der Aha-Moment bei Szenario C: dass `EXPOSE` nichts mappt, nur dokumentiert. Dass die Verbindung App-Port → Container-Port → Host-Port drei voneinander unabhängige Schichten sind, wird beim eigenen Debugging viel klarer als beim Lesen eines Lehrbuchs. Am lehrreichsten: das Multi-Stage-Dockerfile selbst zu schreiben und zu sehen, wie viel kleiner das Image wird, wenn Build-Tools nur in Stage 1 leben.

**Frage E – Was nehme ich mit für Tag 2?**
Für Tag 2 ist die Basis gelegt: containerisierte Stateless-App, klare Konfig-Trennung, sauberes Repo. Erwartung: mehr Compose-/Multi-Container-Setups, evtl. erste CI/CD-Pipeline. Wichtigste persönliche Regel ab jetzt: keine Konstante im Code, die in einer anderen Umgebung anders aussehen müsste – sofort als Env-Var rausziehen.
