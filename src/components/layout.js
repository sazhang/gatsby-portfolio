import React from "react";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import Background from "./background";
import Navbar from "../components/nav/navbar";
import Connect from "../components/footer/connect";
import Layer from "../components/layer";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

// Overall layout -
export default ({ children, pages }) => (
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
              ${tw`w-full h-full p-0 m-0 md:text-lg overflow-hidden text-off-white bg-sleek-black`};
            }
            a {
              ${tw`no-underline	cursor-pointer font-sans text-off-white`};
            }
            button {
              ${tw`no-underline	cursor-pointer border-none border-transparent bg-transparent focus:outline-none`};
            }
            p {
              ${tw`mx-auto my-2 font-sans`};
            }
            h1 {
              ${tw`my-4 text-4xl sm:text-5xl font-serif`};
            }
            ul {
              ${tw`mt-0 mb-2 font-sans`};
              li {
                ${tw`m-0`};
              }
            }
          `}
        />
        {/* <Background /> */}
        <Parallax pages={pages}>
          {children}
          <Layer offset={`${pages - 0.1}`} speed={0} factor={0.1}>
            <Connect />
          </Layer>
          <Layer offset={0} speed={0} factor={1}>
            <Navbar />
          </Layer>
        </Parallax>
      </>
    )}
  />
);
