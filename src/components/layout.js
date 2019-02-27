import React from "react";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import "typeface-montserrat";
import "typeface-lora";
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
              ${tw`w-full h-full p-0 m-0 text-off-white font-sans bg-muted-black overflow-x-hidden`};
            }
            a {
              ${tw`no-underline	cursor-pointer text-off-white hover:text-goldish`};
            }
            button {
              ${tw`cursor-pointer focus:outline-none font-sans border-none`};
            }
            p {
              ${tw`my-0 text-grey text-xs sm:text-base lg:text-lg leading-normal`};
              &:nth-of-type(even) {
                ${tw`mt-5`};
              }
            }
            strong {
              ${tw`text-off-white`};
              text-decoration: underline;
              text-decoration-color: #fdb13a;
            }
            h1 {
              ${tw`text-4xl sm:text-5xl lg:text-xxl my-0`};
            }
            h3 {
              ${tw`text-base sm:text-xl lg:text-2xl font-thin my-2`};
            }
            h4 {
              ${tw`text-sm lg:text-base font-serif font-normal italic my-2`};
            }
            h5 {
              ${tw`text-xs lg:text-base font-thin text-grey my-0`};
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
