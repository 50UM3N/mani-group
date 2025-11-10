import { ImageMeta, PageDetails } from "../index.type";

export interface VideoGalleryPageInfo extends PageDetails {
	video: VideoGalleryInfo[];
}

export interface VideoGalleryInfo extends PageDetails {
	video: {
		thumbnail: ImageMeta;
		file: string;
	};
}
