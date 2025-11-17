import InnerBanner from "@/app/_components/inner-banner";
import { Metadata } from "next";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { getMetadata } from "@/app/_utils";
import { TeamPageInfo } from "@/types/api/team.type";
import Content from "@/app/_components/content";
import Slider from "./_components/slider";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/team`);
	return getMetadata(data);
}
const Page = async () => {
	const data: TeamPageInfo = await http(`/page/team`);
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
			<Slider data={data.team} />
		</>
	);
};

export default Page;
