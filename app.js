const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Définir le dossier public pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, '5')));

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré : http://localhost:${port}`);
});
