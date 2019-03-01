import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Github from "./icons/github";
import Email from "./icons/email";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Insta from "./icons/insta";

// Let's connect section
const Social = css`
  ${tw`flex fixed pin-b w-full justify-center mb-2 sm:mb-6`};
  a {
    ${tw`inline-block pr-6 hover:text-goldish`};
    &:nth-of-type(5) {
      ${tw`pr-0`};
    }
  }
  svg {
    ${tw`h-6 w-6 sm:h-8 sm:w-8`};
  }
`;

const Connect = () => (
  <div css={Social}>
    <Email />
    <Linkedin />
    <Twitter />
    <Insta />
    <Github />
  </div>
);

export default Connect;
