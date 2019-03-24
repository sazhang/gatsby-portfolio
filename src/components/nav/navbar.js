import { React, Component } from "react";
import { Link, navigate } from "gatsby";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import logo from "../../images/polyz.png";

// Responsive menu w/ animated hamburger icon
const Header = styled.header`
  ${tw`w-full max-w-2xl fixed pin-t z-10`};
`;

const Nav = styled.nav`
  ${tw`flex justify-between py-4`};
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
      <Header>
        <Nav>
          <div
            css={css`
              ${tw`pl-2 sm:pl-5`};
            `}
          >
            <Link to="/">
              <strong>SZ</strong>
            </Link>
          </div>
          <div
            css={css`
              ${tw`pr-2 sm:pr-5`};
            `}
          >
            <Link to="/about">SZ</Link>
          </div>
        </Nav>
      </Header>
    );
  }
}

export default Navbar;
