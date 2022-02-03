import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const ChevronIconFat = ({
  classes = '',
  fillColor = '',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    className={classes}
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <path
      d="M12.355 0.354999L7 5.69833L1.645 0.354998L6.11959e-07 2L7 9L14 2L12.355 0.354999Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
