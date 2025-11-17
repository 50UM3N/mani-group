import { PageDetails } from "../index.type";

export interface TestimonialPageInfo extends PageDetails {
	testimonial: TestimonialInfo[];
}

export interface TestimonialInfo extends PageDetails {
	designation: string;
}
