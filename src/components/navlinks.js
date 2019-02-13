import { React, Component } from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";

// Navbar links
const gradient = css`
  background-image: linear-gradient(to right, #2b5876, #4e4376);
  background-repeat: no-repeat;
  background-size: 100% 0;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`;

class Navlink extends Component {
  render() {
    return (
      <h3>
        <Link to={this.props.link}>
          <span css={gradient}>{this.props.name}</span>
        </Link>
      </h3>
    );
  }
}

export default Navlink;
