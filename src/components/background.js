import { React } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

// Background with lines
const Container = styled.div`
${tw`flex w-full h-full xl:max-w-2xl justify-center mx-auto`};
  div {
    ${tw`block w-full opacity-50 border-off-white`};
    border-left: 1px solid;
  }
  div:nth-of-type(1) {
    border: none;
    @media (min-width: 1200px) {
      border-left: 1px solid;
    }
  }
  div:nth-of-type(6) {
    @media (min-width: 1200px) {
      border-right: 1px solid;
    }
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
