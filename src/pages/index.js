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
import css from "@emotion/css";

// Main page
const TextSvg = styled.svg`
  ${tw`text-5xl font-extrabold font-sans w-full h-32`};
`;

const Text = styled.text`
  ${tw`text-off-white stroke-current`};
  stroke-linejoin: round;
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
            <TextSvg viewBox="0 0 150 75">
              <Text x="25%" y="50%" dominantBaseline="middle" textAnchor="middle">Hello</Text>
            </TextSvg>
            <h3>
              I'm Sarah, an aspiring full stack developer with a passion for UX
              design.
            </h3>
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
