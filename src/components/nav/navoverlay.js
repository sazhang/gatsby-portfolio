import React from "react";
import { useTrail, animated } from "react-spring";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Navlink from "./navlink";

// Links that appear in the nav overlay
const Block = css`
  ${tw`w-full relative text-center`};
  top: 25%;
`;

const Links = styled(animated.div)`
  ${tw`w-full relative`};
  height: 80px;
  line-height: 80px;
  a {
    ${tw`my-0 mx-auto text-4xl sm:text-5xl overflow-hidden`};
    will-change: transform, opacity;
  }
`;

const items = [
  <Navlink link="/" name="Projects" />,
  <Navlink link="/" name="About" />,
  <Navlink link="/" name="Connect" />,
  <Navlink link="/" name="Resume" />
];

const config = { mass: 5, tension: 2000, friction: 200 };

function NavOverlay({ toggle }) {
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    reverse: !toggle
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

export default NavOverlay;
