// src/app/_components/HeroSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
	IconArrowLeft,
	IconArrowRight,
	IconArrowDown,
} from "@tabler/icons-react";
import d1 from "@/app/_assets/disposable/d1.jpg";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
const data = [
	{
		title: "SHAPING",
		subtitle: "BENGAL'S SKYLINE",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
	{
		title: "SHAPING 2",
		subtitle: "BENGAL'S SKYLINE 2",
		image: d1,
	},
];

const HeroSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="relative">
			<Swiper
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				modules={[Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				navigation={{
					nextEl: ".mani-hero-next",
					prevEl: ".mani-hero-prev",
				}}
				className="h-full w-full"
			>
				{data.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="lg:h-svh h-[600px] w-full flex justify-center items-center text-white">
							<Image
								src={slide.image}
								alt={slide.title}
								layout="fill"
								objectFit="cover"
							/>
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="relative z-10 text-center">
								<p className="sm:text-5xl text-3xl md:text-7xl">{slide.title}</p>
								<h1 className="sm:text-5xl text-3xl md:text-7xl mb-8">{slide.subtitle}</h1>
								<button className="mani-button">Know More</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="absolute text-white lg:bottom-16 bottom-8 left-1/2 -translate-x-1/2 z-10 lg:gap-16 gap-8 flex flex-col items-center justify-center">
				<div className="w-full flex items-center gap-8">
					<button className="mani-hero-prev flex items-center gap-2 font-semibold">
						<IconArrowLeft size={38} />
						<span>BACK</span>
					</button>
					<button className="mani-hero-next flex items-center gap-2 font-semibold">
						<span>NEXT</span>
						<IconArrowRight size={38} />
					</button>
				</div>
				<button className="animate-bounce hover:opacity-100 opacity-40">
					<IconArrowDown size={38} />
				</button>
			</div>
			<div className="absolute bottom-0 w-full flex justify-center z-20">
				{data?.map((_, index) => (
					<button
						key={index}
						className={cn("bg-white h-3 flex-1 opacity-0", {
							"opacity-100": index <= activeIndex,
						})}
					></button>
				))}
			</div>
		</div>
	);
};

export default HeroSlider;
