import { PageDetails } from "../index.type";

export interface AchievementsPageInfo extends PageDetails {
	awards: AwardsInfo[];
	achievement: { title: string; figure: number }[];
}

export interface AwardsInfo extends PageDetails {
	vertical: string;
}
