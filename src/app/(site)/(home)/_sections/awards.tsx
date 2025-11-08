"use client";
import React from "react";
import d6 from "@/app/_assets/disposable/d6.png";
import Image from "next/image";
import {
	IconArrowLeft,
	IconArrowRight,
	IconAwardFilled,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const data = [
	{
		title: "ZeeMedia Education <br /> Excellence 2021",
		description: "Mani Square",
	},
	{
		title: "Zee24 Ghanta Education <br /> Excellence 2021",
		description: "Mani Square",
	},
	{
		title: "Zee24 Ghanta Education <br /> Excellence 2021",
		description: "Mani Square",
	},
	{
		title: "Certificate of <br /> Accreditation From NABH",
		description: "IQ City Medical",
	},
];
const Awards = () => {
	return (
		<section className="m-section p-section relative">
			<Image
				src={d6}
				alt="Awards Image"
				className="w-full h-full object-cover absolute top-0 left-0 -z-20"
			/>
			<div className="bg-black/60 absolute top-0 left-0 w-full h-full -z-10"></div>
			<div className="mani-title-wrapper">
				<h2 className="mani-title text-white">AWARDS</h2>
			</div>
			<div className="lg:container">
				<Swiper
					className="lg:mb-20 mb-8"
					navigation={{
						nextEl: ".mani-award-next",
						prevEl: ".mani-award-prev",
					}}
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={1.2}
					centeredSlides={true}
					breakpoints={{
						1024: {
							slidesPerView: 3,
							spaceBetween: 36,
							centeredSlides: false,
						},
					}}
				>
					{data.map((slide, index) => (
						<SwiperSlide key={index}>
							<AwardCard {...slide} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="w-full flex items-center justify-center gap-8 text-white">
					<button className="mani-award-prev flex items-center gap-2 font-semibold">
						<IconArrowLeft size={38} />
						<span>BACK</span>
					</button>
					<button className="mani-award-next flex items-center gap-2 font-semibold">
						<span>NEXT</span>
						<IconArrowRight size={38} />
					</button>
				</div>
			</div>
		</section>
	);
};

const AwardCard: React.FC<{ title: string; description: string }> = ({
	title,
	description,
	...rest
}) => {
	return (
		<div className="relative pt-10" {...rest}>
			<div className="text-white sm:p-12 p-8 bg-white/25 pt-16 rounded-xl backdrop-blur-sm text-xl font-semibold text-center space-y-4">
				<div className="bg-color-2 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 flex justify-center items-center size-20 rounded-full">
					<IconAwardFilled size={40} />
				</div>
				<p dangerouslySetInnerHTML={{ __html: title }}></p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Awards;
