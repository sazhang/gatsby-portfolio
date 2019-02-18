import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import Navbar from "./nav/navbar";
import Connect from "./footer/connect";
import Background from "./background";

// Overall layout -
const MainDiv = styled("div")`
  ${tw`flex flex-col mx-auto overflow-hidden min-h-screen relative z-0 pb-32`};
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
      <div>
        <Global
          styles={css`
            html,
            body {
              ${tw`w-full h-full p-0 my-0 mx-auto bg-mainbgcolor text-maintxtcolor`};
            }
            a {
              ${tw`no-underline	cursor-pointer text-maintxtcolor`};
            }
            button {
              ${tw`no-underline	cursor-pointer border-none border-transparent bg-transparent focus:outline-none`};
            }
            p {
              ${tw`text-sm sm:text-base mx-auto my-2`};
            }
            h1 {
              ${tw`mb-4 text-4xl sm:text-5xl bg-blue-darker`};
            }
            ul {
              ${tw`mb-0`};
              li {
                ${tw`m-0`};
              }
            }
          `}
        />
        <MainDiv>
          <Navbar />
          <Background />
          {children}
          <Connect />
        </MainDiv>
      </div>
    )}
  />
);
