import React from "react";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import "typeface-montserrat";
import "typeface-lora";
import Navbar from "../components/nav/navbar";
import Connect from "../components/socials/connect";
import Footer from "../components/footer";

// Overall layout -
const Body = styled.body`
  ${tw`flex w-full min-h-screen flex-col max-w-2xl mx-auto`};
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
              ${tw`p-0 m-0 w-full bg-muted-black text-off-white font-sans overflow-x-hidden`};
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
            h1 {
              ${tw`text-xxl my-0`};
            }
            h3 {
              ${tw`text-base sm:text-xl lg:text-2xl font-thin my-0`};
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
              z-index: 0;
              padding-top: 6rem;
            `}
          >
            <div
              css={css`
                ${tw``}; //bg-grey-darkest
              `}
            >
              <div
                css={css`
                  ${tw`px-8 sm:px-16`};
                `}
              >
                {children}
              </div>
            </div>
            <Connect />
          </main>
          <Footer />
        </Body>
      </>
    )}
  />
);
