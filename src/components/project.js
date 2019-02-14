import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import PropTypes from "prop-types";

const ProjectDiv = styled("div")`
  ${tw`w-auto md:w-1/2 h-auto px-2 mb-8`};
`;

const ProjectImg = styled("img")`
  ${tw`mb-2 w-auto h-auto`};
`;

const TitleStyle = styled("span")`
  ${tw`hover:text-grey-dark font-semibold text-lg`};
`;

const Project = ({ path, title, num }) => (
  <ProjectDiv>
    <ProjectImg
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
    />
    <Link to={path}>
      <TitleStyle
        css={css`
          @media (min-width: 383px) {
            font-size: 1.5rem;
          }
          @media (min-width: 576px) {
            font-size: 1.875rem;
          }
          @media (min-width: 768px) {
            font-size: 1.5rem;
          }
        `}
      >
        {title}
      </TitleStyle>
    </Link>
  </ProjectDiv>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};
