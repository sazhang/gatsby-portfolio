import React from "react";
import PageTransition from "./pagetransition";

const wrapPageElement = ({ element, props }) => (
  <PageTransition {...props}>{element}</PageTransition>
);

export default wrapPageElement;
