import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import { Section, FullWDiv } from "../utils/globalstyles";

// Layout for each project case study
const Paragraph = css`
  p {
    margin: 0 auto;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Section>
        <h1>{post.frontmatter.title}</h1>
        <FullWDiv css={Paragraph} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Section>
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
