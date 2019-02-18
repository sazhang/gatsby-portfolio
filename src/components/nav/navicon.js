import React from "react";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import logo from "../../images/polyz.png";

// Navbar icon that leads to home
const IconBtn = styled("button")`
  ${tw`block flex items-center`};
`;

const Icon = styled("img")`
  ${tw`h-8 w-8 m-0 p-0`};
`;

export default () => (
  <Link to="/">
    <IconBtn>
      <Icon src={logo} alt="SZ" />
    </IconBtn>
  </Link>
);
