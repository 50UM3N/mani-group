import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import m1 from "@/app/_assets/mock/m1.png";
import Image from "next/image";
import { HospitalityPageInfo } from "@/types/api/project.type";
import Timeline from "../_section/timeline";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/hospitality`);
	return getMetadata(data);
}
const Page = async () => {
	const data: HospitalityPageInfo = await http(`/page/hospitality`);
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
			{data?.statistics && (
				<section className="m-section">
					<div className="container">
						<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
							{data?.statistics?.map((item, index) => (
								<div
									key={index}
									className="aspect-square relative flex items-center justify-center"
								>
									<Image
										src={m1}
										alt="Commercial Image"
										className="absolute inset-0 object-cover w-full h-full -z-20"
									/>
									<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
									<div className="text-white">
										<p className="font-semibold text-4xl text-center mb-2">
											{item.value}
										</p>
										<p className="font-bold text-lg text-center font-cormorant-garamond">
											{item.label}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}
			<Timeline data={data.hospitality} link="/hospitality" />
		</>
	);
};

export default Page;
