import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { Row, HalfDiv } from "../utils/globalstyles";
import Layout from "../components/layout";
import Project from "../components/project";
import About from "../components/about";

// Main page
const Wrapper = styled.div`
  ${tw`flex flex-wrap -mx-3 md:-mx-4 lg:-mx-6 my-12 sm:my-20 justify-center sm:justify-start z-1`};
  div:nth-of-type(even) {
    ${tw`sm:mt-20 sm:mb-5`};
  }
`;

const ProjectWrapper = styled.div`
  .row:nth-of-type(even) {
    ${tw`justify-end`};
  }
`;

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
      <ProjectWrapper>
        <Row>
          <HalfDiv>
            <h1>Hey I'm Sarah,</h1>
            <h3>an aspiring full stack dev w/ a passion for UX design.</h3>
          </HalfDiv>
        </Row>
        {edges.map(({ node }) => (
          <Project
            key={node.id}
            path={node.fields.slug}
            title={node.frontmatter.title}
            cover={node.frontmatter.cover.childImageSharp.fluid}
          />
        ))}
      </ProjectWrapper>
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
              cover: PropTypes.object.isRequired
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
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
