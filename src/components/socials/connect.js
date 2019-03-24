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
  ${tw`hidden sm:flex flex-col fixed pin-b pl-5`};
  a {
    ${tw`block hover:text-goldish pb-4`};
  }
  svg {
    width: 1.25rem;
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
