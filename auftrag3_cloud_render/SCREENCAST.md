# C3 — Screencast (2:00 Min — strikt minimal)

**Live-URL:** https://dep-myapp-c3.onrender.com
**Dashboard:** https://dashboard.render.com → Service `dep-myapp-c3`

## Vorher (3 Min vor Aufnahme)

- [ ] **Service warmlaufen** — Live-URL im Browser oeffnen, Status muss `postgres` zeigen (Cold-Start vermeiden)
- [ ] **Counter-Stand notieren** (aktuell: `curl https://dep-myapp-c3.onrender.com/api/visits` → `total`)
- [ ] **Browser-Tabs vorbereiten:**
  1. `https://dep-myapp-c3.onrender.com` (App)
  2. `https://dashboard.render.com` → `dep-myapp-c3` → **Logs**-Tab
- [ ] **Terminal** im Repo-Root, `git status` zeigt 3 modified files
- [ ] **Loom** auf, Mikro getestet

---

## Drehbuch (2:00 Min)

| Zeit | Bildschirm | Aktion | Was du sagst |
|---|---|---|---|
| **0:00** | Browser Tab 1 (App) | URL in Adresszeile markieren, Status-Karte zeigen, **Persistent: postgres** Badge | "C3 auf Render. Oeffentliche URL `dep-myapp-c3.onrender.com`, Postgres ist verbunden." |
| **0:15** | Browser Tab 1 | "+1 Besuch" klicken, Counter merken (z.B. 10) | "Counter steht bei 10 — soll den Redeploy ueberleben." |
| **0:25** | Terminal | `git -c user.name="Jonas Frey" -c user.email="jonas.immanuel.frey@gmail.com" commit -am "docs(c3): Live-URL"` und `git push origin main` | "`git push` auf main loest Render-Auto-Deploy aus." |
| **0:45** | Browser Tab 2 (Logs) | Logs scrollen, JSON-Zeilen sichtbar: `==> Building...`, `postgres ready`, `listening` | "Im Render-Dashboard live die strukturierten JSON-Logs: Build, Postgres ready, listening." |
| **1:25** | Browser Tab 1 | Hard-Reload (Ctrl+Shift+R), neuer Hostname sichtbar, Counter **immer noch 10** | "Neuer Container — Counter ueberlebt: DB unabhaengig vom Service." |
| **1:45** | Browser Tab 1 | "+1 Besuch" klicken → 11 | "Normalbetrieb laeuft." |
| **1:55** | Outro | Aufnahme stoppen | "Danke." |

---

## Bewertungs-Aspekte (alle ✓)

- [x] **Oeffentlich erreichbare URL** — durchgaengig Tab 1
- [x] **Deployment-Trigger** — `git push` bei 0:25
- [x] **Logs im Plattform-Interface** — Tab 2 bei 0:45

---

## Falls live etwas schiefgeht

| Problem | Sofort-Fix |
|---|---|
| `persistent: in-memory` | DATABASE_URL pruefen im Render-Service → Environment |
| 503 / Cold Start | 30 s warten, F5. Vorher warmlaufen lassen! |
| `git push` rejected | `git pull --rebase origin main` |
| Keine Aenderungen | `git commit --allow-empty -m "demo redeploy"` |

---

## Nach der Aufnahme

1. Loom → **Share** → **Download MP4**
2. Datei umbenennen: `dep-c3-screencast-jonasfrey.mp4`
3. Google Drive → selber Ordner wie C1/C2
4. Freigabe: **Jeder mit dem Link → Betrachter**
5. Inkognito-Tab testen
6. Link in [`ABGABE_TEAMS.md`](../ABGABE_TEAMS.md) Zeile 35 einsetzen
