import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const CheckMarkIcon = ({
  classes = '',
  fillColor = '',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    className={classes}
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.94483 7.70578L0 9.69527L6.2069 16L20 1.98949L18.0552 0L6.2069 12.035L1.94483 7.70578Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
