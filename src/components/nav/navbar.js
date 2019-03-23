import { React, Component } from "react";
import { Link, navigate } from "gatsby";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import logo from "../../images/polyz.png";

// Responsive menu w/ animated hamburger icon
const Nav = styled.nav`
  ${tw`flex justify-between bg-indigo-dark py-4 mx-auto w-full xl:max-w-4xl`};
  div > a:nth-of-type(1) {
    ${tw`pr-4`};
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  handleClick(e) {
    e.preventDefault();
    navigate("/");
  }

  render() {
    return (
      <Nav>
        <div css={css`${tw`pl-24`};`}>
          <Link to="/">
            <strong>SZ</strong>
          </Link>
        </div>
        <div css={css`${tw`pr-24`};`}>
          <Link to="/">work</Link>
          <Link to="/about">about</Link>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
