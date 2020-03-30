import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Auth0Provider } from "./auth/AuthCtx";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Auth0Provider
    domain={"leog91.auth0.com"}
    client_id={"h4PzZBZeONiUszOSy7XbQr0pg2Lu5nvA"}
    audience={"https://api.foodie-api-leog.dev"}
    redirect_uri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
