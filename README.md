# Portfolio

Un portfolio personale moderno e reattivo realizzato con React e Vite per mostrare i propri progetti e abilità.

## 🎯 Caratteristiche

- **Design Responsivo**: Interfaccia adattabile a tutti i dispositivi
- **Animazioni Fluide**: Effetti animati con Framer Motion
- **Navigazione Intuitiva**: Routing gestito con React Router
- **Sezioni Dedicate**:
  - Home - Pagina di benvenuto
  - Projects - Gallerìa dei progetti
  - Project Detail - Dettagli singolo progetto
  - About - Informazioni personali

## 📋 Prerequisiti

- Node.js (v18 o superiore)
- npm o yarn

## 🚀 Installazione

1. Clona il repository:
```bash
git clone <url-repository>
cd portfolio
```

2. Installa le dipendenze:
```bash
npm install
```

## 💻 Utilizzo

### Modalità Sviluppo
```bash
npm run dev
```
Apri [http://localhost:5173](http://localhost:5173) nel browser.

### Build per Produzione
```bash
npm run build
```

### Preview Build Produzione
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📦 Tecnologie Utilizzate

- **React** 19.2.0 - Libreria UI
- **Vite** 7.2.4 - Build tool moderno
- **React Router DOM** 7.13.0 - Routing
- **Framer Motion** 12.31.0 - Animazioni
- **CSS** - Styling

## 📁 Struttura del Progetto

```
src/
├── components/
│   ├── layout/
│   │   └── DefaultLayout.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Projects.jsx
│       ├── ProjectDetail.jsx
│       └── About.jsx
├── data/
│   └── project.js
├── App.jsx
└── main.jsx
```

## 🎨 Personalizzazione

I dati dei progetti si trovano in `src/data/project.js`. Modifica l'array `projects` per aggiungere o modificare i tuoi progetti.

Ogni progetto deve seguire questa struttura:
```javascript
{
    id: number,
    title: string,
    description: string,
    tech: string[],
    github: string,
    image: string
}
```

## 📝 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 👤 Autore

**Alberto Cadorin**
