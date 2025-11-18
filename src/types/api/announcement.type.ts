import { PageDetails } from "../index.type";

export interface AnnouncementPageInfo extends PageDetails {
	announcement: AnnouncementInfo[];
}

export interface AnnouncementInfo extends PageDetails {}
