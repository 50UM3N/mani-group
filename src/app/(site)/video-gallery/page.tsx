import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { VideoGalleryPageInfo } from "@/types/api/video-gallery";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Gallery from "./_components/gallery";
export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/video-gallery`);
	return getMetadata(data);
}
const Page = async () => {
	const data: VideoGalleryPageInfo = await http(`/page/video-gallery`);
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
					<Gallery data={data?.video || []} />
				</div>
			</div>
		</>
	);
};

export default Page;
