# C2 — CI/CD mit GitHub Actions · Dokumentation

**Modul:** HFI_DEP — Deployment (GIBB) · **Autor:** Jonas Frey · **Stand:** 2026-05-02
**Repo:** https://github.com/jonasfrey/GIBB_DEP_modul · **Image:** `ghcr.io/jonasfrey/dep-myapp`

---

## 1. Was wurde umgesetzt — und warum so?

Aufgesetzt wurde eine GitHub-Actions-Pipeline für die Express-App aus C1.
Sie besteht aus drei Stages, die strikt sequentiell laufen:

1. **`test`** — `npm ci` → `npm run lint` → `npm test` (8 HTTP-Integrationstests gegen den realen Express-Server, gestartet auf zufälligem Port)
2. **`build`** — Docker-Image wird gebaut, lokal geladen und mit einem **Smoke-Test** gegen `/api/health` verifiziert
3. **`push`** — nur bei Push auf `main`: Login an GHCR, Build + Push mit drei Tags (`latest`, `sha-<commit>`, `<branch>`)

**Warum diese Lösung?**
- **GHCR statt Docker Hub**, weil das automatische `GITHUB_TOKEN` der Action bereits `packages: write` kann — keine zusätzlichen Secrets, keine Rate-Limits.
- **`node:test` statt Jest**, weil es seit Node 20 mitgeliefert wird → keine Test-Dependency, kleinerer `node_modules`-Tree, schnellerer Cold-Build.
- **Smoke-Test im `build`-Job**, weil `node:test` zwar die App-Logik prüft, aber nicht garantiert, dass das gebaute Image überhaupt startet (z. B. bei kaputtem `Dockerfile` `CMD` oder fehlendem File).
- **Trennung `build` ↔ `push`**, damit PRs auch das Image bauen (Smoke-Test als zusätzliche Sicherung), aber **nicht** ungeprüft pushen können.

---

## 2. Architektur

```
                        ┌────────────────────────────────────┐
   git push main ──────▶│ GitHub                              │
   git pr ──────────────▶│  └─ Actions Runner (ubuntu-latest)│
                        │                                    │
                        │   ┌───────┐  needs  ┌───────┐  needs  ┌───────┐
                        │   │ test  │────────▶│ build │────────▶│ push  │
                        │   └───────┘         └───────┘         └───┬───┘
                        │                                          │
                        └──────────────────────────────────────────┼──┘
                                                                   │ docker push
                                                                   ▼
                                                       ┌─────────────────────┐
                                                       │ ghcr.io             │
                                                       │  jonasfrey/dep-myapp│
                                                       │  :latest            │
                                                       │  :sha-<commit-sha>  │
                                                       │  :main              │
                                                       └─────────────────────┘
                                                                   │ docker pull
                                                                   ▼
                                                          beliebiger Host
                                                          (lokal / Cloud)
```

**Komponenten:**

| Komponente               | Rolle                                                              |
|--------------------------|--------------------------------------------------------------------|
| GitHub Repository        | Source of Truth, triggert Workflows                                |
| GitHub Actions Runner    | Frische Ubuntu-VM pro Job (`ubuntu-latest`), parallelisierbar      |
| `actions/setup-node@v4`  | Node 20 + Cache von `node_modules` über `package-lock.json`-Hash   |
| `docker/buildx`          | Builder mit Layer-Caching via GitHub-Actions-Cache (`type=gha`)    |
| `docker/metadata-action` | Berechnet Tags & OCI-Labels (Source-URL, Revision, Created-Date)   |
| GHCR                     | Container Registry, Auth über `GITHUB_TOKEN`                       |

**Datei-Layout:**
```
GIBB_DEP_modul/
├── .github/workflows/ci.yml        ← Pipeline-Definition (Repo-Root!)
└── auftrag2_cicd_github_actions/
    ├── server.js   package.json   Dockerfile   .dockerignore
    ├── public/     test/server.test.js
    ├── README.md   DOCUMENTATION.md
```

---

