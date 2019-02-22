import React from "react";
import PropTypes from "prop-types";
import Navlink from "./navlink";

// Navigation links
const Links = ({ style }) => (
  <div css={style}>
    <Navlink link="/#projects" name="Projects" />
    <Navlink link="/#about" name="About" />
    <Navlink link="/#connect" name="Connect" />
    <Navlink link="/" name="Resume" />
  </div>
);

export default Links;

Links.propTypes = {
  style: PropTypes.object.isRequired
};
