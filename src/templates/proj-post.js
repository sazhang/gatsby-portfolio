import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import Layout from "../components/layout";
import { Section, Container } from "../utils/globalstyles";

// Layout for each project case study
const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Section
        css={css`
          min-height: 100vh;
        `}
      >
        <Container
          css={css`
            ${tw`bg-indigo-darkest`};
          `}
        >
          <h1>{post.frontmatter.title}</h1>
          <div
            css={css`
              ${tw`bg-pink-darkest`};
            `}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default ProjectPost;

ProjectPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              cover: PropTypes.object.isRequired,
            })
          })
        }).isRequired
      )
    })
  })
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        num
        cover {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        descrip
        tags
        site
        github
      }
    }
  }
`;
