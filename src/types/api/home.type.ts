import { ImageMeta, PageDetails } from "../index.type";

export interface HomePageInfo extends PageDetails {
  banners: HomeBanner;
}

export type HomeBanner = {
  title: string;
  description: string;
  banners: ImageMeta[];
};
