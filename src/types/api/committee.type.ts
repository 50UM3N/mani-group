import { PageDetails } from "../index.type";

export interface CommitteePageInfo extends PageDetails {
  committees: CommitteeInfo[];
}

export interface CommitteeInfo extends PageDetails {
  pdf: string;
}
