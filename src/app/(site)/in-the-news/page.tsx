import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { NewsPageInfo } from "@/types/api/in-the-news.type";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bg2 from "@/app/_assets/bg/bg2.png";
import VerticalSelect from "@/app/_components/vertical-select";
import ContentCard from "@/app/_components/content-card";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/in-the-news`);
	return getMetadata(data);
}
const Page = async ({ searchParams }: PageProps<{ vertical: string }>) => {
	const vertical = (await searchParams)?.vertical;
	const url = vertical
		? `/page/in-the-news?vertical=${vertical}`
		: `/page/in-the-news`;
	const data: NewsPageInfo = await http(url);

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
			<section className="m-section">
				<div className="relative p-section ">
					<Image
						src={bg2}
						alt="Background"
						className="absolute top-0 left-0 w-full h-full object-cover -z-20"
					/>
					<div className="mani-title-wrapper flex items-center justify-between">
						<div className="">
							<h2 className="mani-title text-left">THE NEWS CORNER</h2>
							<p>News and Updates About Our Activities & Presence </p>
						</div>
						<VerticalSelect link="/in-the-news" />
					</div>

					<div className="container">
						<div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
							{data.news.map((item, index) => (
								<Link href={`/in-the-news/${item.slug}`} key={index}>
									<ContentCard data={item} />
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
