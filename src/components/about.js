import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { Container, Section } from "../utils/globalstyles";
import { ParallaxLayer } from "react-spring/renderprops-addons";

// About me section
const RowDiv = styled.div`
  ${tw`flex flex-wrap`};
`;

const BoxDiv = styled.div`
  ${tw`px-4 py-4 h-auto w-full sm:w-3/4 md:w-3/5 lg:w-1/2`};
`;

// p-2 sm:p-4 md:p-6 text-sleek-black bg-light-grey
const InnerBox = styled.div`
  ${tw`w-full p-2 sm:p-4 md:p-6 justify-center items-center`};
`;

const moreInfo =
  "In the meantime, you can find me binging podcasts, learning " +
  "web development, and playing around in Adobe CC. I'm currently...";

const About = () => (
  <Section>
    <Container>
      <h1>Hi, I'm Sarah.</h1>
      <RowDiv
        css={css`
          flex-direction: row-reverse;
        `}
      >
        <BoxDiv>
          <InnerBox>
            <p>
              Through my varied experiences from customer service to mental
              health nonprofit to police department to research labs, one thing
              has remained constant—
              <strong>my desire to help others.</strong> Allured by the endless
              opportunities to enact change more directly through technology, I
              switched majors my junior year and am finishing my last semester.
            </p>
          </InnerBox>
        </BoxDiv>
      </RowDiv>
      <RowDiv
        css={css`
          flex-direction: row;
        `}
      >
        <BoxDiv>
          <InnerBox>
            <p>{moreInfo}</p>
            <ul>
              <li>
                learning - <strong>React &#38; Gatsby</strong>
              </li>
              <li>
                reading - <strong>Design of Everyday Things</strong>
              </li>
              <li>
                listening to - <strong>crime podcasts</strong>
              </li>
              <li>
                checking out - <strong>generative art</strong>
              </li>
            </ul>
          </InnerBox>
        </BoxDiv>
      </RowDiv>
    </Container>
  </Section>
);

export default About;
