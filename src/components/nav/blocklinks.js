import React from "react";
import { useTrail, animated } from "react-spring";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Navlink from "./navlink";

// Links that appear in the nav overlay
const Block = css`
  text-align: center;
  position: relative;
  top: 25%;
  width: 100%;
`;

const Links = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  a {
    margin: 0 auto;
    font-size: 2.25rem;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
    will-change: transform, opacity;
    overflow: hidden;
  }
`;

const items = [
  <Navlink link="/" name="Projects" />,
  <Navlink link="/" name="About" />,
  <Navlink link="/" name="Connect" />,
  <Navlink link="/" name="Resume" />
];

const config = { mass: 5, tension: 2000, friction: 200 };

function BlockLinks({ toggle }) {
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <div css={Block}>
      {trail.map(({ x, height, ...rest }, index) => (
        <Links
          key={index}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </Links>
      ))}
    </div>
  );
}

export default BlockLinks;
