import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bg2 from "@/app/_assets/bg/bg2.png";
import VerticalSelect from "@/app/_components/vertical-select";
import ContentCard from "@/app/_components/content-card";
import { AnnouncementPageInfo } from "@/types/api/announcement.type";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/announcement`);
	return getMetadata(data);
}
const Page = async ({ searchParams }: PageProps<{ vertical: string }>) => {
	const vertical = (await searchParams)?.vertical;
	const url = vertical
		? `/page/announcement?vertical=${vertical}`
		: `/page/announcement`;
	const data: AnnouncementPageInfo = await http(url);

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
							<h2 className="mani-title text-left">THE ANNOUNCEMENTS</h2>
							<p>News and Updates About Our Activities & Presence </p>
						</div>
						<VerticalSelect link="/announcement" />
					</div>

					<div className="container">
						<div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
							{data.announcement.map((item, index) => (
								<Link href={`/announcement/${item.slug}`} key={index}>
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
