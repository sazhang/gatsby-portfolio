import React from "react";
//import { Link } from "gatsby";
import Img from "gatsby-image";
//import styled from "@emotion/styled";
//import tw from "tailwind.macro";
import PropTypes from "prop-types";
import { HalfDiv, Row } from "../utils/globalstyles";

// View of project on main page
const Project = ({ path, title, cover, site }) => (
  <Row className="row">
    <HalfDiv>
      <Img fluid={cover} />
      <a
        aria-label="link to live project"
        href={site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
      </a>
    </HalfDiv>
  </Row>
);

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  site: PropTypes.string.isRequired
};
