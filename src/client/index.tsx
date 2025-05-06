import { StrictMode  } from 'hono/jsx'
import { hydrateRoot } from 'hono/jsx/dom/client'
import App from './App'

const root = document.getElementById("root");

if (root) {
  hydrateRoot(
    root,
    <StrictMode>
      <App />
    </StrictMode>
  );
}

