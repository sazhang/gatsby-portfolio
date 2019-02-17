import { React, Component } from "react";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Navicon from "./navicon";
import Links from "./links";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";
import { Transition, animated } from "react-spring/renderprops";
import BlockLinks from "./blocklinks"

// Responsive menu w/ animated hamburger icon - mx-5 sm:mx-8 lg:mx-16
const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap py-3`};
`;

const Overlay = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  will-change: transform, opacity;
`;

const LinkDiv = styled.div`
  ${tw`hidden md:flex md:items-center w-full md:w-auto`};
`;

const Inline = css`
  a {
    display: inline-block;
    @media (min-width: 768px) {
      margin: 0 0.5rem;
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <Nav>
        <Navicon />
        <MenuBtnDiv>
          <div css={this.state.show ? Close : Hamburger} onClick={this.toggle}>
            <span />
            <span />
            <span />
          </div>
        </MenuBtnDiv>
        <LinkDiv>
          <Links style={Inline} />
        </LinkDiv>
        <Transition
          native
          items={this.state.show}
          from={{ height: "0%" }}
          enter={[{ height: "100%" }]}
          leave={{ height: "0%" }}
          config={{ tension: 10, friction: 5 }}
        >
          {show =>
            show &&
            (props => (
              <Overlay style={props}>
                <BlockLinks toggle={this.state.show} />
              </Overlay>
            ))
          }
        </Transition>
      </Nav>
    );
  }
}

export default Navbar;
