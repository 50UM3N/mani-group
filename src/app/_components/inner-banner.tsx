import { ImageMeta } from "@/types/index.type";
import React from "react";
import m1 from "@/app/_assets/mock/m1.png";
import Image from "next/image";

const InnerBanner: React.FC<{
	title?: string;
	description?: string;
	image?: ImageMeta;
}> = ({ title, image }) => {
	return (
		<div className="relative pt-[80]">
			<Image
				className="absolute top-0 left-0 w-full object-cover h-full -z-20"
				src={image?.meta || m1}
				alt={image?.alt || "Inner Banner"}
			/>
			<div className="absolute inset-0 bg-black opacity-65 -z-10"></div>
			<div className="container lg:py-32 py-20">
				<h1 className="relative z-10 uppercase text-center text-white lg:text-8xl text-4xl font-semibold">
					{title || "Inner Banner"}
				</h1>
			</div>
		</div>
	);
};

export default InnerBanner;
