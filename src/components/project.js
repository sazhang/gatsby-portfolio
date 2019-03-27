import React from "react";
//import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import css from "@emotion/css";
import tw from "tailwind.macro";
import PropTypes from "prop-types";
import { HalfDiv, Row } from "../utils/globalstyles";
import { useSpring, animated } from "react-spring";

// View of project on main page
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20
];
const trans = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

function Project(props) {
  const [ani, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <Row className="row">
      <HalfDiv>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          onMouseLeave={() => set({ xy: [0, 0] })}
          style={{ transform: ani.xy.interpolate(trans) }}
        >
          <Img
            sizes={props.sizes}
            css={css`
              ${tw`shadow-lg`};
            `}
          />
        </animated.div>

        <a
          aria-label="link to live project"
          href={props.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{props.title}</h3>
        </a>
      </HalfDiv>
    </Row>
  );
}

export default Project;

Project.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  site: PropTypes.string.isRequired
};
