import { React, Component } from "react";
import { Link, navigate } from "gatsby";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

// Responsive menu w/ animated hamburger icon
const Header = styled.header`
  ${tw`w-full fixed pin-t z-10 text-lg`};
`;

const Nav = styled.nav`
  ${tw`flex justify-between py-4 px-5`};
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
          <div>
            <Link to="/">
              <strong>SZ</strong>
            </Link>
          </div>
          <div>
            <Link to="/about">about</Link>
          </div>
        </Nav>
      </Header>
    );
  }
}

export default Navbar;
