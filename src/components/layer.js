import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { ParallaxLayer } from "react-spring/renderprops-addons";

// Parallax layer
const Container = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full bg-teal-darker`};
`;

const Layer = ({ children, offset, speed, factor }) => (
  <Container offset={offset} speed={speed} factor={factor}>
    {children}
  </Container>
);

export default Layer;

Layer.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  factor: PropTypes.number.isRequired
};
