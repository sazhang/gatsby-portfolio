import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { Section, Container } from "../utils/globalstyles";
import Layout from "../components/layout";
import Project from "../components/project";
import About from "../components/about";
import Landing from "../components/landing";
import Layer from "../components/layer";

// Main page mx-5 sm:mx-8 lg:mx-16
const ProjectsWrapper = styled.div`
  ${tw`mx-auto m-2 sm:m-0`};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-gap: 2rem;
  }
`;

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <Layout pages={3.75}>
        <Layer offset={0} speed={0.4} factor={1}>
          <Landing />
        </Layer>
        <Layer offset={1} speed={0.4} factor={1.5}>
          <Section>
            <Container>
              <h1>Projects</h1>
              <ProjectsWrapper>
                {edges.map(({ node }) => (
                  <Project
                    key={node.id}
                    path={node.fields.slug}
                    title={node.frontmatter.title}
                    num={node.frontmatter.num}
                  />
                ))}
              </ProjectsWrapper>
            </Container>
          </Section>
        </Layer>
        <Layer offset={2.5} speed={0.4} factor={1}>
          <About />
        </Layer>
      </Layout>
    </>
  );
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
            num
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
