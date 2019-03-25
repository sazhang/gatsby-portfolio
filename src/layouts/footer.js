import React from "react";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Row } from "../utils/globalstyles";
import { Link } from "gatsby";

// Footer with nav links, social media links
const FooterDiv = styled.footer`
  ${tw`my-4 pr-5 flex-no-shrink`};
  a:nth-of-type(1) {
    ${tw`pr-4`};
  }
`;

const Footer = () => (
  <FooterDiv>
    <Row
      css={css`
        ${tw`justify-end`};
      `}
    >
      <div>
        <Link to="/">work</Link>
        <Link to="/about">about</Link>
      </div>
    </Row>
  </FooterDiv>
);

export default Footer;
