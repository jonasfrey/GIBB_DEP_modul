# LB1 Abgabe — Teams-Nachricht-Template

> Vor dem Senden: alle `<…>` Platzhalter ersetzen, Repo public schalten,
> Drive-Freigaben prüfen ("Jeder mit dem Link → Betrachter"), Render-Deployment live.

---

## Vorlage (kopieren in Teams-Chat an Lehrperson)

```
Modul HFI_DEP — LB1 Abgabe (3 von 5 Challenges)
Jonas Frey · Klasse 24 · Abgabe 17.05.2026

Repository: https://github.com/jonasfrey/GIBB_DEP_modul

— C1 · Multi-Service-Architektur mit Docker Compose —
  Code:        https://github.com/jonasfrey/GIBB_DEP_modul/tree/main/auftrag1_docker
  README:      https://github.com/jonasfrey/GIBB_DEP_modul/blob/main/auftrag1_docker/README.md
  Doku:        https://github.com/jonasfrey/GIBB_DEP_modul/blob/main/auftrag1_docker/DOCUMENTATION.md
  Screencast:  https://drive.google.com/file/d/1an1ZJacQAEPjwDrcqwc51hk6TdTUQQeI/view?usp=drive_link
  https://drive.google.com/file/d/1wtVi8FTUZ2pvi9cTHR903AqkRXavo6V1/view?usp=drive_link

— C2 · CI/CD mit GitHub Actions —
  Code:        https://github.com/jonasfrey/GIBB_DEP_modul/tree/main/auftrag2_cicd_github_actions
  Workflow:    https://github.com/jonasfrey/GIBB_DEP_modul/blob/main/.github/workflows/ci.yml
  Image:       https://github.com/jonasfrey/GIBB_DEP_modul/pkgs/container/dep-myapp
  Doku:        https://github.com/jonasfrey/GIBB_DEP_modul/blob/main/auftrag2_cicd_github_actions/DOCUMENTATION.md
  Screencast:  https://drive.google.com/file/d/1uUhUZTCiaTbfx9CpQ5ZOx_XlmWdSetJa/view?usp=drive_link
  https://drive.google.com/file/d/1oJ8IxqgrCEEehXvR3viQuokmqPpa57vf/view?usp=drive_link

— C3 · Cloud-Plattform Deployment auf Render —
  Code:        https://github.com/jonasfrey/GIBB_DEP_modul/tree/main/auftrag3_cloud_render
  Live-URL:    https://dep-myapp-c3.onrender.com
  Doku:        https://github.com/jonasfrey/GIBB_DEP_modul/blob/main/auftrag3_cloud_render/DOCUMENTATION.md
  Screencast:  <GOOGLE-DRIVE-LINK-C3>

KI-Tools: Claude (Anthropic) als Pair-Programming-Assistent, deklariert in jeder DOCUMENTATION.md (Abschnitt 6).
```

---

## Pre-Flight-Checkliste vor dem Senden

### Repository
- [ ] Repo ist **public** (Settings → General → Danger Zone → Change visibility)
- [ ] Letzter Commit ist auf `main` gepusht
- [ ] `.env`-Dateien sind nicht im Repo (via `.gitignore` ausgeschlossen)

### C1
- [ ] [auftrag1_docker/DOCUMENTATION.md](auftrag1_docker/DOCUMENTATION.md) gelesen, alle 6 Aspekte vorhanden
- [ ] Screencast 2–5 Min, alle 3 Bewertungs-Aspekte sichtbar (`docker compose up`, laufende App, Code-Change-Cycle)
- [ ] Drive-Link in Inkognito-Tab getestet → spielt ohne Login

### C2
- [ ] Letzter Pipeline-Run auf [Actions](https://github.com/jonasfrey/GIBB_DEP_modul/actions) ist **grün**
- [ ] Image in [GHCR](https://github.com/jonasfrey/GIBB_DEP_modul/pkgs/container/dep-myapp) sichtbar, Package auf **public**
- [ ] [auftrag2_cicd_github_actions/DOCUMENTATION.md](auftrag2_cicd_github_actions/DOCUMENTATION.md) gelesen
- [ ] Screencast 2–5 Min, alle 3 Bewertungs-Aspekte sichtbar (Push, Stage-Durchlauf, Image in Registry)
- [ ] Drive-Link in Inkognito-Tab getestet

### C3
- [ ] Render-Deployment ist live, `/api/health` antwortet 200
- [ ] `/api/status` zeigt `persistent: postgres` (nicht `in-memory`)
- [ ] Live-URL in Inkognito-Tab getestet → lädt
- [ ] [auftrag3_cloud_render/DOCUMENTATION.md](auftrag3_cloud_render/DOCUMENTATION.md) — Live-URL eingesetzt
- [ ] Screencast 2–5 Min, alle 3 Bewertungs-Aspekte sichtbar (Live-URL, Deployment-Trigger, Logs)
- [ ] Drive-Link in Inkognito-Tab getestet

### Google-Drive-Freigabe
- [ ] Pro Screencast 1 MP4-Datei mit klarem Namen: `dep-c1-screencast-jonasfrey.mp4` etc.
- [ ] Freigabe: **Jeder mit dem Link → Betrachter** (nicht "Beschränkt")
- [ ] Test in Inkognito-Tab: spielt ohne Anmeldung

---

## Falls etwas vergessen wurde

Verspätung kostet **−0.5 Noten pro angefangenem Tag** auf die betroffene Teilnote.
Lieber 23:30 Uhr eine vollständige Nachricht senden als 23:59 Uhr eine halbe.
