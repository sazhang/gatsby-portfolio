import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Global styles
export const Section = styled.div`
  ${tw`flex w-full h-auto justify-center`};
  min-height: 50vh;
`;

export const Container = styled.div`
  ${tw`w-full mx-5 sm:mx-16 xl:max-w-xl my-auto`};
`;

export const FixedContent = styled.div`
  ${tw`fixed w-full h-full`};
`;

// Link styles
export const LinkStyle = css`
  ${tw`text-lg md:text-xl font-semibold`};
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
