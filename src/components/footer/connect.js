import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Github from "./icons/github";
import Email from "./icons/email";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Insta from "./icons/insta";
import Arrow from "./icons/arrow";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Section, Container } from "../../utils/globalstyles";

// Let's connect section
const FooterDiv = styled.div`
  ${tw`w-full absolute pin-b`};
`;

const SpacedDiv = styled.div`
  ${tw`flex justify-between mb-2 py-2 sm:py-4 px-5 sm:px-8 lg:px-16`};
`;

const Social = css`
  ${tw`-mr-4`};
  h2 {
    ${tw`mb-4`};
  }
  a {
    ${tw`pr-5`};
  }
  svg {
    ${tw`sm:h-6 sm:w-6`};
  }
`;

const Connect = () => (
  <FooterDiv>
    <SpacedDiv>
      <div css={Social}>
        <h2>Let's connect -</h2>
        <Email />
        <Linkedin />
        <Twitter />
        <Insta />
        <Github />
      </div>
      <div>
        <Arrow />
      </div>
    </SpacedDiv>
  </FooterDiv>
);

export default Connect;