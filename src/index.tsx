import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

const root = createRoot(document.getElementById('root') as HTMLElement); // TODO check how to best use this

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
