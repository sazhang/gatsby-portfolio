import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { LinkStyle } from "../utils/globalstyles";

// Let's connect section
const FooterDiv = styled("div")`
  ${tw`w-full items-center justify-center absolute pin-b px-4`};
`;

const Footer = styled("div")`
  ${tw`flex flex-wrap my-4 -mr-4 bg-blue-darkest`};
`;

const Social = css`
  justify-content: center;
  a {
    margin-right: 1rem;
  }
`;

class Connect extends Component {
  render() {
    return (
      <FooterDiv>
        <Footer css={Social}>
          <a href="mailto:zhang.sar@husky.neu.edu" css={LinkStyle}>
            email
          </a>
          <a href="https://www.linkedin.com/in/szhang96/" css={LinkStyle}>
            linkedin
          </a>
          <a href="https://github.com/sazhang" css={LinkStyle}>
            github
          </a>
          <a href="https://twitter.com/szhangster" css={LinkStyle}>
            twitter
          </a>
          <a href="https://twitter.com/szhangster" css={LinkStyle}>
            instagram
          </a>
        </Footer>
      </FooterDiv>
    );
  }
}

export default Connect;
