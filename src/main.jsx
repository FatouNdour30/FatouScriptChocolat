import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer createRoot depuis react-dom/client
import App from './App';

const root = document.getElementById('root');

// Utilisez createRoot pour le rendu de l'application
const rootElement = createRoot(root); // Utiliser createRoot directement sans passer par ReactDOM
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
