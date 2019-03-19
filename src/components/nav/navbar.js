import { React, Component } from "react";
import { navigate } from "gatsby";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import logo from "../../images/polyz.png";
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

const IconBtn = styled.button`
  ${tw`h-8 w-8 items-center bg-transparent`};
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
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
        <Container>
          <IconBtn onClick={this.handleClick} aria-label="home" role="button" />
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
          leave={{ height: "0%", delay: 200 }}
          config={{ tension: 4, friction: 2 }}
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
