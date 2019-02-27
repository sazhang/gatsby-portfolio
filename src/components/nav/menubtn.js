import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Animated hamburger icon
export const MenuBtnDiv = styled.div`
  ${tw`flex relative border-none outline-none mb-1 mr-2 sm:mr-4`};
`;

const menubtn = css`
  width: 30px;
  height: 25px;
  ${tw`inline-block cursor-pointer`};

  span {
    ${tw`bg-off-white absolute w-full`};
    height: 3px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transition-duration: 500ms;
    border-radius: 9px;
  }

  span:nth-of-type(1) {
    top: 0px;
    left: 0px;
  }

  span:nth-of-type(2) {
    top: 11px;
    left: 0px;
  }

  span:nth-of-type(3) {
    bottom: 0px;
    left: 0px;
  }
`;

export const Hamburger = css`
  ${menubtn};

  &:hover span:nth-of-type(1) {
    transform: translateY(12px);
  }

  &:hover span:nth-of-type(3) {
    transform: translateY(-12px);
  }
`;

export const Close = css`
  ${menubtn};
  z-index: 40;
  span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 10px;
  }

  span:nth-of-type(2) {
    transform: scale(0.1);
  }

  span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 10px;
  }

  &:hover span:nth-of-type(odd) {
    transform: rotate(-1deg);
  }

  &:hover span:nth-of-type(even) {
    transform: rotate(1deg);
  }
`;
