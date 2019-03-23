import React from "react";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import "typeface-montserrat";
import "typeface-lora";
import Navbar from "../components/nav/navbar";
import Connect from "../components/socials/connect";

// Overall layout -
const Body = styled.body`
  ${tw`flex w-full min-h-screen flex-col`};
`;

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
            html,
            body {
              ${tw`p-0 m-0 w-full bg-black text-off-white font-sans overflow-x-hidden`};
            }
            a {
              ${tw`no-underline	cursor-pointer text-off-white`};
              transition: 0.3s;
            }
            button {
              ${tw`cursor-pointer focus:outline-none font-sans border-none`};
              transition: 0.3s;
            }
            p {
              ${tw`my-0 text-grey text-xs sm:text-base lg:text-lg leading-normal`};
              &:nth-of-type(even) {
                ${tw`mt-5`};
              }
            }
            strong {
              ${tw`text-off-white`};
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
        <Body>
          <Navbar />
          <main
            css={css`
              flex: 1 0 auto;
            `}
          >
            <div
              css={css`
                ${tw`mx-auto bg-grey-darkest xl:max-w-4xl`};
              `}
            >
              <div
                css={css`
                  ${tw`sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32`};
                `}
              >
                {children}
              </div>
              <Connect />
            </div>
          </main>
        </Body>
      </>
    )}
  />
);
