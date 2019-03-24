import React from "react";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Row, HalfDiv } from "../utils/globalstyles";
import { Link } from "gatsby";

// Footer with nav links, social media links
const FooterDiv = styled.footer`
  ${tw`px-10 sm:px-16 py-4`};
  ul {
    ${tw`list-reset pr-5 inline-block`};
  }
  ul > li:nth-of-type(1) {
    ${tw`pb-2`};
  }
`;

const Footer = () => (
  <FooterDiv>
    <Row>
      <HalfDiv>
        <ul>
          <li>
            <strong>Let's connect.</strong>
          </li>
          <li>&copy; Sarah Zhang, 2019</li>
        </ul>
      </HalfDiv>
      <HalfDiv>
        <div
          css={css`
            ${tw`flex w-full justify-start sm:justify-end`};
          `}
        >
          <ul>
            <li>
              <Link to="/">work</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a
                aria-label="github"
                href="https://github.com/sazhang"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/szhang96/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                aria-label="twitter"
                href="https://twitter.com/szhangster"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </li>
            <li>
              <a aria-label="email" href="mailto:zhang.sar@husky.neu.edu">
                email
              </a>
            </li>
          </ul>
        </div>
      </HalfDiv>
    </Row>
  </FooterDiv>
);

export default Footer;
