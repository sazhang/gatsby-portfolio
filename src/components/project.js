import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import PropTypes from "prop-types";

const ProjectDiv = styled("div")`
  ${tw`w-full md:w-1/2 px-2 mb-8`};
`;

const Img = styled("img")`
  ${tw`mb-2 w-auto h-auto`};
`;

const TitleStyle = styled("span")`
  ${tw`hover:text-grey-dark font-semibold text-lg sm:text-2xl md:text-xl lg:text-2xl`};
`;

const Project = ({ path, title, num }) => (
  <ProjectDiv>
    <Img
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
    />
    <Link to={path}>
      <TitleStyle>{title}</TitleStyle>
    </Link>
  </ProjectDiv>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};
