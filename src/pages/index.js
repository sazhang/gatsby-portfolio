import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Layout from "../components/layout";

const Header = styled("h1")`
  ${tw`bg-grey-dark`};
`;

const ProjectHeader = styled("h3")`
  ${tw`bg-grey-dark hover:text-grey-dark`};
`;

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Header>Projects</Header>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <ProjectHeader>
              <span>{node.frontmatter.num} — </span> {node.frontmatter.title} 
              </ProjectHeader>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Header>About</Header>
      </div>
      <div>
        <Header>Let's connect</Header>
      </div>
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
`