import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import tw from "tailwind.macro";
import Navbar from "./navbar";

// Overall layout
const bgColor = "#01172d";
const textColor = "#ced9f9";

const MainDiv = styled("div")`
  ${tw`container mx-auto px-8`};
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
            body {
              background-color: ${bgColor};
              color: ${textColor};
            };
            a {
              text-decoration: none;
              cursor: pointer;
              color: ${textColor};
            };
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
        <Navbar />
        <MainDiv>{children}</MainDiv>
      </div>
    )}
  />
);
