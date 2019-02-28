import React from "react";
import { Link } from "gatsby";
import { useTrail, animated } from "react-spring";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { LinkStyle } from "../../utils/globalstyles";

// Links that appear in the nav overlay
const Block = css`
  ${tw`w-full relative text-center`};
  top: 10%;
`;

const Links = styled(animated.div)`
  ${tw`w-full relative`};
  height: 60px;
  line-height: 60px;
  a {
    ${tw`my-0 mx-auto text-4xl sm:text-5xl`};
    will-change: transform, opacity;
  }

  h3 {
    ${tw`pt-4`};
  }
`;

function Navlink(props) {
  return (
    <Link to={props.link} css={LinkStyle}>
      {props.name}
    </Link>
  );
}

const items = [
  <h3>WHAT IM WORKING ON</h3>,
  <Navlink link="/podfavs" name="podfavs" />,
  <Navlink link="/ufosights" name="ufo sightings" />,
  <Navlink link="/redesigns" name="app redesign" />,
  <h3>CHECK OUT MY</h3>,
  <a css={LinkStyle} href="/" target="_blank" rel="noopener noreferrer">resume</a>,
  <a css={LinkStyle} href="https://github.com/sazhang" target="_blank" rel="noopener noreferrer">github</a>,
  <h3>LET'S CONNECT</h3>,
  <a css={LinkStyle} href="mailto:zhang.sar@husky.neu.edu">email</a>,
  <a css={LinkStyle} href="https://www.linkedin.com/in/szhang96/" target="_blank" rel="noopener noreferrer">linkedin</a>,
  <a css={LinkStyle} href="https://twitter.com/szhangster" target="_blank" rel="noopener noreferrer">twitter</a>,
];

const config = { mass: 5, tension: 2000, friction: 200 };

function NavOverlay({ toggle }) {
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 60 : 0,
    delay: toggle ? 300 : 0,
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
