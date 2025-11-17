import { ImageMeta, PageDetails, Statistics } from "../index.type";

export interface HospitalityPageInfo extends PageDetails {
	hospitality: { [year: string]: HospitalityInfo[] };
	statistics: Statistics[];
}

export interface HospitalityInfo extends PageDetails, ProjectInfo {}

export interface EduHealthPageInfo extends PageDetails {
	eduhealth: { [year: string]: EduHealthInfo[] };
	statistics: Statistics[];
}

export interface EduHealthInfo extends PageDetails, ProjectInfo {}

export interface CommercialPageInfo extends PageDetails {
	commercial: { [year: string]: CommercialInfo[] };
	statistics: Statistics[];
}

export interface CommercialInfo extends PageDetails, ProjectInfo {}

export interface ResidentialPageInfo extends PageDetails {
	residential: { [year: string]: ResidentialInfo[] };
	statistics: Statistics[];
}

export interface ResidentialInfo extends PageDetails, ProjectInfo {}

export interface ProjectInfo {
	delivery_date: string;
	status: string;
	link: string;
	location: {
		title: string;
		description: string;
		image: ImageMeta;
		google_map: string;
		google_map_embed: string;
		address: string;
		brochure: string;
		area: string;
	};
	amenities: {
		title: string;
		description: string;
		image: ImageMeta;
	}[];
	specifications: {
		title: string;
		description: string;
		image: ImageMeta;
	}[];
	gallery: ImageMeta[];
}
