import { React } from "react";
import styled from "@emotion/styled";

// Navbar icon that leads to home
const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.5;

  div {
    display: block;
    width: 100%;
    border-left: 1px solid #909090;
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
