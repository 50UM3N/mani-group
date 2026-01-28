"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import logo from "@/app/_assets/images/logo.png";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import m2 from "@/app/_assets/mock/m2.png";
import { AnnouncementInfo } from "@/types/api/announcement.type";
import { motion } from "framer-motion";

const Latest: React.FC<{ data: AnnouncementInfo[] }> = ({ data }) => {
	return (
		<section className="m-section relative">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="mani-title-wrapper"
			>
				<h2 className="mani-title">LATEST BY MANI</h2>
				<p className="text-center">
					Representing a Bespoke Collection of Mani{"'"}s Future
				</p>
			</motion.div>
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
								src={slide.featured_image?.meta || m2}
								alt={slide.title}
							/>
							<div className="absolute bottom-0 w-full left-0 p-8 bg-linear-to-b from-transparent to-black pt-16">
								<h3 className="text-white font-semibold lg:text-5xl sm:text-2xl text-lg mb-2">
									{slide.title}
								</h3>
								<div className="text-white font-semibold lg:text-3xl flex items-center gap-2">
									<span>BY</span>
									<Image
										className="w-auto lg:max-h-12 max-h-6"
										src={logo}
										alt="Logo"
									/>
								</div>
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
