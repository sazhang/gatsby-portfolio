import React from "react";
import { useTransition, animated } from "react-spring";

const PageTransition = props => {
  const transitions = useTransition([props], item => item.location.pathname, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, props: styles, key }) => (
    <animated.div key={key} style={{ ...styles, position: "relative" }}>
      {item.children}
    </animated.div>
  ));
};

export default PageTransition;
