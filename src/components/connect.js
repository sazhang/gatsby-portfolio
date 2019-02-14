import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { SectionHeader, LinkStyle } from "../utils/globalstyles";

// Let's connect section
const ConnectDiv = styled("div")`
  ${tw`flex`};
`;

const InnerDiv = styled("div")`
  ${tw`flex-auto pr-2`};
`;

class Connect extends Component {
  render() {
    return (
      <div>
        <ConnectDiv>
          <InnerDiv>
            <SectionHeader>Let's connect.</SectionHeader>
          </InnerDiv>
        </ConnectDiv>
        <ConnectDiv>
          <InnerDiv>
            <LinkStyle href="mailto:zhang.sar@husky.neu.edu">email</LinkStyle>
          </InnerDiv>
          <InnerDiv>
            <LinkStyle href="https://www.linkedin.com/in/szhang96/">linkedin</LinkStyle>
          </InnerDiv>
          <InnerDiv>
            <LinkStyle href="https://github.com/sazhang">github</LinkStyle>
          </InnerDiv>
          <InnerDiv>
            <LinkStyle href="https://twitter.com/szhangster">twitter</LinkStyle>
          </InnerDiv>
        </ConnectDiv>
      </div>
    );
  }
}

export default Connect;
