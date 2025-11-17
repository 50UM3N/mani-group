import Content from "@/app/_components/content";
import InnerBanner from "@/app/_components/inner-banner";
import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { AchievementsPageInfo } from "@/types/api/achievements.type";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import Image from "next/image";
import m1 from "@/app/_assets/mock/m1.png";
import bg2 from "@/app/_assets/bg/bg2.png";
import m2 from "@/app/_assets/mock/m2.png";
import Link from "next/link";
import { VERTICAL } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/award`);
	return getMetadata(data);
}
const Page = async ({ searchParams }: PageProps<{ vertical: string }>) => {
	const vertical = (await searchParams)?.vertical;
	const url = vertical ? `/page/award?vertical=${vertical}` : `/page/award`;
	const data: AchievementsPageInfo = await http(url);
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
				<div className="container">
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
						{data.achievement.map((item, index) => (
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
										{item.figure}
									</p>
									<p className="font-bold text-lg text-center">{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="m-section">
				<div className="relative p-section ">
					<Image
						src={bg2}
						alt="Background"
						className="absolute top-0 left-0 w-full h-full object-cover -z-20"
					/>
					<div className="mani-title-wrapper flex items-center justify-between">
						<div className="">
							<h2 className="mani-title text-left">AWARDS</h2>
							<p>Explore Our Achievements</p>
						</div>
						<select
							name="latestByMani"
							id="latestByMani"
							className="border-2 border-black px-4 py-2 min-w-28"
						>
							{VERTICAL.map((item, index) => (
								<option value={item.value} key={index}>
									{item.label}
								</option>
							))}
						</select>
					</div>

					<div className="container">
						<div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
							{data.awards.map((item, index) => (
								<Link href={`/achievement/${item.slug}`} key={index}>
									<Image
										src={item.featured_image?.meta || m2}
										alt={item.title}
										className="aspect-4/3 object-cover w-full mb-2"
									/>
									<h3 className="font-semibold text-xl">{item.title}</h3>
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
