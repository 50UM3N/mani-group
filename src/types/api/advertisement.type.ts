import { PageDetails } from "../index.type";

export interface AdvertisementPageInfo extends PageDetails {
  advertisements: AdvertisementInfo[];
}

export interface AdvertisementInfo extends PageDetails {
  pdf: string;
}
