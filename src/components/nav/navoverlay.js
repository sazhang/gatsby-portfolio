import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated } from "react-spring";
import Navlink from "./navlink";

const items = [
  <Navlink link="/" name="Projects" />,
  <Navlink link="/" name="About" />,
  <Navlink link="/" name="Connect" />,
  <Navlink link="/" name="Resume" />
];
const config = { mass: 5, tension: 2000, friction: 200 };

function NavOverlay() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <div>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default NavOverlay;
