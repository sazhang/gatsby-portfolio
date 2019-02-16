import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { SectionHeader, Section, Viewport, FullWDiv } from "../utils/globalstyles";

// About section
const MsgDiv = styled("div")`
  ${tw`w-full h-auto sm:w-1/2 mx-auto p-2 sm:p-4 bg-pink-darkest`};
`;

const Blurb = styled("p")`
  ${tw`text-sm sm:text-base my-0`};
`;

class About extends Component {
  render() {
    return (
      <Viewport>
        <Section>
          <FullWDiv>
            <SectionHeader>Hi, I'm Sarah.</SectionHeader>
          </FullWDiv>
          <MsgDiv>
            <Blurb>
              Through my varied experiences from customer service to mental
              health nonprofit to police department to research labs, one thing
              has remained constant—my desire to help others. Allured by the
              endless opportunities to enact change more directly through
              technology, I switched majors my junior year and am currently
              finishing my last semester. In the meantime, you can find me
              binging podcasts, learning front-end dev, and playing around in
              Adobe CC.
            </Blurb>
          </MsgDiv>
          <MsgDiv>
            <Blurb>
              Currently..
            </Blurb>
          </MsgDiv>
        </Section>
      </Viewport>
    );
  }
}

export default About;
