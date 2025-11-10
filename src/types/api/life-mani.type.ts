import { PageDetails } from "../index.type";

export interface LifeManiPageInfo extends PageDetails {
	career: CareerInfo[];
}

export interface CareerInfo {
	title: string;
	location: string;
	pdf: string;
}
