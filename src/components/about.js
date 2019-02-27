import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { Section, Container } from "../utils/globalstyles";

// About me section
const About = () => (
  <Section>
    <Container
      css={css`
        p {
          ${tw`mx-auto max-w-xs sm:max-w-md px-2 sm:px-3 md:px-6 `};
        }
      `}
    >
      <p>
        Through my varied experiences from customer service to mental health
        nonprofit to police department to research labs, one thing has remained
        constant—
        <strong>a desire to make people's lives easier.</strong> Allured by the
        endless opportunities to enact change more directly at a larger scale
        through technology, I switched majors my junior year.
      </p>
      <p>
        I'm currently finishing my last semester as a computer science &amp;
        cognitive psychology major. In the meantime, you can find me binging
        podcasts, learning web dev, &amp; playing around in Adobe CC. Check out
        what I'm working on.
      </p>
    </Container>
  </Section>
);

export default About;
