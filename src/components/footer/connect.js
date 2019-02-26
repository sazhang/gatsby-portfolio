import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Github from "./icons/github";
import Email from "./icons/email";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Insta from "./icons/insta";

// Let's connect section
const Social = css`
  ${tw`flex fixed pin-b md:pin-l sm:mr-0 sm:block sm:ml-6 mb-2 sm:mb-6 w-full justify-center sm:w-auto`};
  a {
    ${tw`inline-block pr-4 sm:block sm:mt-4`};
    &:nth-of-type(5) {
      ${tw`pr-0`};
    }
  }
  svg {
    ${tw`h-6 w-6`};
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
