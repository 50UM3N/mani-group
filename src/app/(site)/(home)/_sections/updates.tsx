"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import d7 from "@/app/_assets/disposable/d7.png";
import d8 from "@/app/_assets/disposable/d8.png";
import d9 from "@/app/_assets/disposable/d9.png";
import d10 from "@/app/_assets/disposable/d10.png";
import d11 from "@/app/_assets/disposable/d11.png";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
const data = [
	{
		title: "Mani Square Turns Fifteen",
		date: "March 2025",
		image: d7,
	},
	{
		title: "BAISAKHI BLAST 2025",
		date: "April 2025",
		image: d8,
	},
	{
		title: "KOLKATA MARRIOTT",
		date: "May 2025",
		image: d9,
	},
	{
		title: "BANGALORE MARRIOTT",
		date: "June 2025",
		image: d10,
	},
	{
		title: "MUMBAI MARRIOTT",
		date: "July 2025",
		image: d11,
	},
];

const Updates = () => {
	return (
		<section className="m-section relative">
			<div className="mani-title-wrapper">
				<h2 className="mani-title">MANI UPDATES</h2>
				<p className="text-center">
					Stay tuned to our latest news and notifications
				</p>
			</div>
			<div className="container">
				<Swiper
					className="lg:mb-20 mb-8"
					navigation={{
						nextEl: ".mani-update-next",
						prevEl: ".mani-update-prev",
					}}
					modules={[Navigation]}
					spaceBetween={12}
					slidesPerView={2}
					breakpoints={{
						1024: {
							spaceBetween: 32,
						},
					}}
				>
					{data.map((slide, index) => (
						<SwiperSlide key={index}>
							<ContentCard {...slide} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="w-full flex items-center justify-center gap-8">
					<button className="mani-update-prev flex items-center gap-2 font-semibold">
						<IconArrowLeft size={38} />
						<span>BACK</span>
					</button>
					<button className="mani-update-next flex items-center gap-2 font-semibold">
						<span>NEXT</span>
						<IconArrowRight size={38} />
					</button>
				</div>
			</div>
		</section>
	);
};

const ContentCard: React.FC<{ title: string; image: any; date: string }> = ({
	title,
	image,
	date,
}) => {
	return (
		<div>
			<Image
				src={image}
				alt={title}
				className="aspect-4/3 object-cover w-full mb-2"
			/>
			<p>{date}</p>
			<h3 className="font-semibold lg:text-3xl text-xl">{title}</h3>
		</div>
	);
};

export default Updates;
