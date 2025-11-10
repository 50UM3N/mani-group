import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { LifeManiPageInfo } from "@/types/api/life-mani.type";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import bg2 from "@/app/_assets/bg/bg2.png";
import Form from "./_components/form";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/life-mani`);
	return getMetadata(data);
}
const Page = async () => {
	const data: LifeManiPageInfo = await http(`/page/life-mani`);
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

			<section className="m-section p-section relative">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="container">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
						<div className="">
							<div className="bg-zinc-700 text-white p-8">
								<h3 className="text-2xl mb-4">APPLY FOR A JOB</h3>
								<Form />
							</div>
						</div>
						<div className="space-y-8">
							<h2 className="text-3xl font-bold"> CURRENT OPENINGS</h2>

							{data.career.map((career, index) => (
								<div key={index}>
									<a href="" className="underline text-color-2">
										<h3 className="text-3xl font-semibold mb-2">
											{career.title}
										</h3>
									</a>
									<p className="text-zinc-600 text-lg mb-4">
										Location: {career.location}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
