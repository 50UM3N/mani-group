import Image from "next/image";
import HeroSlider from "./_sections/hero-section";
import ScrollSlider from "./_sections/scroll-slider";
import Verticals from "./_sections/verticals";
import d12 from "@/app/_assets/disposable/d12.png";
import { IconArrowRight, IconQuoteFilled } from "@tabler/icons-react";
import Awards from "./_sections/awards";
import Latest from "./_sections/latest";
import Updates from "./_sections/updates";
import ConnectForm from "./_sections/connect-form";
import React from "react";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import { getMetadata } from "@/app/_utils";
import { HomePageInfo } from "@/types/api/home.type";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/home`);
	return getMetadata(data);
}

const Page = async () => {
	const data: HomePageInfo = await http(`/page/home`);
	return (
		<main>
			<HeroSlider />
			<ScrollSlider />
			<Verticals />
			<section className="m-section">
				<div className="container">
					<div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-14 gap-8">
						<div className="col-span-1">
							<IconQuoteFilled className="size-12 text-color-3 mb-4" />
							<p className="text-2xl lg:mb-12 mb-6">
								Mani Group was founded with one core belief – of building homes
								for people who believe in quality. Over the last four decades,
								we have delivered more than 30 million sq. ft to more than 5000+
								families…
							</p>
							<p className="text-color-2 text-4xl">Sanjay Jhunjhunwala</p>
							<p className="font-bold text-2xl text-zinc-600 lg:mb-12 mb-6">
								CEO
							</p>
							<Link
								href="/about-us"
								className="flex items-center gap-2 font-semibold"
							>
								Know More <IconArrowRight />
							</Link>
						</div>
						<div className="col-span-1">
							<Image src={d12} alt="Disposable Image" className="" />
						</div>
					</div>
				</div>
			</section>
			<Awards data={data.award} />
			<Latest data={data.announcement} />
			<Updates data={data.news} />
			<ConnectForm />
		</main>
	);
};

export default Page;
