"use client";
import React from "react";
import m1 from "@/app/_assets/mock/m1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

const data = [1, 2, 3, 4];

const Timeline = () => {
	return (
		<section className="m-section">
			<div className="container">
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={24}
					slidesPerView={1.2}
					loop={true}
					navigation={{
						nextEl: ".mani-hero-next",
						prevEl: ".mani-hero-prev",
					}}
					className="h-full w-full"
				>
					{data.map((slide, index) => (
						<SwiperSlide key={index}>
							<div>
								<div>
									<Image src={m1} alt="image" className="aspect-[4/3]" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Timeline;
