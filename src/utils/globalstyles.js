import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import tw from "tailwind.macro";

export const SectionHeader = styled("h1")`
  ${tw`mb-4 text-4xl sm:text-5xl`};
`;

export const Section = styled("div")`
  ${tw`mx-6 sm:mx-10 md:mx-8 xl:mx-6 mb-2 py-6 flex flex-wrap md:h-screen items-center`};
`;

export const AboutSec = styled("div")`
  ${tw`mx-6 sm:mx-10 md:mx-8 xl:mx-6 mb-2 py-6 md:h-screen mx-auto items-center`};
`;

export const Footer = styled("div")`
  ${tw`mx-6 sm:mx-10 md:mx-8 xl:mx-6 mb-2 py-6 flex flex-wrap h-64 items-end`};
`;

export const LinkStyle = styled("a")`
  ${tw`text-xl font-medium`};
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
