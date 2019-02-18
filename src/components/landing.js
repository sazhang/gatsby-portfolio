import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Noisify from "../images/noisified.png";
import { useSpring, animated } from "react-spring";

// Landing section
const BackgroundImg = css`
  background-image: url(${Noisify});
  background-size: 100% 100%;
  min-height: 100vh;
  width: 100%;
`;

const Full = styled("div")`
  ${tw`w-full bg-pink-darker`};
`;

const Container = styled("div")`
  ${tw`min-h-screen `};
`;

const AnimatedHeader = styled(animated.h1)`
  font-size: 2.25rem;
`;

function Animate() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <AnimatedHeader style={props}>hello</AnimatedHeader>;
}

class Landing extends Component {
  render() {
    return (
      <Container>
        <Full>
          
        </Full>
      </Container>
    );
  }
}

export default Landing;
