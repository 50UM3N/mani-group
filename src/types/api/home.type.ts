import { ImageMeta, PageDetails } from "../index.type";
import { AwardsInfo } from "./achievements.type";
import { AnnouncementInfo } from "./announcement.type";
import { NewsInfo } from "./in-the-news.type";

export interface HomePageInfo extends PageDetails {
	banners: HomeBanner;
	announcement: AnnouncementInfo[];
	news: NewsInfo[];
	award: AwardsInfo[];
	sliders: Slider[];
}

export type HomeBanner = {
	title: string;
	description: string;
	banners: ImageMeta[];
};

export interface Slider {
	image: ImageMeta;
	title: string;
	description: string;
	button?: {
		label?: string;
		url?: string;
	};
}
