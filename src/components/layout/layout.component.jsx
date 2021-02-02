import React from "react";

import { StyledLayout } from "./layout.styles";

const Layout = ({ children, ...rest }) => {
  return <StyledLayout {...rest}>{children}</StyledLayout>;
};

export default Layout;
