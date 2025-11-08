import { ImageMeta, PageDetails } from "../index.type";

export interface InitiativePageInfo extends PageDetails {
  initiatives: InitiativeInfo[];
}

export interface InitiativeInfo extends PageDetails {
  gallery: ImageMeta[];
}
