import React from "react";
import { css, keyframes } from '@emotion/core';

const bgChange = keyframes`
  0% { 
    background-position: 0% 50% 
  }
  50% { 
    background-position: 100% 50% 
  }
  100% { 
    background-position: 0% 50% 
  }
`;

export default props => (
  <h1
    css={css`
      background: #fc00ff;
      background: -webkit-linear-gradient(to right, #fc00ff, #00dbde);
      background: linear-gradient(to right, #fc00ff, #00dbde);
      background-size: 200% 200%;

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      animation: ${bgChange} 25s ease infinite;
    `}
  >
    {props.text}
  </h1>
);
