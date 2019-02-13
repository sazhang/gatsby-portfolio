import { React, Component } from "react";
import tw from "tailwind.macro";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Navicon from "./navicon";
import Navlink from "./navlinks";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";

// Responsive menu w/ animated hamburger icon
const Nav = styled("nav")`
  ${tw`flex items-center justify-between flex-wrap px-8 py-3 relative`};
`;

const openColor = css`
  background-color: #022446;
`;

const closeColor = css`
  background-color: #01172d;
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
  h3 {
    display: block;
    margin-right: 0 auto;
    font-size: 2.25rem;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
  }
`;

const Inline = css`
  h3 {
    display: inline-block;
    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }
  h3:last-child {
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
