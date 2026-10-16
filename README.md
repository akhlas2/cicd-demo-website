# CI/CD-Demo-Website

Dies ist ein kleines Lernprojekt mit HTML, CSS, JavaScript, GitHub Actions und GitHub Pages.

## Starten

Doppelklicke `index.html`, um die Website lokal zu sehen.

## Lokal testen (Node.js 22 oder neuer)

```powershell
node --check app.js
node --test tests.mjs
```

## Deployment

1. Erstelle ein oeffentliches GitHub-Repository `cicd-demo-website` (ohne automatisch generierte README).
2. Starte PowerShell im Projektordner.
3. Führe aus:

```powershell
git init
git branch -M main
git add .
git commit -m "Erste CI-CD Demo"
git remote add origin https://github.com/DEIN-BENUTZERNAME/cicd-demo-website.git
git push -u origin main
```

4. Gehe im GitHub-Repository zu Settings > Pages und waehle bei **Build and deployment > Source**: **GitHub Actions**.
5. Gehe zu **Actions**, oeffne den Workflow und pruefe das Ergebnis.
6. Die Seite sollte nach erfolgreichem Deployment unter `https://DEIN-BENUTZERNAME.github.io/cicd-demo-website/` erreichbar sein.

## Experimente

- Erfolg: In `index.html` `Version 1` in `Version 2` aendern, committen und pushen.
- Fehler: In `index.html` `id="test-button"` in `id="kaputter-button"` aendern, committen und pushen. CI faellt durch, CD wird uebersprungen.
- Reparatur: Wieder `id="test-button"` eintragen, committen und pushen.

Fuer jede Aenderung:

```powershell
git add .
git commit -m "Beschreibung der Aenderung"
git push
```

Hinweis: Die Testdatei kontrolliert definierte Strukturmerkmale und die Syntax. Sie ist kein vollstaendiger Browsertest.
