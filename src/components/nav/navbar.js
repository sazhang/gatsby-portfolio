import { React, Component } from "react";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Navicon from "./navicon";
import Links from "./links";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";
import { Transition, animated } from "react-spring/renderprops";
import NavOverlay from "./navoverlay";

// Responsive menu w/ animated hamburger icon - mx-5 sm:mx-8 lg:mx-16
const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap py-3`};
`;

const Overlay = styled(animated.div)`
  ${tw`h-full w-full fixed z-1 pin-t pin-l bg-black-dark overflow-hidden`};
  will-change: transform, opacity;
`;

const LinkDiv = styled.div`
  ${tw`hidden md:flex md:items-center w-full md:w-auto`};
`;

const Inline = css`
  a {
    ${tw`md:my-0 md:mx-2 inline-block`};
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
        {!this.state.show && (
          <LinkDiv>
            <Links style={Inline} />
          </LinkDiv>
        )}
        <Transition
          native
          items={this.state.show}
          from={{ height: "0%" }}
          enter={[{ height: "100%" }]}
          leave={{ height: "0%" }}
          config={{ tension: 8, friction: 4 }}
        >
          {show =>
            show &&
            (props => (
              <Overlay style={props}>
                <NavOverlay toggle={this.state.show} />
              </Overlay>
            ))
          }
        </Transition>
      </Nav>
    );
  }
}

export default Navbar;
