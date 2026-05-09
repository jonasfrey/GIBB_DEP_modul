# C3 — Screencast (4 Min)

## Vorher
- [ ] **Render-Deployment ist live** — `/api/health` antwortet 200
- [ ] **Postgres ist provisioniert** — `/api/status` zeigt `persistent: postgres` (grünes Badge)
- [ ] **Mindestens 1× "+1 Besuch" vorab geklickt** — Counter startet nicht bei 0
- [ ] Browser-Tabs:
  1. `https://dep-myapp-c3-<hash>.onrender.com`
  2. `https://dashboard.render.com` → dein Service → **Logs**-Tab vorbereitet
- [ ] Terminal im Repo-Root
- [ ] Loom auf, Mikro getestet

## Drehbuch

| Zeit | Tun | Sagen |
|---|---|---|
| **0:00** | Editor: `auftrag3_cloud_render/render.yaml` zeigen | "C3: Render mit Managed Postgres. Komplett als Blueprint im Repo — Web-Service plus Datenbank, ein git push." |
| **0:25** | Browser Tab 1 → Live-URL, Status-Karte sichtbar (Persistent: postgres), URL hervorheben | "Öffentlich erreichbar, redet mit der Render-Postgres." |
| **0:50** | "+1 Besuch" klicken → Counter merken (z. B. "5") | "Den Counter merken wir uns — er soll ein Redeploy überleben." |
| **1:10** | Terminal: `git commit --allow-empty -m "demo" && git push origin main` | "Push auf main → Render-Webhook → Auto-Deploy." |
| **1:40** | Browser Tab 2 → **Events**, dann **Logs** live | "Build läuft, dann startet der neue Container — JSON-Logs: `postgres ready`, `listening`." |
| **2:30** | Warten bis "Live" grün ist | "Health-Check passt, Render schaltet zero-downtime um." |
| **2:50** | Browser Tab 1 → Hard-Reload (Ctrl+Shift+R) | "Neuer Hostname — anderer Container." |
| **3:10** | Counter ansehen → **gleicher Wert wie vorher** | "Counter überlebt: DB lebt unabhängig vom Container." |
| **3:25** | Nochmals "+1 Besuch" → steigt | "Normalbetrieb läuft." |
| **3:45** | GitHub-Repo → `auftrag3_cloud_render/` kurz scrollen | "render.yaml, README, DOCUMENTATION mit KI-Deklaration im Repo." |
| **3:55** | Outro | "Danke." |

## Bewertungs-Aspekte (alle ✓)
- Öffentlich erreichbare URL
- Deployment-Trigger (git push)
- Logs im Plattform-Interface

## Falls live etwas schiefgeht
- `persistent: in-memory`: `DATABASE_URL` nicht injiziert — Service → Environment prüfen
- 503 / Cold Start: 30 s warten, F5
- Build failt: `rootDir: auftrag3_cloud_render` in `render.yaml` prüfen

## Nach der Aufnahme
README.md → Live-URL und Loom-Link einfügen.
