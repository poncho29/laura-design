import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'

// Self-hosted fonts (latin subset covers Spanish accents). Lato ships no 600 weight: 600 resolves to 700.
import '@fontsource/lato/latin-400.css';
import '@fontsource/lato/latin-700.css';
import '@fontsource/league-spartan/latin-600.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/normalize.css'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
