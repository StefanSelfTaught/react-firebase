import React from "react";
import { Pane } from "evergreen-ui";

const Layout = ({ children, ...otherProps }) => {
  return (
    <Pane
      {...otherProps}
      display="flex"
      padding={16}
      paddingLeft={81}
      paddingRight={81}
    >
      {children}
    </Pane>
  );
};

export default Layout;
