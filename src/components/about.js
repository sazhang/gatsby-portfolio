import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { Section, Viewport, FullWDiv } from "../utils/globalstyles";

// About me section
const RowDiv = styled.div`
  ${tw`flex flex-wrap`};
`;

const BoxDiv = styled.div`
  ${tw`h-auto w-full md:w-1/2 p-2 sm:p-4 bg-pink-darkest`};
`;

const aboutMe =
  "Through my varied experiences from customer service to mental " +
  "health nonprofit to police department to research labs, one " +
  "thing has remained constant—my desire to help others. Allured by " +
  "the endless opportunities to enact change more directly through " +
  "technology, I switched majors my junior year and am finishing my " +
  "last semester.";

const moreInfo =
  "In the meantime, you can find me binging podcasts, learning " +
  "front-end dev, and playing around in Adobe CC. I'm currently...";

class About extends Component {
  render() {
    return (
      <Viewport>
        <Section>
          <FullWDiv>
            <h1>Hi, I'm Sarah.</h1>
          </FullWDiv>
          <RowDiv
            css={css`
              flex-direction: row-reverse;
            `}
          >
            <BoxDiv>
              <p>{aboutMe}</p>
            </BoxDiv>
          </RowDiv>
          <RowDiv
            css={css`
              flex-direction: row;
            `}
          >
            <BoxDiv>
              <p>{moreInfo}</p>
              <ul>
                <li>learning: React &#38; Gatsby</li>
                <li>reading: Design of Everyday Things</li>
                <li>listening to: crime podcasts</li>
                <li>checking out: generative art</li>
              </ul>
            </BoxDiv>
          </RowDiv>
        </Section>
      </Viewport>
    );
  }
}

export default About;
