import React, { useState, useContext } from "react";
import { Pane, Button, Heading, Dialog } from "evergreen-ui";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/auth.provider.jsx';
import Login from "./Login.component.jsx";
import Register from "./Register.component.jsx";

const Authenticate = () => {
  const { currentUser } = useContext(AuthContext);
  const [isLoginShown, setIsLoginShown] = useState(false);
  const [isRegisterShown, setIsRegisterShown] = useState(false);

  const handleCloseDialog = () => {
    setIsLoginShown(false);
    setIsRegisterShown(false);
  };

  if (currentUser) return <Redirect to="/dashboard" />

  return (
    <Pane
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default"
    >
      <Heading size={700} marginBottom={12}>
        You have to be authenticated to use the app!
      </Heading>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Button
          onClick={() => setIsLoginShown(true)}
          height={40}
          marginRight={12}
          appearance="primary"
        >
          Login
        </Button>
        <Button onClick={() => setIsRegisterShown(true)} height={40}>
          Register
        </Button>
      </Pane>
      <Dialog
        isShown={isLoginShown || isRegisterShown}
        title={isLoginShown ? "Login" : "Register"}
        onCloseComplete={handleCloseDialog}
        hasFooter={false}
      >
        {isLoginShown ? <Login /> : <Register />}
      </Dialog>
    </Pane>
  );
};

export default Authenticate;
