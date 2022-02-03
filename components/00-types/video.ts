import type { Image } from './images';

export type Playlist = {
  title?: string;
  link: string;
  duration?: number;
  images: Image[];
};

export type Video = {
  id: string;
  title: string;
  videoPlatform: string;
  videoPlatformId: string;
  playlist: Playlist;
  link?: string;
};
