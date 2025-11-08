import { ImageMeta, PageDetails } from "../index.type";

export interface RicorrenzaPageInfo extends PageDetails {
  ricorrenzas: RicorrenzaInfo[];
}

export interface RicorrenzaInfo extends PageDetails {
  photo_gallery: ImageMeta[];
}
