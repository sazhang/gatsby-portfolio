import tw from "tailwind.macro";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

export const MenuBtnDiv = styled("div")`
  ${tw`block relative border-none outline-none flex items-center mr-8`};
`;

const menubtn = css`
  width: 30px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  display: inline-block;

  span {
    background-color: #ced9f9;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }

  span:nth-of-type(1) {
    top: 0px;
    left: 0px;
  }

  span:nth-of-type(2) {
    top: 10px;
    left: 0px;
  }

  span:nth-of-type(3) {
    bottom: 0px;
    left: 0px;
  }
`;

export const Hamburger = css`
  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
  }

  ${menubtn};

  &:hover span:nth-of-type(odd) {
    transform: rotate(-4deg) scaleY(1.1);
  }

  &:hover span:nth-of-type(even) {
    transform: rotate(3deg) scaleY(1.1);
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
