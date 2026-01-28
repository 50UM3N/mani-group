"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { NewsInfo } from "@/types/api/in-the-news.type";
import ContentCard from "@/app/_components/content-card";
import { motion } from "framer-motion";

const Updates: React.FC<{ data: NewsInfo[] }> = ({ data }) => {
	return (
		<section className="m-section relative">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="mani-title-wrapper"
			>
				<h2 className="mani-title">MANI UPDATES</h2>
				<p className="text-center">
					Stay tuned to our latest news and notifications
				</p>
			</motion.div>
			<div className="container">
				<Swiper
					className="lg:mb-20 mb-8"
					navigation={{
						nextEl: ".mani-update-next",
						prevEl: ".mani-update-prev",
					}}
					modules={[Navigation]}
					spaceBetween={12}
					slidesPerView={1}
					breakpoints={{
						1024: {
							spaceBetween: 32,
							slidesPerView: 2,
						},
					}}
				>
					{data.map((slide, index) => (
						<SwiperSlide key={index}>
							<ContentCard data={slide} />
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

export default Updates;
