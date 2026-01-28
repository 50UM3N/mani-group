import { ImageMeta } from "../index.type";

export interface SiteSettingsInfo {
  floating_links: FloatingLinksInfo;
  quick_contact: QuickContactInfo[];
  social_links: SocialLinksInfo;
  logos?: { logo: ImageMeta; url: string }[];
  popup: PopupInfo;
  scrolling_text: ScrollingTextInfo[];
}

export interface FloatingLinksInfo {
  paramedical_prospectus: string;
  "mbbs_&_mdms_prospectus": string;
  build_your_career: string;
}

export interface QuickContactInfo {
  title: string;
  time: string;
  numbers: Number[];
}

export interface Number {
  number: string;
}

export interface SocialLinksInfo {
  facebook?: string;
  x?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
}

export interface PopupInfo {
  enable: boolean;
  contents: { image: ImageMeta; link: string }[];
}

export interface ScrollingTextInfo {
  label: string;
  link: string;
  is_new: boolean;
}
