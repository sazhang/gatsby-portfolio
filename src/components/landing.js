import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { Section, Container } from "../utils/globalstyles";
import { useSpring, animated } from "react-spring";
import { StaticQuery, graphql } from "gatsby";

// Landing section
// You can create keyframes for springs and trails
function Animation() {
  const props = useSpring({
    to: async next => {
      while (1) {
      await next({ opacity: 1, color: "#ffaaee" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
      }
    },
    from: { opacity: 0, color: "red" }
  });
  return <animated.div style={props}>I will fade in</animated.div>;
}

const ImgStyle = styled.div`
  ${tw`w-2/5`};
`;

const Landing = () => (
  <StaticQuery
    query={graphql`
      query {
        planet: file(relativePath: { eq: "mainplanet.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section
        css={css`
          ${tw`min-h-screen`}
        `}
      >
        <Container>
          <div
            css={css`
              ${tw`flex items-center`};
            `}
          >
            <div
              css={css`
                ${tw`w-3/5`};
              `}
            >
              <h1>Hey, I'm Sarah.</h1>
              <h3>creative developer + ux enthusiast</h3>
            </div>
            {/* <ImgStyle>
              <Img fluid={data.planet.childImageSharp.fluid} />
            </ImgStyle> */}

            <Animation />
          </div>
        </Container>
      </Section>
    )}
  />
);

export default Landing;
