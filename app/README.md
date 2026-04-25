# dep-myapp

Eigene Node.js/Express-App für das Modul **HFI_DEP – Deployment** (GIBB).
Begleitet das gesamte Semester und dient als Basis für Container-, CI/CD- und Kubernetes-Aufträge.

## Voraussetzungen

| Tool   | Version             |
|--------|---------------------|
| Node.js| ≥ 20 (empfohlen 24) |
| Docker | ≥ 24                |
| Git    | aktuell             |

## Lokale Installation

```bash
cp .env.example .env
npm install
npm start
```

Die App ist anschliessend unter <http://localhost:3000> erreichbar.

## Docker

```bash
# Build
docker build -t dep-myapp .

# Run mit Standardport
docker run -d --name myapp -p 3000:3000 dep-myapp

# Run mit eigenem Port
docker run -d --name myapp -p 8080:8080 -e PORT=8080 dep-myapp

# Logs (12-Factor XI: Logs an stdout)
docker logs -f myapp
```

## API-Dokumentation

| Methode | Endpoint              | Beschreibung                                                     |
|---------|-----------------------|------------------------------------------------------------------|
| GET     | `/api/health`         | Liveness-Check, liefert `{ "status": "healthy" }`                |
| GET     | `/api/info`           | Statische Info (Name, Klasse, Hobby)                             |
| GET     | `/api/status`         | Hostname, Version, Timestamp, App-Name                           |
| GET     | `/api/echo/:message`  | Echo-Endpoint mit Path-Parameter (max. 200 Zeichen)              |
| GET     | `/api/prime?n=<int>`  | Prüft ob `n` (0–1 000 000) eine Primzahl ist                     |
| GET     | `/api/log`            | Schreibt Timestamp in `DATA_DIR/requests.log` und gibt alle aus  |

## Umgebungsvariablen

| Name         | Beschreibung                              | Default       |
|--------------|-------------------------------------------|---------------|
| `PORT`       | TCP-Port, auf dem die App lauscht         | `3000`        |
| `APP_NAME`   | Anzeigename der App                       | `dep-myapp`   |
| `APP_VERSION`| Versions-String für `/api/status`         | `1.0.0`       |
| `DATA_DIR`   | Verzeichnis für persistente Log-Dateien   | `./data`      |

## Sicherheits- und 12-Factor-Hinweise

- Keine Secrets im Code; alle Konfiguration über Env-Vars (12-Factor III).
- Logs werden auf `stdout` geschrieben (12-Factor XI).
- Container läuft als Non-Root-User `app`.
- Multi-Stage-Build mit `npm ci` für reproduzierbare Images (12-Factor V).
- Persistente Daten ausschliesslich im über `DATA_DIR` gemounteten Volume.
