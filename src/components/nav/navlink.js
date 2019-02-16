import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Gradient, LinkStyle } from "../../utils/globalstyles";

// Navbar links
const Navlink = ({ link, name }) => (
  <Link to={link} css={LinkStyle}>
    <span css={Gradient}>{name}</span>
  </Link>
);

export default Navlink;

Navlink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
