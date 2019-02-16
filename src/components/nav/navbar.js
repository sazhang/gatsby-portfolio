import { React, Component } from "react";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Navicon from "./navicon";
import Links from "./links";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";
import NavOverlay from "./navoverlay"

// Responsive menu w/ animated hamburger icon
const Nav = styled("nav")`
  ${tw`flex items-center justify-between flex-wrap py-3 mx-5 sm:mx-8 lg:mx-16`};
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
`;

// Conditional rendering of navigation view
function NavView(props) {
  const isOpen = props.isOpen;
  if (isOpen) {
    return (
      <Overlay isOpen={isOpen}>
        <Content>
          <Links style={Block}/>
        </Content>
      </Overlay>
    );
  }
  return (
    <LinkDiv>
      <Links style={Inline}/>
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
