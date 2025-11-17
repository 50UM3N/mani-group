import { ImageMeta, PageDetails } from "../index.type";

export interface TeamPageInfo extends PageDetails {
	team: TeamInfo[];
}

export interface TeamInfo {
	image: ImageMeta;
	description: string;
	caption: string;
}
