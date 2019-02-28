import { React, Component } from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Navicon from "./navicon";
import { MenuBtnDiv, Hamburger, Close } from "./menubtn";
import { Transition, animated } from "react-spring/renderprops";
import NavOverlay from "./navoverlay";

// Responsive menu w/ animated hamburger icon
const Nav = styled.nav`
  ${tw`flex fixed pin-t pin-l pin-r justify-center p-4`};
`;

const Container = styled.nav`
  ${tw`flex w-full items-center justify-between flex-wrap`};
`;

const Overlay = styled(animated.div)`
  ${tw`max-h-screen w-full fixed pin-t pin-l bg-muted-black`};
  will-change: transform, opacity;
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
        <Container>
          <div css={css`z-index: 40;`}>
            <Navicon />
          </div>

          <MenuBtnDiv>
            <div
              css={this.state.show ? Close : Hamburger}
              onClick={this.toggle}
            >
              <span />
              <span />
              <span />
            </div>
          </MenuBtnDiv>
        </Container>

        <Transition
          native
          items={this.state.show}
          from={{ height: "0%" }}
          enter={[{ height: "100%" }]}
          leave={{ height: "0%", delay: 650 }}
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