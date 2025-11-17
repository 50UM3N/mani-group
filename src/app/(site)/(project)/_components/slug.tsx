import InnerBanner from "@/app/_components/inner-banner";
import { cn } from "@/lib/utils";
import { ProjectInfo } from "@/types/api/project.type";
import { PageDetails } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "./slider";
import bg2 from "@/app/_assets/bg/bg2.png";
import m2 from "@/app/_assets/mock/m2.png";
import Content from "@/app/_components/content";

const Slug: React.FC<{ data: PageDetails & ProjectInfo }> = ({ data }) => {
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
			{data.location?.title && (
				<section className="m-section">
					<div className="container">
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<Image
								src={data?.location?.image?.meta || m2}
								alt={data.location.title}
								className="w-full lg:order-1"
							/>
							<div className="prose max-w-none text-black">
								<h1 className="uppercase">{data.location.title}</h1>
								<div
									dangerouslySetInnerHTML={{
										__html: data.location.description,
									}}
								/>
							</div>
						</div>
					</div>
				</section>
			)}

			{data?.amenities &&
				data?.amenities?.map((amenity, index) => (
					<section
						className={cn("m-section", {
							"p-section relative": index % 2 === 0,
						})}
						key={index}
					>
						{index % 2 === 0 && (
							<Image
								src={bg2}
								alt="Background"
								className="absolute top-0 left-0 w-full h-full object-cover -z-20"
							/>
						)}
						<div className="container">
							<div className="grid lg:grid-cols-2 gap-8 items-center">
								<Image
									src={amenity.image.meta}
									alt={amenity.title}
									className={cn("w-full", { "lg:order-1": index % 2 == 1 })}
								/>
								<div className="prose max-w-none text-black">
									<h1 className="uppercase">{amenity.title}</h1>
									<div
										dangerouslySetInnerHTML={{ __html: amenity.description }}
									/>
								</div>
							</div>
						</div>
					</section>
				))}
			{data.gallery && (
				<section className="m-section relative p-section">
					<Image
						src={bg2}
						alt="Background"
						className="absolute top-0 left-0 w-full h-full object-cover -z-20"
					/>
					<div className="mani-title-wrapper">
						<h2 className="mani-title">GALLERY</h2>
					</div>
					<div className="container">
						<Slider data={data.gallery} />
					</div>
				</section>
			)}

			{data.location.brochure && (
				<section className="m-section">
					<div className="flex justify-center items-center">
						<Link
							className="mani-button text-white bg-zinc-700"
							href={data.location.brochure}
							download
						>
							DOWNLOAD BROCHURE
						</Link>
					</div>
				</section>
			)}

			{data.location.google_map_embed && (
				<iframe
					src={data.location.google_map_embed}
					className="h-96 w-full"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			)}
		</>
	);
};

export default Slug;
