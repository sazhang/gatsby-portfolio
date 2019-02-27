import React from "react";
import { useTransition, animated, config } from "react-spring";

const PageTransition = props => {
  const transitions = useTransition([props], item => item.location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    trail: 400
  });

  return transitions.map(({ item, props: styles, key }) => (
    <animated.div key={key} style={{ ...styles, position: "relative" }}>
      {item.children}
    </animated.div>
  ));
};

export default PageTransition;
