import { ImageMeta, PageDetails } from "../index.type";

export interface OurProgrammePageInfo extends PageDetails {
  our_programmes: {
    intake_capacity: string;
    title: string;
    image?: ImageMeta;
  }[];
}

export interface OurProgrammeInfo extends PageDetails {}
