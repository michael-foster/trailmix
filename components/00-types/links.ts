import { OnClickFunction } from './utility';

export declare type LinkConfig = {
  text?: string;
  href?: string;
  target: '_blank' | '_parent' | '_self' | '_top';
  onClick?: OnClickFunction;
  classes?: string;
};

// Makes href required
export type StrictLinkConfig = {
  href: string;
} & LinkConfig;
