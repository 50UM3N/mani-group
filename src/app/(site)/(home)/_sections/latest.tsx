"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import d7 from "@/app/_assets/disposable/d7.png";
import d8 from "@/app/_assets/disposable/d8.png";
import d9 from "@/app/_assets/disposable/d9.png";
import d10 from "@/app/_assets/disposable/d10.png";
import d11 from "@/app/_assets/disposable/d11.png";
import logo from "@/app/_assets/images/logo.png";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
const data = [
	{
		title: "SILIGURI MARRIOTT",
		image: d7,
	},
	{
		title: "DURGAPUR MARRIOTT",
		image: d8,
	},
	{
		title: "KOLKATA MARRIOTT",
		image: d9,
	},
	{
		title: "BANGALORE MARRIOTT",
		image: d10,
	},
	{
		title: "MUMBAI MARRIOTT",
		image: d11,
	},
];

const Latest = () => {
	return (
		<section className="m-section relative">
			<div className="mani-title-wrapper">
				<h2 className="mani-title">LATEST BY MANI</h2>
				<p className="text-center">
					Representing a Bespoke Collection of Mani’s Future
				</p>
			</div>
			<Swiper
				className="lg:mb-20 mb-8"
				navigation={{
					nextEl: ".mani-letest-next",
					prevEl: ".mani-letest-prev",
				}}
				modules={[Navigation]}
				spaceBetween={12}
				slidesPerView={1.3}
				initialSlide={1}
				centeredSlides={true}
        breakpoints={{
						1024: {
							spaceBetween: 60,
						},
					}}
			>
				{data.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="relative">
							<Image
								className="aspect-video object-cover w-full"
								src={slide.image}
								alt={slide.title}
							/>
              <div className="absolute bottom-0 w-full left-0 p-8 bg-linear-to-b from-transparent to-black pt-16">
                <h3 className="text-white font-semibold lg:text-5xl sm:text-2xl text-lg mb-2">{slide.title}</h3>
                <div className="text-white font-semibold lg:text-3xl flex items-center gap-2"><span>BY</span><Image className="w-auto lg:max-h-12 max-h-6" src={logo} alt="Logo" /></div>
              </div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="w-full flex items-center justify-center gap-8">
				<button className="mani-letest-prev flex items-center gap-2 font-semibold">
					<IconArrowLeft size={38} />
					<span>BACK</span>
				</button>
				<button className="mani-letest-next flex items-center gap-2 font-semibold">
					<span>NEXT</span>
					<IconArrowRight size={38} />
				</button>
			</div>
		</section>
	);
};

export default Latest;
