/**
 * build.js
 * Script Node.js nativo (zero dipendenze esterne)
 * Prepara la directory ./dist per il deploy su GitHub Pages.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const INDEX_FILE = path.join(ROOT_DIR, 'index.html');

console.log('🚀 Avvio procedura di build per GitHub Pages...');

// 1. Pulizia e ricreazione della cartella dist/
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Verifica esistenza index.html
if (!fs.existsSync(INDEX_FILE)) {
  console.error('❌ Errore: index.html non trovato nella root del progetto!');
  process.exit(1);
}

// 3. Copia di index.html in dist/
const targetIndex = path.join(DIST_DIR, 'index.html');
fs.copyFileSync(INDEX_FILE, targetIndex);
const stats = fs.statSync(targetIndex);
console.log(`📄 index.html copiato con successo in ./dist (${(stats.size / 1024).toFixed(2)} KB)`);

// 4. Creazione file .nojekyll in dist/ per bypassare Jekyll su GitHub Pages
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
console.log('🛡️  File .nojekyll creato in ./dist');

// 5. Copia di eventuali altre risorse statiche (es. cartella public, assets o immagini) se presenti
const assetsDirs = ['public', 'assets', 'images'];
assetsDirs.forEach((dirName) => {
  const sourcePath = path.join(ROOT_DIR, dirName);
  if (fs.existsSync(sourcePath) && fs.statSync(sourcePath).isDirectory()) {
    const destPath = path.join(DIST_DIR, dirName);
    fs.cpSync(sourcePath, destPath, { recursive: true });
    console.log(`📁 Cartella '${dirName}' copiata in ./dist`);
  }
});

console.log('✅ Build completata con successo! Cartella ./dist pronta per il deploy.');
