import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Layout from "../components/layout";
import { Section, Container } from "../utils/globalstyles";
import Img from "gatsby-image";

// Layout for each project case study
const Btn = styled.button`
  ${tw`text-grey text-xs bg-muted-black hover:bg-transparent hover:underline px-4 py-3 mx-1 md:mx-2`};
`;

function Button(props) {
  if (props.link) {
    return <Btn>{props.title}</Btn>;
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

  return (
    <Layout>
      <Section>
        <Container>
          <TopDiv>
            <TitleDiv>
              <h5>{post.frontmatter.category.toUpperCase()}</h5>
              <h1>{post.frontmatter.title}</h1>
              <h4>{post.frontmatter.descrip}</h4>

              <ButtonDiv>
                <Button link={post.frontmatter.site} title={"WEBSITE"} />
                <Button link={post.frontmatter.github} title={"CODE"} />
              </ButtonDiv>
            </TitleDiv>

            <ImgDiv>
              <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
            </ImgDiv>
          </TopDiv>

          <DescripDiv>
            <InnerDiv>
              <p dangerouslySetInnerHTML={{ __html: post.html }} />
            </InnerDiv>
          </DescripDiv>
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
