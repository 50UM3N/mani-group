import { ImageMeta, PageDetails } from "../index.type";

export interface InfrastructurePageInfo extends PageDetails {
  infrastructures: InfrastructureInfo[];
}

export interface InfrastructureInfo extends PageDetails {
  gallery: ImageMeta[];
}
