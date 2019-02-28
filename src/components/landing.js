import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { useSpring, animated, config } from "react-spring";
import { Section, Container } from "../utils/globalstyles";
import { Spring } from "react-spring/renderprops";

// Landing section
const Landing = () => (
  <Section
    css={css`
      ${tw`min-h-screen`}
    `}
  >
    <Container>
      <div
        css={css`
          ${tw`max-w-md`};
        `}
      >
        <h1>Hey, I'm Sarah.</h1>
        <h3>creative developer + ux enthusiast</h3>
      </div>
    </Container>
  </Section>
);

export default Landing;
