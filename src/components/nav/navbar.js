import { React, Component } from "react";
import tw from "tailwind.macro";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Navicon from "./navicon";
import Navlink from "./navlinks";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";

// Responsive menu w/ animated hamburger icon
const Nav = styled("nav")`
  ${tw`flex items-center justify-between flex-wrap py-3 relative mx-6 sm:mx-10 md:mx-8 xl:mx-6`};
`;

const Overlay = styled.div`
  ${({ isOpen }) => (isOpen ? `height: 100%;` : `height: 0%;`)}
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
`;

const Content = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
`;

const LinkDiv = styled("div")`
  ${tw`hidden md:flex md:items-center w-full md:w-auto`};
`;

const Block = css`
  a {
    display: block;
    margin-right: 0 auto;
    font-size: 2.25rem;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
  }
`;

const Inline = css`
  a {
    display: inline-block;
    @media (min-width: 768px) {
      margin: 0 0.5rem;
    }
  }
  a:last-child {
    margin-right: 0;
  }
`;

// Conditional rendering of navigation view
function NavView(props) {
  const isOpen = props.isOpen;
  if (isOpen) {
    return (
      <Overlay isOpen={isOpen}>
        <Content>
          <div css={Block}>
            <Navlink link="/" name="Projects" />
            <Navlink link="/" name="About" />
            <Navlink link="/" name="Connect" />
            <Navlink link="/" name="Resume" />
          </div>
        </Content>
      </Overlay>
    );
  }
  return (
    <LinkDiv>
      <div css={Inline}>
        <Navlink link="/" name="Projects" />
        <Navlink link="/" name="About" />
        <Navlink link="/" name="Connect" />
        <Navlink link="/" name="Resume" />
      </div>
    </LinkDiv>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <Nav>
        <Navicon />
        <MenuBtnDiv>
          <div
            css={this.state.isOpen ? Close : Hamburger}
            onClick={() => this.toggle()}
          >
            <span />
            <span />
            <span />
          </div>
        </MenuBtnDiv>
        <NavView isOpen={this.state.isOpen} />
      </Nav>
    );
  }
}

export default Navbar;
