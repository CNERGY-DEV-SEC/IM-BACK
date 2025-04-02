import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = createRoot(document.getElementById('root'));
const domain = import.meta.env.VITE_REACT_APP_AUTH0URL
const client_id = import.meta.env.VITE_REACT_APP_CLIENTID

root.render(
<Auth0Provider
    domain={domain}
    clientId={client_id}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

