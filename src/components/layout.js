import React from "react";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import "typeface-montserrat";
import "typeface-lora";
import styled from "@emotion/styled";
import Background from "./background";
import Navbar from "../components/nav/navbar";
import Connect from "../components/footer/connect";

// Overall layout -
export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Global
          styles={css`
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            html {
              text-rendering: optimizeLegibility;
              box-sizing: border-box;
              -ms-overflow-style: scrollbar;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            html,
            body {
              ${tw`w-full h-full p-0 m-0 text-off-white font-sans`};
            }
            a {
              ${tw`no-underline	cursor-pointer text-off-white hover:text-goldish`};
            }
            button {
              ${tw`no-underline	cursor-pointer border-none border-transparent bg-transparent focus:outline-none`};
            }
            p {
              ${tw`my-0 max-w-xs sm:max-w-md px-2 sm:px-3 md:px-6 text-grey text-xs sm:text-base md:text-lg`};
              &:nth-of-type(even) {
                ${tw`mt-5`};
              }
            }
            strong {
              ${tw`text-off-white`};
              text-decoration: underline;
              text-decoration-color: #fdb13a;
            }
            h1, h2, h3 {
              ${tw`my-2 font-sans`};
            }
            h1 {
              ${tw`text-4xl md:text-5xl lg:text-xxl`};
            }
            h2 {
              ${tw`text-xl sm:text-2xl`};
            }
            h3 {
              ${tw`text-base md:text-xl lg:text-2xl`};
            }
          `}
        />

        <div
          css={css`
            ${tw`relative min-h-screen`};
            background-image: linear-gradient(
              109.6deg,
              rgba(36, 45, 57, 1) 11.2%,
              rgba(16, 37, 60, 1) 51.2%,
              rgba(0, 0, 0, 1) 98.6%
            );
          `}
        >
          <Navbar />
          {children}
          <Connect />
        </div>
      </>
    )}
  />
);
