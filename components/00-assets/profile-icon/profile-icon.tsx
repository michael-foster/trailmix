import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const ProfileIcon = ({
  classes = '',
  fillColor = 'currentColor',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M6.5625 8C4.37813 8 0 9.17 0 11.5V14H13.125V11.5C13.125 9.17 8.74687 8 6.5625 8ZM6.5625 6C7.30842 6 8.02379 5.68393 8.55124 5.12132C9.07868 4.55871 9.375 3.79565 9.375 3C9.375 2.20435 9.07868 1.44129 8.55124 0.87868C8.02379 0.316071 7.30842 0 6.5625 0C5.81658 0 5.10121 0.316071 4.57376 0.87868C4.04632 1.44129 3.75 2.20435 3.75 3C3.75 3.79565 4.04632 4.55871 4.57376 5.12132C5.10121 5.68393 5.81658 6 6.5625 6Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
