import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
container?.setAttribute('style', 'height: 100vh');
const root = createRoot(container!);
root.render(<App />);
