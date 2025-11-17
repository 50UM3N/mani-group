import Image from "next/image";
import React from "react";
import m2 from "@/app/_assets/mock/m2.png";
import { ImageMeta } from "@/types/index.type";
import { DateFormatter } from "@/lib/utils";

const ContentCard: React.FC<{
	data: {
		title: string;
		featured_image?: ImageMeta | null;
		created_at: string;
	};
}> = ({ data, ...rest }) => {
	return (
		<div {...rest}>
			<Image
				src={data.featured_image?.meta || m2}
				alt={data.title}
				className="aspect-4/3 object-cover w-full mb-2"
			/>
			<p>{DateFormatter.format1(data.created_at)}</p>
			<h3 className="font-semibold lg:text-3xl text-xl">{data.title}</h3>
		</div>
	);
};

export default ContentCard;
