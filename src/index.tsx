import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  console.error('Root container not found!');
} else {
  container.setAttribute('style', 'height: 100vh');
  const root = createRoot(container);
  root.render(<App />);
}
