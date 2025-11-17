import { PageDetails } from "../index.type";

export interface NewsPageInfo extends PageDetails {
	news: NewsInfo[];
}

export interface NewsInfo extends PageDetails {}
