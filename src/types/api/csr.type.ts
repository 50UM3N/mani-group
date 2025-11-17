import { ImageMeta, PageDetails } from "../index.type";

export interface CSRPageInfo extends PageDetails {
	csr: CSRInfo[];
}

export interface CSRInfo {
	title: string;
	featured_image: ImageMeta;
	gallery: ImageMeta[];
}
