import React from 'react';
import { SVG } from '@outside-interactive/web-microfrontends.helpers.types';

export const ChevronIcon = ({
  classes = '',
  fillColor = '',
  strokeColor = '',
  strokeWidth = ''
}: SVG) => (
  <svg
    className={classes}
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <path
      d="M11.0881 10.8252L11.2619 10.6496L11.0883 10.4738L1.56405 0.82438L1.38636 0.64436L1.20843 0.82414L0.822311 1.21428L0.648262 1.39014L0.822311 1.566L9.81216 10.6494L0.822311 19.7327L0.642156 19.9148L0.828479 20.0905L1.2146 20.4546L1.39214 20.622L1.56381 20.4486L11.0881 10.8252Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);
