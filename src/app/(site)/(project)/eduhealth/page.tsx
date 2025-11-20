import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import { EduHealthPageInfo } from "@/types/api/project.type";
import Timeline from "../_section/timeline";
import Statistic from "../_components/statistic";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/eduhealth`);
	return getMetadata(data);
}
const Page = async () => {
	const data: EduHealthPageInfo = await http(`/page/eduhealth`);
	return (
		<>
			<InnerBanner
				image={data.featured_image}
				title={data.title}
				description={data.sub_title}
			/>
			<section
				className="m-section"
				dangerouslySetInnerHTML={{ __html: data.content }}
			></section>
			<Statistic data={data.statistics} />
			<Timeline data={data.eduhealth} link="/eduhealth" />
		</>
	);
};

export default Page;
