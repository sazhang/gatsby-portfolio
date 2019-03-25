import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Container } from "../utils/globalstyles";
import Layout from "../layouts/layout";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// About me section
const ParagraphDiv = styled.div`
  ${tw`w-full h-full lg:w-2/3 pt-4 px-4`};
`;

const BoldSpan = styled.span`
  ${tw`text-off-white font-bold`};
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
                I'm currently finishing my last semester as a computer science
                &amp; cognitive psychology major. In the meantime, you can find
                me binging podcasts, learning web dev, &amp; playing around in
                Adobe CC. Check out my{" "}
                <a
                  href={data.file.publicURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={css`
                    ${tw`underline`};
                  `}
                >
                  resume
                </a>{" "}
                and side projects.
              </p>
            </ParagraphDiv>
          </Row>
        </Container>
      </Layout>
    )}
  />
);
