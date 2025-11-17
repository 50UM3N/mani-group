import { PageDetails } from "../index.type";

export interface ColleaguePageInfo extends PageDetails {
	colleague: ColleagueInfo[];
	colleague_types: {
		id: number;
		name: string;
		slug: string;
		count: number;
		description: string;
	}[];
}

export interface ColleagueInfo extends PageDetails {
	designation: string;
}
