import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { SectionHeader, Section, Footer, AboutSec } from "../utils/globalstyles";
import Layout from "../components/layout";
import Project from "../components/project";
import Connect from "../components/connect";
import About from "../components/about";

// Main page
const ProjectSec = styled("div")`
  ${tw`flex flex-wrap -mx-2 h-auto`};
`;

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Section>
        <div>
          <SectionHeader>Projects</SectionHeader>
          <ProjectSec>
            {edges.map(({ node }) => (
              <Project
                key={node.id}
                path={node.fields.slug}
                title={node.frontmatter.title}
                num={node.frontmatter.num}
              />
            ))}
          </ProjectSec>
        </div>
      </Section>
      <AboutSec>
        <About />
      </AboutSec>
      <Footer>
        <Connect />
      </Footer>
    </Layout>
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
