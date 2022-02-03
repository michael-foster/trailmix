export type Author = {
  name: string;
  link?: string;
  title?: string;
};

export type Post = {
  source: string;
  imageSource: string;
  mediumThumbnailSource: string;
  title: string;
  section: string;
  sectionSource: string;
  authors: Author[];
  guestAuthor?: string;
  tags: string[];
  publicationDate: string;
  isSponsored?: boolean;
  isGiftGuide?: boolean;
  isEditorPick?: boolean;
  isActivePass?: boolean;
  isMarketing?: boolean;
  advertiserName?: string;
  description?: string;
  timeAgo?: string;
};
