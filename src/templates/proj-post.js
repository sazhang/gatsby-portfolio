import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Layout from "../components/layout";
import { Section, Container } from "../utils/globalstyles";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

// Layout for each project case study
const Paragraph = css`
  p {
    margin: 0 auto;
  }
`;

const FullWDiv = styled.div`
  ${tw`w-full`}
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Parallax pages={1}>
        <ParallaxLayer offset={0} speed={0.2}>
          <h1>h</h1>
          <Section>
            <Container>
              <h1>{post.frontmatter.title}</h1>
              <FullWDiv
                css={Paragraph}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </Container>
          </Section>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
