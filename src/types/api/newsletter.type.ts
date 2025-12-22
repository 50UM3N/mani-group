import { PageDetails } from "../index.type";

export interface NewsletterPageInfo extends PageDetails {
	newsletters: NewsletterInfo[];
}

export interface NewsletterInfo extends PageDetails {
	url: string;
	issue: string;
}
