import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { SectionHeader, Section, Viewport } from "../utils/globalstyles";
import Layout from "../components/layout";
import Project from "../components/project";
import About from "../components/about";
import Landing from "../components/landing";

// Main page
const Inner = styled("div")`
  ${tw`flex flex-wrap -mx-2 h-full`};
`;

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Landing />
      <Viewport>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <Inner>
            {edges.map(({ node }) => (
              <Project
                key={node.id}
                path={node.fields.slug}
                title={node.frontmatter.title}
                num={node.frontmatter.num}
              />
            ))}
          </Inner>
        </Section>
      </Viewport>
      <About />
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
