import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import css from "@emotion/css";
import tw from "tailwind.macro";
import { Container, Row, HalfDiv } from "../utils/globalstyles";
import Layout from "../layouts/layout";
import Project from "../components/project";
import GradientTitle from "../components/gradientTitle";

// Main page
const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Sarah Zhang's portfolio website built using Gatsby"
        />
        <meta
          name="keywords"
          content="Sarah Zhang, portfolio, personal, Gatsby, React, Tailwind, Emotion"
        />
        <meta name="author" content="Sarah Zhang" />
        <title>Sarah Zhang | Portfolio</title>
        <link rel="canonical" href="https://sarahzhang.co/" />
        <html lang="en" />
      </Helmet>
      <Container
        css={css`
          .row:nth-of-type(even) {
            ${tw`justify-end`};
          }
        `}
      >
        <Row>
          <HalfDiv>
            <GradientTitle text="Hello." />
            <h3
              css={css`
                ${tw`font-normal text-pale-blue`};
              `}
            >
              I'm Sarah, and I'm rebuilding this website.
            </h3>
          </HalfDiv>
        </Row>
{/*         {edges.map(({ node }) => (
          <Project
            key={node.id}
            path={node.fields.slug}
            title={node.frontmatter.title}
            sizes={node.frontmatter.cover.childImageSharp.sizes}
            site={node.frontmatter.site}
          />
        ))} */}
      </Container>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              cover: PropTypes.object.isRequired,
              site: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___num] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1000 ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            site
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
