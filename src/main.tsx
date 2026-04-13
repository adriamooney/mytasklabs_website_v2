import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';

const container = document.getElementById('root')!;

/**
 * Build-time prerender fills #root with real markup. `createRoot().render()` would
 * tear that out before painting the client tree — DevTools then shows an empty
 * #root until JS finishes (or forever if something throws). Hydrate when markup
 * exists so the prerendered DOM stays until React attaches.
 */
if (import.meta.env.PROD && container.firstElementChild != null) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
