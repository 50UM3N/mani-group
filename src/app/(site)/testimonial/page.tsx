import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { TestimonialPageInfo } from "@/types/api/testimonial.type";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bg2 from "@/app/_assets/bg/bg2.png";
import VerticalSelect from "@/app/_components/vertical-select";
import { IconQuoteFilled } from "@tabler/icons-react";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/testimonial`);
	return getMetadata(data);
}
const Page = async ({ searchParams }: PageProps<{ vertical: string }>) => {
	const vertical = (await searchParams)?.vertical;
	const url = vertical
		? `/page/testimonial?vertical=${vertical}`
		: `/page/testimonial`;
	const data: TestimonialPageInfo = await http(url);

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
							<h2 className="mani-title text-left">CUSTOMER VOICES</h2>
							<p>
								Its Their Voice That Drives Mani To Be Excellent At Every
								Corner.
							</p>
						</div>
						<VerticalSelect />
					</div>

					<div className="container">
						<div className="grid grid-cols-1 gap-8">
							{data.testimonial.map((item, index) => (
								<Link
									href={`/testimonial/${item.slug}`}
									key={index}
									className="bg-white sm:text-2xl block sm:p-12 p-4"
								>
									<IconQuoteFilled className="text-color-3" size={70} />
									<p className="mb-6">{item.content}</p>
									<p className="font-semibold">{item.title}</p>
									<p>{item.designation}</p>
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
