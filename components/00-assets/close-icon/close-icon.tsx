import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const CloseIcon = ({
  classes = '',
  fillColor = '',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
