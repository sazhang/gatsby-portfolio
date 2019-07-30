import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import "typeface-montserrat";
import "typeface-lora";
import Navbar from "./nav/navbar";
import Connect from "./socials/connect";
import Footer from "./footer";

// Overall layout -
const Body = styled.div`
  // work around for gatsby issue #7310
  ${tw`flex w-full min-h-screen flex-col justify-center`};
`;

const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        html {
          text-rendering: optimizeLegibility;
          overflow-x: hidden;
          box-sizing: border-box;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        html,
        body {
          ${tw`p-0 m-0 w-full h-full bg-muted-black font-sans`};
        }
        a {
          ${tw`cursor-pointer no-underline text-pale-blue hover:text-blush`};
          transition: 0.3s;
        }
        button {
          ${tw`cursor-pointer focus:outline-none font-sans border-none`};
          transition: 0.3s;
        }
        p {
          ${tw`my-0 text-grey text-xs sm:text-base leading-normal text-pale-blue`};
          &:nth-of-type(even) {
            ${tw`mt-5`};
          }
        }
        h1 {
          ${tw`text-xxl my-0`};
        }
        h2 {
          ${tw`text-3xl lg:text-4xl my-2`};
        }
        h3 {
          ${tw`text-xl md:text-2xl mt-2`};
        }
        h4 {
          ${tw`text-lg sm:text-xl mt-2 mb-8`};
        }
        h5 {
          ${tw`text-xs lg:text-base font-thin text-grey my-0`};
        }
      `}
    />
    <Body>
      {/* <Navbar /> */}
      <main
        css={css`
          ${tw`flex-1 z-0`};
        `}
      >
        {children}
        <Connect />
      </main>
      {/* <Footer /> */}
    </Body>
  </Fragment>
);

export default Layout;
