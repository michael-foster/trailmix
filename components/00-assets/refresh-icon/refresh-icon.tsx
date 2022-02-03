import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const RefreshIcon = ({ classes = '', fillColor = '' }: SVG) => (
  <svg
    className={classes}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 20"
    role="img"
  >
    <path
      d="M8 4V0L3 5l5 5V6a6 6 0 1 1-6 6H0a8 8 0 1 0 8-8Z"
      fill={fillColor}
    />
  </svg>
);
