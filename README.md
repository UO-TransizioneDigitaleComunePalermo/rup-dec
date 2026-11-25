[![Deploy GitHub Pages](https://github.com/UO-TransizioneDigitaleComunePalermo/rup-dec/actions/workflows/deploy.yml/badge.svg)](https://github.com/UO-TransizioneDigitaleComunePalermo/rup-dec/actions/workflows/deploy.yml)

# Competenze del RUP e del DEC: manuale operativo PA

Sito web interattivo, documentale e formativo dedicato ai ruoli, responsabilità, adempimenti operativi e differenze tra **Responsabile Unico del Progetto (RUP)** e **Direttore dell'Esecuzione del Contratto (DEC)** ai sensi del **D.Lgs. 36/2023** (Codice dei Contratti Pubblici) e del Decreto Correttivo **D.Lgs. 209/2024**.

---

## 📁 Struttura del Repository

```text
github-pages-rup-dec/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Pipeline GitHub Actions per deploy automatico su branch main
├── index.html            # Applicazione web interattiva completa (HTML5, Tailwind CSS, JS nativo)
├── build.js              # Script Node.js nativo (senza dipendenze) che popola ./dist
├── .gitignore            # Esclusione di dist/, log e file di sistema
└── README.md             # Guida completa passo-passo alla configurazione
```

---

## 🚀 Pubblicazione su GitHub Pages (Documentazione con istruzioni passo-passo)

Segui questi passaggi per pubblicare il sito in meno di 5 minuti sul tuo account GitHub.

### 1. Crea un nuovo Repository su GitHub
1. Accedi a [GitHub](https://github.com) e clicca su **New repository** (o **Nuovo repository**).
2. Assegna un nome al repository (es. `competenze-rup-dec` o `manuale-rup-dec`).
3. Seleziona la visibilità **Public** (consigliata per GitHub Pages gratuito).
4. Non aggiungere README o file `.gitignore` predefiniti (sono già inclusi in questo pacchetto). Clicca su **Create repository**.

### 2. Carica i file nel Repository
Puoi caricare i file tramite terminale Git oppure tramite l'interfaccia web di GitHub:

#### Opzione A: Tramite Git (Terminale)
Apri il terminale nella cartella `github-pages-rup-dec` ed esegui:
```bash
git init
git branch -M main
git add .
git commit -m "feat: caricamento iniziale sito RUP e DEC"
git remote add origin https://github.com/<TUO-USERNAME>/<NOME-REPOSITORY>.git
git push -u origin main
```

#### Opzione B: Tramite Interfaccia Web di GitHub
1. Nella pagina del repository vuoto appena creato, clicca su **"uploading an existing file"**.
2. Trascina i file e le cartelle (`index.html`, `build.js`, `.gitignore`, `README.md` e la cartella `.github/workflows/deploy.yml`).
3. Inserisci un messaggio di commit (es. `Initial commit`) e clicca su **Commit changes**.

---

### 3. Configura GitHub Pages per l'Action
Una volta caricato il codice sul branch `main`, devi indicare a GitHub di usare la GitHub Action inclusa:

1. Nel tuo repository GitHub, clicca sulla scheda **Settings** (Impostazioni in alto a destra).
2. Nel menu laterale sinistro, clicca su **Pages** (sotto la sezione *Code and automation*).
3. Nella sezione **Build and deployment**:
   - Alla voce **Source**, apri il menu a tendina e seleziona **GitHub Actions**.
4. Salva (se richiesto). Non serve configurare branch manuali: la pipeline `.github/workflows/deploy.yml` gestirà tutto automaticamente!

---

### 4. Verifica il Deploy
1. Clicca sulla scheda **Actions** in alto nel tuo repository.
2. Vedrai il workflow **"Deploy GitHub Pages"** in esecuzione.
3. Al termine dell'esecuzione (indicato da una spunta verde), clicca sul workflow: troverai il link pubblico del tuo sito (es. `https://<TUO-USERNAME>.github.io/<NOME-REPOSITORY>/`).

---

## 💻 Test in Locale (Opzionale)

Puoi visualizzare e testare il sito direttamente sul tuo computer prima del deploy.

### Apertura Diretta
Fai doppio clic sul file `index.html` per aprirlo in qualsiasi browser moderno (Chrome, Edge, Firefox, Safari).

### Test dello script di Build
Assicurati di avere installato Node.js (v18 o superiore). Esegui nel terminale:
```bash
node build.js
```
Questo comando genererà la cartella `./dist` contenente `index.html` e il file `.nojekyll`.

### Server locale di sviluppo
Puoi avviare un server locale rapido con Node.js o Python:
```bash
# Con Node.js (senza installare nulla)
npx serve dist

# Oppure con Python
python3 -m http.server 8080 --directory dist
```
Apri poi il browser all'indirizzo `http://localhost:8080`.

---

## ⚙️ Funzionalità del Sito Interattivo

- **Navigazione a 3 colonne** ispirata ai principi del *Material Design* con layout ottimizzato per desktop, tablet e smartphone.
- **Top App Bar Sticky**: barra di ricerca dinamica a comparsa, toggle per tema Chiaro/Scuro (Light/Dark mode), contatore percentuale di avanzamento lettura e stima tempo di fruizione.
- **Left Sidebar**: indice a tendina con navigazione tra tutti i capitoli e paragrafi.
- **Right Sidebar (Table of Contents)**: Scrollspy attivo con link rapidi agli H2/H3 della sezione corrente e pulsante "Torna a inizio pagina".
- **Monitoraggio Studio**: pulsanti interattivi "Letto" / "Da leggere" per ciascun paragrafo, collegati alla barra di avanzamento nell'Header.
- **Autovalutazione Finale**: quiz da 20 domande con feedback immediato sulla correttezza della risposta, spiegazione della norma applicabile e punteggio finale azzerabile.
- **Footer Istituzionale**: con indicazioni sui documenti di riferimento, autore e finestra modale popup con il prompt integrale e le istruzioni operative.

---

## 📄 Note e Licenza
- **Autore Prompt:** Ciro Spataro
- **Licenza:** [Creative Commons Attribuzione - Condividi allo stesso modo 4.0 Internazionale (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.it)
- **Quadro Normativo di Riferimento:** D.Lgs. 36/2023, D.Lgs. 209/2024 (Decreto Correttivo), Legge 7 gennaio 2026 n. 1, delibere ANAC e pareri MIT/giurisprudenza contabile e amministrativa.
