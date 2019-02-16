import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import Navlink from "./navlink";

const Links = ({ style }) => (
  <div css={style}>
    <Navlink link="/" name="Projects" />
    <Navlink link="/" name="About" />
    <Navlink link="/" name="Connect" />
    <Navlink link="/" name="Resume" />
  </div>
);

export default Links;

Links.propTypes = {
  style: PropTypes.object.isRequired
};
