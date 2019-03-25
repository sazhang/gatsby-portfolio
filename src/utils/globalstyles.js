import styled from "@emotion/styled";
import tw from "tailwind.macro";

// Global styles
export const Container = styled.section`
  ${tw`h-full w-full max-w-3xl mx-auto pt-24 px-10 sm:px-16 lg:px-24`};
`;

export const Row = styled.div`
  ${tw`flex flex-wrap w-full h-full`};
`;

export const HalfDiv = styled.div`
  ${tw`w-full h-full mb-8 sm:w-1/2`};
`;

export const LessThanHalfDiv = styled.div`
  ${tw`w-2/5 px-3`};
`;

export const GradientKnockoutTitle = styled.h1`
  background: #fc466b;
  background: -webkit-linear-gradient(to right, #3f5efb, #fc466b);
  background: linear-gradient(to right, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
