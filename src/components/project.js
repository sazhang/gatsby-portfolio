import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import PropTypes from "prop-types";

// View of project on main page w-full md:w-1/2 px-2 bg-purple-darkest items-center justify-center
const ProjectCard = styled.div`
  ${tw`mx-auto`};
`;

const Img = styled.img`
  ${tw`mb-0 block h-full w-full max-w-sm md:max-w-full`};
`;

// hover:text-grey-dark
const Title = styled.h2`
  ${tw`mb-0`};
`;

const Project = ({ path, title, num }) => (
  <ProjectCard>
    <Img
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
    />
    {/* <Link to={path}> */}
    <Title>{title}</Title>
    {/* </Link> */}
  </ProjectCard>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};
