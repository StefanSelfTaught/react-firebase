import React, { useContext } from "react";
import { Pane, Button, Heading, Text } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/auth.provider.jsx";
import firebase from "../firebase.utils.js";
import Layout from "./Layout.component.jsx";

const Navbar = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  return (
    <Layout background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading marginRight={24} size={600}>InternApp</Heading>
        <Button onClick={() => history.push('/dashboard')} height={40} appearance="minimal">Dashboard</Button>
        <Button onClick={() => history.push('/services')} height={40} appearance="minimal">Services</Button>
      </Pane>
      <Pane alignItems="center" display="flex">
        <Text size={500}>Logged in as {!!currentUser ? currentUser.displayName : 'Loading'}</Text>
        <Button
          marginLeft={16}
          onClick={() => firebase.auth().signOut()}
          appearance="primary"
        >
          Logout
        </Button>
      </Pane>
    </Layout>
  );
};

export default Navbar;
