import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth.provider.jsx";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/authentication",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
