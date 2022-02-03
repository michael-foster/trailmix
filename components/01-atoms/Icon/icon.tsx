import React from "react";
import { StarIcon } from "../../00-assets/star-icon";
import { PlayIcon } from "../../00-assets/play-icon";
import { PlayButtonIcon } from "../../00-assets/play-button-icon";
import { CheckMarkIcon } from "../../00-assets/check-mark-icon";
import { ProfileIcon } from "../../00-assets/profile-icon";
import { LockIcon } from "../../00-assets/lock-icon";
import { LockShadowIcon } from "../../00-assets/lock-shadow-icon";
import { ChevronIcon } from "../../00-assets/chevron-icon";
import { ChevronIconFat } from "../../00-assets/chevron-icon-fat";
import { OutsideOIcon } from "../../00-assets/outside-o-icon";
import { CloseIcon } from "../../00-assets/close-icon";
import { InfoIcon } from "../../00-assets/info-icon";
import { RefreshIcon } from "../../00-assets/refresh-icon";

export type IconProps = {
  /** Fill color of the icon */
  color?: string;
  /** Size of the icon */
  size?:
    | "xsmall"
    | "small"
    | "small-plus"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  /** Type of icon */
  type:
    | "checkMark"
    | "chevron"
    | "chevronFat"
    | "close"
    | "info"
    | "lock"
    | "lockShadow"
    | "outsideO"
    | "play"
    | "playButton"
    | "profile"
    | "refresh"
    | "star";
  /** Additional classes to add to the icon component */
  classes?: string;
  /** Stroke color */
  strokeColor?: string;
  /** Stroke width */
  strokeWidth?: string;
};

const iconMap = {
  checkMark: CheckMarkIcon,
  chevron: ChevronIcon,
  chevronFat: ChevronIconFat,
  close: CloseIcon,
  info: InfoIcon,
  play: PlayIcon,
  playButton: PlayButtonIcon,
  profile: ProfileIcon,
  star: StarIcon,
  lock: LockIcon,
  lockShadow: LockShadowIcon,
  refresh: RefreshIcon,
  outsideO: OutsideOIcon,
};

export function Icon({
  color = "currentColor", // TODO - move this to a constants file or theme
  size,
  type,
  classes = "",
  strokeColor = "",
  strokeWidth = "",
}: IconProps) {
  const IconComponent = iconMap[type];

  return (
    <IconComponent
      classes={`${size ? `icon--${size}` : ""} ${classes}`.trim()}
      fillColor={color}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
    />
  );
}
