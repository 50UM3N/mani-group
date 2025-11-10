import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { PhotoGalleryPageInfo } from "@/types/api/photo-gallery";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import m2 from "@/app/_assets/mock/m2.png";
import Link from "next/link";
export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/photo-gallery`);
	return getMetadata(data);
}
const Page = async () => {
	const data: PhotoGalleryPageInfo = await http(`/page/photo-gallery`);
	return (
		<>
			<InnerBanner
				image={data.featured_image}
				title={data.title}
				description={data.sub_title}
			/>
			{data.content && (
				<section className="m-section">
					<div className="container">
						<Content dangerouslySetInnerHTML={{ __html: data.content }} />
					</div>
				</section>
			)}
			<div className="m-section">
				<div className="container">
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
						{data?.photo?.map((photo, index) => (
							<Link
								href={"/photo-gallery/" + photo.slug}
								key={index}
								className="relative overflow-hidden group cursor-pointer hover:shadow-2xs"
							>
								<Image
									src={photo.featured_image?.meta || m2}
									alt={photo.title}
									className="aspect-square object-cover w-full"
								/>
								<div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-12 bg-linear-to-t from-black/0 to-transparent transition group-hover:from-black/60">
									<p className="text-white p-2 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 delay-75">
										{photo.title}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