## 3. Setup-Anleitung (Reproduktion durch Dritte)

```bash
# 1. Repo klonen
git clone git@github.com:jonasfrey/GIBB_DEP_modul.git
cd GIBB_DEP_modul/auftrag2_cicd_github_actions

# 2. Lokal testen (Node 20+)
cp .env.example .env
npm ci
npm run lint && npm test
npm start            # http://localhost:3000

# 3. Lokal als Container starten
docker build -t dep-myapp .
docker run --rm -p 3000:3000 dep-myapp

# 4. Pipeline triggern: einen Push auf main absetzen
git commit --allow-empty -m "trigger ci"
git push origin main
# → https://github.com/jonasfrey/GIBB_DEP_modul/actions

# 5. Image aus GHCR laden (nach erfolgreichem Run)
docker pull ghcr.io/jonasfrey/dep-myapp:latest
```

Pre-Requisites in einem **Fork** für Dritte:
1. Im Fork unter *Settings → Actions → General → Workflow permissions* die Option
   *Read and write permissions* aktivieren (sonst darf der Workflow nicht in GHCR pushen).
2. Falls das resultierende Package privat ist, im *Packages*-Tab manuell auf *public* schalten,
   damit `docker pull` ohne Login funktioniert.

---

## 4. Code- und Konfigurations-Ausschnitte mit Erklärung

### 4.1 Trigger & Pfad-Filter (`.github/workflows/ci.yml`)

```yaml
on:
  push:        { branches: [main], paths: [auftrag2_cicd_github_actions/**, .github/workflows/ci.yml] }
  pull_request:{ branches: [main], paths: [auftrag2_cicd_github_actions/**, .github/workflows/ci.yml] }
  workflow_dispatch:
```
- **`paths:`** verhindert, dass z. B. eine Änderung an `auftrag1_docker/` die C2-Pipeline auslöst → spart Runner-Minuten.
- **`workflow_dispatch`** erlaubt manuelles Re-Triggern (Demo, Debug).

### 4.2 Job `test` mit npm-Cache

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"
    cache-dependency-path: ${{ env.APP_DIR }}/package-lock.json
- run: npm ci
- run: npm run lint
- run: npm test
```
- **`cache: "npm"`** halbiert `npm ci`-Zeiten (cold ~30 s → warm ~5 s).
- **`cache-dependency-path`** ist nötig, weil `package-lock.json` im Subfolder liegt.

### 4.3 Job `build` mit Smoke-Test

```yaml
- uses: docker/build-push-action@v6
  with: { context: ./${{ env.APP_DIR }}, push: false, load: true, tags: dep-myapp:ci, ... }
- run: |
    docker run -d --name smoke -p 3000:3000 dep-myapp:ci
    for i in $(seq 1 20); do curl -fsS http://127.0.0.1:3000/api/health && break || sleep 1; done
    curl -fsS http://127.0.0.1:3000/api/health | grep -q '"status":"healthy"'
```
- Wartet bis zu **20 Sekunden** auf den Healthcheck — schützt vor Race-Conditions beim Container-Start.
- `grep -q` macht den Step **fail-fast**, wenn die Antwort nicht stimmt.

### 4.4 Job `push` — Tagging via `metadata-action`

```yaml
- uses: docker/metadata-action@v5
  id: meta
  with:
    images: ghcr.io/${{ github.repository_owner }}/dep-myapp
    tags: |
      type=raw,value=latest
      type=sha,format=long
      type=ref,event=branch
- uses: docker/build-push-action@v6
  with: { push: true, tags: ${{ steps.meta.outputs.tags }}, labels: ${{ steps.meta.outputs.labels }}, ... }
