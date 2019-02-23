import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Github from "./icons/github";
import Email from "./icons/email";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Insta from "./icons/insta";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Section, Container } from "../../utils/globalstyles";

// Let's connect section
const Social = css`
  ${tw`absolute pin-b mb-2 sm:mb-4`};
  a {
    ${tw`pr-4 sm:pr-8`};
  }
  a:nth-of-type(5) {
    ${tw`pr-0`};
  }
  svg {
    ${tw`sm:h-8 sm:w-8`};
  }
`;

const Connect = () => (
  <Section>
    <div css={Social}>
      <Email />
      <Linkedin />
      <Twitter />
      <Insta />
      <Github />
    </div>
  </Section>
);

export default Connect;
