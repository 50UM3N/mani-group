import { PageDetails } from "../index.type";

export interface PressCornerPageInfo extends PageDetails {
  press_corners: PressCornerInfo[];
}

export interface PressCornerInfo extends PageDetails {}
