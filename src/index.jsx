import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./contexts/auth.provider.jsx";

import "./index.css";
import App from "./App.component.jsx";

render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
