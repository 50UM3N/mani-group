import { PageDetails } from "../index.type";

export interface ContactUsPageInfo extends PageDetails {
  help_numbers: HelpNumbersInfo[];
}

export interface HelpNumbersInfo {
  title: string;
  description: string;
  emails?: { email?: string }[];
  phones?: { phone?: string }[];
  addresses?: { address?: string; google_map_url?: string }[];
}
