import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const PlayIcon = ({
  classes,
  fillColor,
  strokeColor,
  strokeWidth
}: SVG) => (
  <svg
    className={classes}
    fill="none"
    role="img"
    viewBox="0 0 34 34"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 24L22 17L14 10L14 24Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
