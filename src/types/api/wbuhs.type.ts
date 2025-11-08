import { PageDetails } from "../index.type";

export interface WBUHSPageInfo extends PageDetails {
  steps: WBUHSSteps[];
}

export interface WBUHSSteps {
  link: string;
  title: string;
}
