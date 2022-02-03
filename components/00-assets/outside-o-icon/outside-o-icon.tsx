import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const OutsideOIcon = ({
  classes = '',
  fillColor = '',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    className={classes}
    viewBox="0 0 179 191"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M177.168 77.7251C169.308 35.2311 138.888 0.411743 89.8094 0.411743C33.2849 0.411743 0.703125 41.9263 0.703125 96.604C0.703125 149.717 36.2311 190.828 89.8094 190.828C140.853 190.828 174.815 153.653 178.737 103.681C178.737 103.681 178.919 94.9915 178.659 90.4972C178.379 86.215 177.878 81.9536 177.168 77.7251ZM94.7298 162.298C68.0286 162.489 51.7407 119.816 51.7407 82.2403C51.7407 60.6051 59.9801 27.7566 84.5222 27.7566C117.113 27.7566 127.908 80.4725 127.908 106.041C127.902 130.241 120.05 162.298 94.7298 162.298Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
