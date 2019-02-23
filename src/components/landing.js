import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { useSpring, animated, config } from "react-spring";
import { Section, Container } from "../utils/globalstyles";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Spring } from "react-spring/renderprops";

const AnimatedHeader = styled(animated.h1)`
  font-size: 2.25rem;
`;

// Landing section
const Landing = () => (
  <Section>
    <Container>
      <h1>landing</h1>
      
    </Container>
  </Section>
);

export default Landing;
