import { PageDetails } from "../index.type";

export interface AlumniSpeakPageInfo extends PageDetails {
  alumni_speaks: AlumniSpeakInfo[];
}

export interface AlumniSpeakInfo extends PageDetails {}
