import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import App from './App.jsx';
import { validateEnv } from './config/env';
import { initMonitoring, reportError } from './lib/monitoring';

const rootElement = document.getElementById('root');

try {
  validateEnv();
  initMonitoring();

  window.addEventListener('unhandledrejection', (event) => {
    reportError(event.reason, { source: 'unhandledrejection' });
  });

  window.addEventListener('error', (event) => {
    reportError(event.error || new Error(event.message), { source: 'window.error' });
  });

  createRoot(rootElement).render(
    <StrictMode>
      <App />
      <Analytics />
    </StrictMode>,
  );
} catch (error) {
  const message = error instanceof Error ? error.message : 'Application configuration error';
  console.error('Startup configuration failed:', message);

  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 2rem; font-family: sans-serif; color: #111827; background: #fef2f2; min-height: 100vh; display: grid; place-items: center;">
        <div style="max-width: 640px; background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,.08);">
          <h1 style="margin-top: 0; font-size: 1.5rem;">Application configuration error</h1>
          <p style="line-height: 1.6;">The app could not start because required environment variables are missing or invalid.</p>
          <pre style="white-space: pre-wrap; background: #f3f4f6; padding: 1rem; border-radius: 12px; overflow-x: auto;">${message}</pre>
        </div>
      </div>
    `;
  }

  throw error;
}
