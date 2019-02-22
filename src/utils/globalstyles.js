import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Global styles
export const Section = styled.div`
  ${tw`flex h-full justify-center md:items-center`};
`;

export const Container = styled.div`
  ${tw`w-full mx-5 sm:mx-8 md:mx-12 lg:mx-16 xl:max-w-2xl`};
`;

export const LayerStyle = css`
  ${tw`w-full h-full`};
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
