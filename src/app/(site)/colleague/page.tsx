import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { ColleaguePageInfo } from "@/types/api/colleague.type";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bg2 from "@/app/_assets/bg/bg2.png";
import m2 from "@/app/_assets/mock/m2.png";
import ColleagueTypeSelect from "./_components/colleague-type-select";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/colleague`);
	return getMetadata(data);
}
const Page = async ({ searchParams }: PageProps<{ type: string }>) => {
	const type = (await searchParams)?.type;
	const url = type ? `/page/colleague?type=${type}` : `/page/colleague`;
	const data: ColleaguePageInfo = await http(url);
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
							<h2 className="mani-title text-left">PRESENT EMPLOYEES</h2>
							<p>Meet The Workforce That Makes Mani Shine</p>
						</div>
						<ColleagueTypeSelect defaultValue={type || ""}>
							{data.colleague_types.map((colleagueType, index) => (
								<option
									key={index}
									value={colleagueType.slug}
								>
									{colleagueType.name}
								</option>
							))}
						</ColleagueTypeSelect>
					</div>

					<div className="container">
						<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
							{data.colleague.map((item, index) => (
								<Link
									href={"/colleague/" + item.slug}
									key={index}
									className="relative overflow-hidden group cursor-pointer hover:shadow-2xs"
								>
									<Image
										src={item.featured_image?.meta || m2}
										alt={item.title}
										className="aspect-square object-cover w-full"
									/>
									<div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-12 bg-linear-to-t from-black/0 to-transparent transition group-hover:from-black/60">
										<p className="text-white p-2 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 delay-75">
											{item.title}
										</p>
									</div>
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
