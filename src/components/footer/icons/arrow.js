import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Up arrow icon to go back to top of page
const dimensions = css`
  ${tw`h-8 w-8 sm:h-10 sm:w-10`};
`;

export default () => (
  <a id="uparrow" href="#" title="back to top">
    <svg css={dimensions}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-up"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  </a>
);
