import { ImageMeta, PageDetails, Statistics, TermInfo } from "../index.type";

export interface RetailPageInfo extends PageDetails {
	retail: { [year: string]: RetailInfo[] };
	statistics: Statistics[];
}

export interface RetailInfo extends PageDetails {
	mall_location: {
		location: string;
		google_map: string;
		contact: string;
		location_map_image: ImageMeta;
	};
	social_media: {
		name: string;
		link: string;
	}[];
	floor_details: FloorDetailInfo[];
	brand_category: TermInfo[];
	brand_tag: TermInfo[];
}

export interface FloorDetailInfo {
	name: string;
	brands: BrandInfo[];
	floor_plan: ImageMeta;
}

export interface BrandInfo extends PageDetails {
	brand_category: string[];
	brand_tag: string[];
}
export interface HospitalityPageInfo extends PageDetails {
	hospitality: { [year: string]: HospitalityInfo[] };
	upcoming: HospitalityInfo[];
	statistics: Statistics[];
}

export interface HospitalityInfo extends PageDetails, ProjectInfo {}

export interface EduHealthPageInfo extends PageDetails {
	eduhealth: { [year: string]: EduHealthInfo[] };
	upcoming: EduHealthInfo[];
	statistics: Statistics[];
}

export interface EduHealthInfo extends PageDetails, ProjectInfo {}

export interface CommercialPageInfo extends PageDetails {
	commercial: { [year: string]: CommercialInfo[] };
	upcoming: CommercialInfo[];
	statistics: Statistics[];
}

export interface CommercialInfo extends PageDetails, ProjectInfo {}

export interface ResidentialPageInfo extends PageDetails {
	residential: { [year: string]: ResidentialInfo[] };
	upcoming: ResidentialInfo[];
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
