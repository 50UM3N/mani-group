import { ImageMeta, PageDetails } from "../index.type";

export interface EventPageInfo extends PageDetails {
  events: EventInfo[];
}

export interface EventInfo extends PageDetails {
  gallery: ImageMeta[];
}
