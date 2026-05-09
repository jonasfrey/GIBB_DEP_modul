# C2 — Screencast (3 Min)

## Vorher
- [ ] Letzter Pipeline-Run auf GitHub muss **grün** sein (sonst hast du nichts zu zeigen)
- [ ] Terminal im Repo-Root
- [ ] Browser-Tabs (in dieser Reihenfolge):
  1. `https://github.com/jonasfrey/GIBB_DEP_modul`
  2. `https://github.com/jonasfrey/GIBB_DEP_modul/pkgs/container/dep-myapp`
- [ ] Loom auf, Mikro getestet

## Drehbuch

| Zeit | Tun | Sagen |
|---|---|---|
| **0:00** | Editor: `.github/workflows/ci.yml` zeigen, kurz scrollen | "C2: GitHub-Actions-Pipeline mit drei Stages — test, build, push." |
| **0:20** | Terminal: `git commit --allow-empty -m "demo" && git push origin main` | "Push auf main triggert die Pipeline automatisch." |
| **0:50** | Browser Tab 1 → **Actions** → neuen Run anklicken | "Job-Graph: build braucht test, push braucht build. Schlägt einer fehl, kein Push." |
| **1:10** | `test`-Job aufklappen, Steps zeigen | "npm ci mit Cache, lint, dann 8 Integrationstests — alle grün." |
| **1:30** | `build`-Job → Smoke-Test-Step zeigen | "Image wird gebaut **und** gestartet, Smoke-Test trifft `/api/health`." |
| **1:55** | `push`-Job → Tag-Output zeigen (`latest`, `sha-…`, `main`) | "metadata-action setzt drei Tags. Login per GITHUB_TOKEN, kein extra Secret." |
| **2:20** | Browser Tab 2 → GHCR-Package, Tags-Liste | "Resultat: das Image liegt in GHCR mit drei Tags pro Push." |
| **2:45** | README.md im Repo kurz zeigen | "Architektur, Tag-Strategie, KI-Deklaration — alles im Repo." |
| **2:55** | Outro | "Danke." |

## Bewertungs-Aspekte (alle ✓)
- Push triggert Pipeline
- Vollständiger Stage-Durchlauf im Actions-UI
- Image in der Registry

## Falls live etwas rot wird
Aufnahme abbrechen. Lokal `npm test` + `docker build` testen, fix, push, neu aufnehmen.

## Nach der Aufnahme
README.md → Loom-Link einfügen unter `## Screencast`.
