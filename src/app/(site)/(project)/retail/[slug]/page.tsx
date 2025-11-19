import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import { RetailInfo } from "@/types/api/project.type";
import InnerBanner from "@/app/_components/inner-banner";
import Content from "@/app/_components/content";
import Image from "next/image";
import m2 from "@/app/_assets/mock/m2.png";
import Brand from "./_components/brand";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const slug = (await params)?.slug;
	const data: SEOData = await http(`/seo/retail/${slug}`);
	return getMetadata(data);
}

const Page = async ({ params }: PageProps<{ slug: string }>) => {
	const slug = (await params)?.slug;
	const data: RetailInfo = await http(`/page/retail/by-slug/${slug}`);
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

			{data.mall_location?.location && (
				<section className="m-section">
					<div className="container">
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<Image
								src={data?.mall_location?.location_map_image?.meta || m2}
								alt={
									data.mall_location.location_map_image.alt || "Mall Location"
								}
								className="w-full lg:order-1"
							/>
							<div className="prose max-w-none text-black">
								<div
									dangerouslySetInnerHTML={{
										__html: data.mall_location.location,
									}}
								/>
							</div>
						</div>
					</div>
				</section>
			)}
			<Brand
				brandCategory={data.brand_category}
				brandTag={data.brand_tag}
				data={data.floor_details}
			/>
		</>
	);
};

export default Page;
