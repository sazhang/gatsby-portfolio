import React from "react";
import { Link } from "gatsby";
import { useTrail, animated } from "react-spring";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { LinkStyle } from "../../utils/globalstyles";

// Links that appear in the nav overlay
const Block = css`
  ${tw`h-full w-full relative text-center pt-5`};
`;

const Links = styled(animated.div)`
  ${tw`relative leading-tight`};
  a {
    ${tw`my-0 mx-auto text-3xl sm:text-4xl md:text-5xl font-semibold hover:text-goldish`};
    will-change: transform, opacity;
  }
  h3 {
    ${tw`my-0 pt-6`};
  }
`;

function Navlink(props) {
  return (
    <Link to={props.link}>
      {props.name}
    </Link>
  );
}

const items = [
  <h3>HAVING FUN WITH</h3>,
  <Navlink link="/podfavs" name="podfavs" />,
  <Navlink link="/ufosights" name="ufo sightings" />,
  <Navlink link="/redesigns" name="app redesign" />,
  <h3>CHECK OUT MY</h3>,
  <a css={LinkStyle} href="/" target="_blank" rel="noopener noreferrer">resume</a>,
  <h3>LET'S CONNECT</h3>,
];

const config = { mass: 5, tension: 2000, friction: 200 };

function NavOverlay({ toggle }) {
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    delay: toggle ? 300 : 0,
    from: { opacity: 0, x: 20 },
    reverse: !toggle
  });

  return (
    <div css={Block}>
      {trail.map(({ x, ...rest }, index) => (
        <Links
          key={index}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          <animated.div>{items[index]}</animated.div>
        </Links>
      ))}
    </div>
  );
}

export default NavOverlay;
