import InnerBanner from "@/app/_components/inner-banner";
import { Metadata } from "next";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { getMetadata } from "@/app/_utils";
import { CSRPageInfo } from "@/types/api/csr.type";
import Content from "@/app/_components/content";
import Gallery from "./_components/gallery";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/csr`);
	return getMetadata(data);
}
const Page = async () => {
	const data: CSRPageInfo = await http(`/page/csr`);
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
			<Gallery data={data.csr} />
		</>
	);
};

export default Page;
