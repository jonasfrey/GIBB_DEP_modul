Zusammenfassung: Grundlagen Deployment (Modul HFI_DEP)

1. Was ist Deployment?
Deployment ist der Prozess, eine Applikation vom Entwickler-Rechner in eine produktive, erreichbare Umgebung zu bringen. Modernes Deployment automatisiert das Bauen, Testen, Ausliefern und Überwachen einer App. Der Rahmen dafür ist der DevOps Lifecycle – eine Unendlichkeitsschleife zwischen Dev (Plan, Code, Build, Test) und Ops (Release, Deploy, Operate, Monitor).
Die Entwicklung verlief von manuellem FTP-Upload über Shell-Scripts und VMs hin zu Containern (Docker, seit 2013), Kubernetes (seit 2015) und heute GitOps/IaC/Serverless. Die Kernprinzipien bleiben dabei gleich: Automatisierung, Reproduzierbarkeit, Trennung von Code und Konfiguration.

2. Environments (Umgebungen)
Professionelle Projekte laufen in mehreren parallelen Umgebungen:

Development (DEV): Lokale Entwicklung, Fake-Daten
Testing/QA: Automatisierte und manuelle Tests, Testdaten
Staging (STG): Produktionsnahes Testen durch PO/Stakeholder, anonymisierte Produktionsdaten
Production (PROD): Live-System für echte Nutzende, echte Daten

Das zentrale Prinzip: Der Code ist überall derselbe – nur die Konfiguration ändert sich. Die Unterschiede (DB-URL, API-Keys, Log-Level) werden über Environment-Variablen gesteuert. .env-Dateien gehören immer in .gitignore; ins Repository kommt nur eine .env.example mit Platzhaltern.

3. Build-Prozesse und Artefakte
Ein Build verwandelt Quellcode in ein lauffähiges Artefakt (z.B. kompiliertes JavaScript, JAR-Datei, Docker Image). Das universelle Artefakt in modernem Deployment ist das Docker Image – es kapselt alles, was die App zum Laufen braucht.
Wichtig: Builds müssen reproduzierbar sein, d.h. gleicher Input → gleicher Output. Dazu gehören:

npm ci statt npm install (nutzt exakte Versionen aus package-lock.json)
Lock-Dateien zwingend im Git versionieren
Klare Image-Tags: nicht nur latest, sondern Semantic Version oder Git-SHA

Der Build findet in der CI/CD-Pipeline statt, nicht auf dem Entwickler-Laptop.

4. Die Deployment-Pipeline (CI/CD)
Eine Pipeline automatisiert die Schritte: Code pushen → Lint → Test → Build → Deploy → Verify → Monitor. Schlägt ein Schritt fehl, stoppt die Pipeline – kein fehlerhafter Code erreicht die Produktion.

Continuous Integration (CI): Jeder Commit löst automatisch Build + Tests aus
Continuous Delivery: Pipeline bis Staging automatisch, Deployment in Produktion per manuellem Trigger
Continuous Deployment: Jede bestandene Pipeline wird automatisch deployed

In der Praxis nutzen die meisten Teams Continuous Delivery (automatisch bis Staging, manuell für Produktion). Im Modul wird GitHub Actions verwendet.

5. Die 12-Factor App
Sammlung von 12 Prinzipien für cloud-taugliche Applikationen (Heroku, 2011). Die sechs modulrelevanten Faktoren:
FaktorPrinzipI – CodebaseEin Repository, alle Umgebungen bekommen denselben CodeIII – ConfigAlles Umgebungsspezifische (DB-URLs, Keys) in Env-Vars, nie im CodeV – Build/Release/RunDrei strikt getrennte Phasen: Build → Release (Image + Config) → RunVI – ProcessesApp speichert keinen Zustand lokal; alles Persistente in externe ServicesX – Dev/Prod ParityDev, Staging und Prod so ähnlich wie möglich haltenXI – LogsApp schreibt nur auf stdout, nie in Dateien

6. Infrastructure as Code (IaC)
Das Snowflake-Server-Problem: Manuell konfigurierte Server sind einzigartig und nicht reproduzierbar. IaC beschreibt die gesamte Infrastruktur in versionierten Dateien – reproduzierbar, reviewbar, dokumentiert.
Deklarativer Ansatz (bevorzugt): Man beschreibt den gewünschten Zustand («3 Instanzen»), das Tool berechnet den Weg dorthin. Idempotent: mehrfaches Ausführen ändert nichts.
«Cattle, not Pets»: Container/Server sind austauschbar (Nutztiere), nicht individuell gepflegt (Haustiere). Fällt einer aus, wird er ersetzt, nicht repariert.
Wichtige Tools: Dockerfile, Docker Compose, Kubernetes (im Modul), Terraform/Pulumi (Cloud-Infrastruktur).

7. Deployment-Strategien
StrategieDowntimeRollbackKomplexitätKostenBig BangJaLangsamNiedrigNiedrigRolling UpdateNeinAutomatischMittelNiedrigBlue/GreenNeinSofortHochHochCanaryNeinSofortHochMittel

Big Bang: Standard in Docker Compose, geeignet für interne Tools/Dev
Rolling Update: Standard in Kubernetes, für die meisten Web-Apps
Blue/Green: Zwei identische Umgebungen, Traffic-Switch – für geschäftskritische Apps
Canary: Erst 5% Traffic auf neue Version, dann schrittweise erhöhen – für grosse User-Basen


8. Docker Grundlagen
Image = unveränderliche Vorlage (Klasse), Container = laufende Instanz (Objekt). Container teilen den Host-Kernel – deutlich leichtgewichtiger als VMs.
Wichtige Prinzipien im Dockerfile:

Alpine-basiertes Base Image verwenden (node:24-alpine)
Layer Caching nutzen: package.json zuerst kopieren und npm ci laufen lassen, danach erst restlichen Code kopieren → Dependencies nur bei Änderung neu installiert
.dockerignore anlegen (schützt vor node_modules und .env im Image)
npm ci statt npm install
Multi-Stage Builds für Produktion: Build-Tools bleiben in Stage 1, finales Image enthält nur das Nötigste

Port-Mapping: docker run -p HOST-PORT:CONTAINER-PORT – EXPOSE im Dockerfile ist nur Dokumentation, öffnet keinen Port.
Für persistente Daten (Datenbanken etc.) müssen Volumes verwendet werden, da Container-Daten beim Löschen verloren gehen. Für Container-zu-Container-Kommunikation (per Name) müssen alle Container im gleichen Docker-Netzwerk sein.