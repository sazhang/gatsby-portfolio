import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Github from "./icons/github";
import Email from "./icons/email";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Insta from "./icons/insta";
import Arrow from "./icons/arrow";

// Let's connect section
const FooterDiv = styled.div`
  ${tw`w-full items-center justify-center absolute pin-b bg-black-dark`};
`;

const SpacedDiv = styled.div`
  ${tw`flex justify-between mt-1 py-2 sm:py-4 px-5 sm:px-8 lg:px-16`};
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

class Connect extends Component {
  render() {
    return (
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
  }
}

export default Connect;
