import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Global styles
export const Section = styled.div`
  ${tw`flex flex-wrap w-auto my-4 mx-5 sm:mx-8 lg:mx-16 items-center`};
`;

export const Viewport = styled.div`
  ${tw`min-h-screen flex flex-wrap justify-center items-center`};
`;

export const FullWDiv = styled.div`
  ${tw`w-full`};
`;

// Link styles
export const LinkStyle = css`
  ${tw`sm:text-xl font-semibold`};
`;

const startColor = "#2b5876";
const endColor = "#4e4376";

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