# C1 — Screencast (3 Min)

## Vorher
- [ ] Terminal in `auftrag1_docker/`, `.env` mit `POSTGRES_PASSWORD` gesetzt
- [ ] Browser: nur 1 Tab `http://localhost:8080`
- [ ] **Stack ist NICHT gestartet** (für `up --build`-Demo). Vorher: `docker compose down -v`
- [ ] Loom auf, Mikro getestet

## Drehbuch

| Zeit | Tun | Sagen |
|---|---|---|
| **0:00** | Terminal sichtbar | "C1: 3 Services in einem Compose-Stack — nginx, web, postgres. Custom Network, Volume, Healthchecks." |
| **0:15** | `docker compose up --build` starten, Build-Logs scrollen kurz zeigen | "Ein Befehl baut alles: web wird gebaut, postgres und nginx aus offiziellen Images gezogen." |
| **0:50** | Logs laufen, **postgres `database system is ready`**, dann **web `listening`**, dann **nginx start** zeigen | "Healthcheck-Kette: web wartet bis postgres healthy ist, nginx wartet bis web healthy ist." |
| **1:30** | Browser → `http://localhost:8080` → Status-Karte zeigt Hostname/Persistent | "App läuft via nginx-Reverse-Proxy, redet mit Postgres." |
| **1:50** | **+1 Besuch** klicken (mehrfach), Counter steigt | "Jeder Klick ist ein INSERT in `request_log`." |
| **2:10** | **Code-Änderung**: in `web/server.js` Zeile bei `/api/info` `name:` ändern, speichern. Terminal: `docker compose up -d --build web` | "Change-Cycle: Code anpassen, Service neu bauen — restliche Services laufen weiter." |
| **2:35** | Browser refresh → neuer `name` sichtbar, Counter unverändert | "Neuer Container, gleicher Counter — Volume hat überlebt." |
| **2:50** | `docker compose logs --tail 20 web nginx` zeigen (JSON-Lines) | "Strukturierte JSON-Logs auf stdout, alles in einem Stream." |
| **2:55** | Outro | "Code, compose.yaml und Doku im Repo. Danke." |

## Bewertungs-Aspekte (alle ✓)
- Setup-Prozess: `docker compose up --build`
- Laufende App: Browser
- Änderungs-Zyklus: Code → Build → Auswirkung sichtbar

## Nach der Aufnahme
README.md → Loom-Link einfügen unter `## Screencast`.
