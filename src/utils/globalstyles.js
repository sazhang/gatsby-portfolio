import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// Global styles
export const Section = styled.div`
  ${tw`flex w-full h-auto justify-center bg-blue-darkest`};
`;
//mx-5 sm:mx-16 xl:max-w-xl 
export const Container = styled.div`
  ${tw`w-full bg-purple-darkest my-auto`};
`;

export const FixedContent = styled.div`
  ${tw`fixed w-full h-full`};
`;

export const Row = styled.div`
  ${tw`flex w-full bg-pink-darkest`};
`;

export const HalfDiv = styled.div`
  ${tw`w-full md:w-1/2 bg-teal-darkest`};
`;

// Link styles
export const LinkStyle = css`
  ${tw`text-lg md:text-xl`};
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
