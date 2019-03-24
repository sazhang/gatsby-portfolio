import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import PropTypes from "prop-types";
import { HalfDiv, Row } from "../utils/globalstyles";

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
  <Row className="row">
    <HalfDiv>
      <Link to={path}>
        <h2
          css={css`
            ${tw`absolute z-10 my-0`};
          `}
        >
          {title}
        </h2>
      </Link>
      <Img fluid={cover} />
    </HalfDiv>
  </Row>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired
};