```
- **`type=sha,format=long`** ergibt `sha-<40-Zeichen-Commit>` → eindeutig, nachvollziehbar.
- **`type=raw,value=latest`** ist menschenlesbar.
- **`labels`** schreibt OCI-Standard-Labels (`org.opencontainers.image.source`, `…revision`, `…created`) — GitHub verlinkt das Package dadurch automatisch im Repo-Sidebar.

### 4.5 App-Refactor für Testbarkeit (`server.js`)

```js
if (require.main === module) {
  app.listen(PORT, () => console.log(`...`));
}
module.exports = app;
```
- **Listen nur als Main**: in Tests wird `server.js` per `require()` geladen und auf `port: 0` (zufälliger freier Port) gestartet — keine Port-Konflikte beim parallelen Test-Lauf.

---

## 5. Begründung der wichtigsten Entscheidungen

| Entscheidung                                | Begründung                                                                                                         |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **GHCR statt Docker Hub**                   | Kein extra Account, kein extra Secret, keine Pull-Rate-Limits, native GitHub-Integration (Packages-Tab).           |
| **Node-internes `node:test`**               | Null Test-Dependencies; identisches Tool in CI und lokal; schnellerer Cold-`npm ci`.                              |
| **Smoke-Test im `build`-Job**               | Stellt sicher, dass das Image **startet**, nicht nur dass der Code kompiliert.                                     |
| **Push nur auf `main`-Push**, nicht auf PRs | PRs aus Forks haben kein `packages: write`-Token; und unfertige Branches sollen `:latest` nie überschreiben.       |
| **`paths`-Filter im Trigger**               | Verhindert unnötige Runs, wenn nur C1/C3-Dateien geändert werden.                                                  |
| **`type=gha`-Layer-Cache**                  | Senkt Build-Zeit dramatisch, weil unveränderte Layer (`npm ci`, Base-Image) wiederverwendet werden.                 |
| **3 Tags statt nur 2**                      | `latest` (lesbar) + `sha-<…>` (eindeutig) erfüllt die Pflicht; `<branch>` kostet nichts extra und hilft beim Rollback. |
| **Multi-Stage-Dockerfile aus C1 unverändert** | Bereits bewährt; Optimierung wäre Out-of-Scope für C2.                                                            |

---

## 6. Reflexion — Learnings & was anders gelöst würde

**Was gut funktioniert hat**
- Pfad-basierte Trigger machen die Pipeline angenehm leise; nur relevante Pushes lösen Runs aus.
- Node-interne `node:test` ist ein echter Gewinn: Setup auf 0 reduziert.
- `docker/metadata-action` nimmt einem die gesamte Tag-Logik ab — kein selbstgebasteltes `${{ github.sha }}`-Bash.

**Was rückblickend anders wäre**
1. **Tests lokal vor Workflow-Push.** Beim ersten Versuch hatte ich `node:test`-Imports im Test-File falsch (`require("test")` statt `require("node:test")`). Hätte ein `npm test` lokal gefangen, statt einen failing Run im CI zu provozieren.
2. **Image-Name explizit lowercased.** `${{ github.repository }}` enthält Großbuchstaben (`GIBB_DEP_modul`); GHCR verlangt aber lowercase. Habe auf `${{ github.repository_owner }}/dep-myapp` umgestellt — kürzer und immer lowercase. Beim nächsten Mal direkt so anfangen.
3. **Matrix-Build über Node-Versionen** wäre ein netter Lerneffekt gewesen, aber für den Auftrag-Scope (1 Sprache, 1 Runtime) Overkill — bewusst weggelassen.
4. **SBOM/Provenance** (via `attest-build-provenance`) ist Industry-Standard — würde ich in einer realen Produktiv-Pipeline ergänzen, hier aus Zeit-/Scope-Gründen weggelassen.
5. **Versionierte Tags via Git-Tag-Trigger** (`type=semver`) wären die nächste Stufe; aktuell überschreibt jedes `main`-Merge `:latest`.

**KI-Tools (Pflichtdeklaration):**
- Pipeline-Skelett, Test-Setup und diese Doku wurden mit Claude (Anthropic) als Pair-Programming-Assistent erstellt.
  Jeder generierte Block wurde manuell gelesen, lokal verifiziert (`npm ci`, `npm run lint`, `npm test` → 8/8 grün) und auf
  Korrektheit gegen die offizielle GitHub-Actions-Doku geprüft.
