import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { AwardsInfo } from "@/types/api/achievements.type";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const slug = (await params)?.slug;
	const data: SEOData = await http(`/seo/award/${slug}`);
	return getMetadata(data);
}

const Page = async ({ params }: PageProps<{ slug: string }>) => {
	const slug = (await params)?.slug;
	const data: AwardsInfo = await http(`/page/award/by-slug/${slug}`);
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
		</>
	);
};

export default Page;
