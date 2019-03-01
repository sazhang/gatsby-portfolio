import React from "react";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import logo from "../../images/polyz.png";

// Navbar icon that leads to home
const IconBtn = styled.button`
  ${tw`h-8 w-8 items-center bg-transparent`};
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default () => (
  <Link to="/">
    <IconBtn aria-label="home" aria-required="true" alt="home" />
  </Link>
);
