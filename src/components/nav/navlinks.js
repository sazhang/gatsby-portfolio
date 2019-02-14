import { React, Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Gradient } from "../../utils/globalstyles";
import { LinkStyle } from "../../utils/globalstyles";

// Navbar links
const Navlink = ({ link, name }) => (
  <LinkStyle>
    <Link to={link}>
      <span css={Gradient}>{name}</span>
    </Link>
  </LinkStyle>
);

export default Navlink;

Navlink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
