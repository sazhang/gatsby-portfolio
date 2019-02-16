import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import { bgColor, textColor } from "../utils/globalstyles";
import Connect from "../components/connect";

// Overall layout
const MainDiv = styled("div")`
  ${tw`flex flex-col mx-auto overflow-hidden min-h-screen relative pb-20`};
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
    render={data => (
      <div>
        <Global
          styles={css`
            html,
            body {
              background-color: ${bgColor};
              color: ${textColor};
              width: 100%;
              height: 100%;
              margin: 0 auto;
              padding: 0;
            }
            a {
              text-decoration: none;
              cursor: pointer;
              color: ${textColor};
            }
            button {
              cursor: pointer;
              background: none;
              border: none;
              border-color: transparent;
              text-decoration: none;
              &:focus {
                outline: 0;
              }
            }
          `}
        />
        <MainDiv>
          {children}
          <Connect />
        </MainDiv>
      </div>
    )}
  />
);
