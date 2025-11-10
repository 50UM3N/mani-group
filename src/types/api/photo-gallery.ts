import { ImageMeta, PageDetails } from "../index.type";

export interface PhotoGalleryPageInfo extends PageDetails {
	photo: PhotoGalleryInfo[];
}

export interface PhotoGalleryInfo extends PageDetails {
	album: PhotoGalleryAlbumInfo[];
}

export interface PhotoGalleryAlbumInfo {
	title: string;
	thumbnail: ImageMeta;
	gallery: ImageMeta[];
}
