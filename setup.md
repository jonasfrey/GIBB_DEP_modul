Voraussetzungen und Setup
Benötigte Tools
Bitte stelle sicher, dass folgende Tools vor dem zweiten Unterrichtstag installiert und funktionsfähig sind:

Tool	Download / Info	Hinweis
Docker Desktop	docker.com/products/docker-desktop	Inkl. Docker Compose V2. Aktiviere Kubernetes in den Settings (optional).
Git	git-scm.com	Falls nicht schon vorhanden.
GitHub Account	github.com	Für CI/CD mit GitHub Actions. Kostenlos.
VS Code (empfohlen)	code.visualstudio.com	Mit Extensions: Docker, YAML, GitHub Actions.
Node.js / Python / .NET	je nach Technologie	Mindestens eine Runtime für deine Applikation.
minikube (optional)	minikube.sigs.k8s.io	Für Kubernetes-Challenge.
Screencast-Tool	loom.com oder OBS	Für Abgabe-Screencasts. Loom ist am einfachsten.
Starter-App
Am ersten Tag baust du im Unterricht eine eigene simple Web-Applikation, die du für alle weiteren Aufträge als Basis verwenden kannst. Alternativ darfst du auch ein bestehendes Projekt verwenden.

Vorbereitete Starter-App
Für den Code-Review am ersten Tag steht eine fertige App zur Verfügung:

 

Link: github.com/ndum/dep-starter-app

    

docker pull ghcr.io/ndum/dep-starter-app:latest
    
docker run -p 3000:3000 ghcr.io/ndum/dep-starter-app:latest

 

Alternativ:

git clone https://github.com/ndum/dep-starter-app 

cd dep-starter-app && npm install && npm start

Empfohlene VS Code Extensions
Extension	Beschreibung
Docker	Dockerfile-Syntax, Container-Verwaltung
YAML	YAML-Syntax für docker-compose.yml und K8s-Manifeste
GitHub Actions	Workflow-Syntax und -Validierung
GitLens	Erweiterte Git-Funktionen
REST Client	API-Testing direkt in VS Code