import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import PropTypes from "prop-types";

// View of project on main page
const ImgStyle = styled.div`
  ${tw`w-full mb-6 px-3 md:px-4 lg:px-6`};
  @media (min-width: 425px) {
    ${tw`w-5/6 sm:w-1/2`};
  }
  a {
    ${tw`hover:text-goldish`};
  }
`;

const Project = ({ path, title, cover }) => (
  <ImgStyle>
    <Img fluid={cover}/>
    <Link to={path}>
      <h2>{title}</h2>
    </Link>
  </ImgStyle>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired
};
