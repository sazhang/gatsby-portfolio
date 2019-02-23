import { React } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

// Background with lines
const Container = styled.div`
  ${tw`flex w-full h-full fixed pin`};
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg);
  div {
    ${tw`block h-full w-full`};
    min-width: 240px;
    border-left: 1px solid;
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
    <div />
  </Container>
);
