import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.component.jsx";
import PrivateRoute from "./components/PrivateRoute.component.jsx";
import AuthenticationPage from "./pages/Authentication.component.jsx";
import DashboardPage from "./pages/DashboardPage.component.jsx";
import ServicesPage from "./pages/ServicesPage.component.jsx";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/authentication" ? <Navbar /> : null}
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/services">
          <ServicesPage />
        </PrivateRoute>
        <Route exact path="/authentication">
          <AuthenticationPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
