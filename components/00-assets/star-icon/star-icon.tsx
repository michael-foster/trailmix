import React from "react";
import { SVG } from "../../00-types";

export function StarIcon({
  classes = "",
  fillColor,
  strokeColor = "",
  strokeWidth = "",
}: SVG) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 516.06 515.61"
      role="img"
    >
      <path
        d="M258.03 37.328c-121.68 0-220.67 98.606-220.67 220.29s98.989 220.67 220.67 220.67 220.67-98.989 220.67-220.67-98.99-220.29-220.67-220.29zm0 22.603c109.31 0 197.68 88.369 197.68 197.68s-88.369 197.68-197.68 197.68-197.68-88.369-197.68-197.68 88.369-197.68 197.68-197.68zm0 6.896l-44.82 129.11-136.77 2.68 108.8 82.37-39.46 131.02 112.25-78.15 111.87 78.15-39.46-131.02 108.8-82.37-136.39-2.68-44.82-129.11z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
