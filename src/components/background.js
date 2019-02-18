import { React } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

// Navbar icon that leads to home
const Container = styled.div`
${tw`flex absolute w-full h-full`};
  z-index: -1;

  div {
    ${tw`block w-full opacity-50 border-maintxtcolor`};
    border-left: 1px solid;
  }

  div:nth-of-type(1) {
    border: none;
  }
`;

export default () => (
  <Container>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </Container>
);
