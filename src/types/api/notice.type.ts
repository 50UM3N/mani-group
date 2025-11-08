import { PageDetails } from "../index.type";

export interface NoticeBoardPageInfo extends PageDetails {
  notice_boards: NoticeBoardInfo[];
}

export interface NoticeBoardInfo extends PageDetails {
  pdf: string;
  new: boolean;
}
