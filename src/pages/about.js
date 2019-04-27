import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Container } from "../utils/globalstyles";
import Layout from "../layouts/layout";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import GradientTitle from "../components/gradientTitle";

// About me section
const ParagraphDiv = styled.div`
  ${tw`w-full h-full lg:w-2/3 pt-4 px-4`};

  a {
    ${tw`underline`};
  }
`;

const BoldSpan = styled.span`
  ${tw`text-blush font-bold`};
`;

export default () => (
  <StaticQuery
    query={graphql`
      query FileQuery {
        file(name: { eq: "resume" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <Row
            css={css`
              justify-content: center;
              align-items: center;
            `}
          >
            <ParagraphDiv>
              <GradientTitle text="About." />
              <p>
                Through my varied experiences from customer service to mental
                health nonprofit to police department to research labs, one
                thing has remained constant—
                <BoldSpan>
                  a desire to make people's lives easier.
                </BoldSpan>{" "}
                Allured by the endless opportunities to enact change more
                directly at a larger scale through technology, I switched majors
                my junior year.
              </p>
              <p>
                I just graduated, and I'm moving to LA, seeking opportunities at
                the intersection of tech and design. In the meantime, you can
                find me binging podcasts, learning front end development, and
                playing around in Adobe XD. Check out my{" "}
                <a
                  href={data.file.publicURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>{" "}
                and side projects. You can also track my progress with
                #100daysofdesign on{" "}
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/sarahz.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>{" "}
                and #100daysofcode on{" "}
                <a
                  aria-label="twitter"
                  href="https://twitter.com/szhangster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                .
              </p>
            </ParagraphDiv>
          </Row>
        </Container>
      </Layout>
    )}
  />
);
