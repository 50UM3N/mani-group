import { ImageMeta, PageDetails } from "../index.type";

export interface CampusPageInfo extends PageDetails {
  campuses: CampusInfo[];
}

export interface CampusInfo extends PageDetails {
  gallery: ImageMeta[];
}
