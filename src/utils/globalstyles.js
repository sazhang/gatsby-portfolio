import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Global styles
// other possible colors - [#01172d, #ced9f9]
export const bgColor = "#01172d";
export const textColor = "#ced9f9";

export const Section = styled("div")`
  ${tw`flex flex-wrap w-auto my-4 mx-5 sm:mx-8 lg:mx-16 items-center`};
`;

export const SectionHeader = styled("h1")`
  ${tw`mb-4 text-4xl sm:text-5xl bg-blue-darker`};
`;

export const Viewport = styled("div")`
  ${tw`min-h-screen flex flex-wrap justify-center items-center`};
`;

export const FullWDiv = styled("div")`
  ${tw`w-full`};
`;

// Link styles
export const LinkStyle = css`
  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
  font-weight: 600;
`;

const startColor = "#C33764";
const endColor = "#1D2671";

export const Gradient = css`
  background-image: linear-gradient(to right, ${startColor}, ${endColor});
  background-repeat: no-repeat;
  background-size: 100% 0;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`;
