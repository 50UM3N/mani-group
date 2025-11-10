import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { PhotoGalleryInfo } from "@/types/api/photo-gallery";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import React from "react";
import Gallery from "./_components/gallery";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const slug = (await params)?.slug;
	const data: SEOData = await http(`/seo/photo-gallery/${slug}`);
	return getMetadata(data);
}

const Page = async ({ params }: PageProps<{ slug: string }>) => {
	const slug = (await params)?.slug;
	const data: PhotoGalleryInfo = await http(
		`/page/photo-gallery/by-slug/${slug}`
	);
	return (
		<>
			<InnerBanner
				image={data.featured_image}
				title={data.title}
				description={data.sub_title}
			/>
			<section className="m-section">
				<div className="container">
					<Gallery data={data.album} />
				</div>
			</section>
		</>
	);
};

export default Page;
