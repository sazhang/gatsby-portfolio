import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import Layout from "../layouts/layout";
import { Section, Container } from "../utils/globalstyles";
import Img from "gatsby-image";

// Layout for each project case study
const Btn = styled.button`
  ${tw`font-light text-grey text-xs bg-muted-black hover:bg-grey-darkest px-4 py-3 mx-1 md:mx-2`};
`;

function Button(props) {
  if (props.link) {
    return (
      <Btn>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </Btn>
    );
  }
  return null;
}

const TopDiv = styled.div`
  ${tw`flex flex-wrap-reverse items-end mt-24`};
`;

const TitleDiv = styled.div`
  ${tw`w-full pt-6 pl-3 sm:pt-0 sm:pl-0 sm:w-2/5 sm:text-right`};
`;

const ImgDiv = styled.div`
  ${tw`w-full sm:w-3/5 px-3 md:px-6`};
`;

const ButtonDiv = styled.div`
  ${tw`-mx-1 md:-mx-2 mt-3 sm:mt-6`};
`;

const DescripDiv = styled.div`
  ${tw`flex flex-wrap my-12 mx-3 sm:mx-6`};
`;

const InnerDiv = styled.div`
  ${tw`w-full`};
`;

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;
  const title = post.frontmatter.title;
  const url = "https://sarahzhang.co/" + post.frontmatter.path;
  const descrip = post.frontmatter.descrip;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={descrip} />
        <meta name="keywords" content={post.frontmatter.tags || []} />
        <meta name="author" content="Sarah Zhang" />
        <title>Sarah Zhang | {title}</title>
        <link rel="canonical" href={url} />
        <html lang="en" />
      </Helmet>

      <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />

      <h5>{post.frontmatter.category.toUpperCase()}</h5>
      <h1>{title}</h1>
      <h4>{descrip}</h4>

      <Button link={post.frontmatter.site} title={"WEBSITE"} />
      <Button link={post.frontmatter.github} title={"CODE"} />

      <p dangerouslySetInnerHTML={{ __html: post.html }} />
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
              cover: PropTypes.object.isRequired
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
            fluid(maxWidth: 1200) {
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
