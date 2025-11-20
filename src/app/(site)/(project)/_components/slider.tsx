"use client";
import { ImageMeta } from "@/types/index.type";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React, { useId } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgVdeo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
const Slider: React.FC<{ data: ImageMeta[] }> = ({ data }) => {
	const id = useId();
	if (!data) return null;
	return (
		<>
			<Swiper
				className="lg:mb-20 mb-8"
				navigation={{
					nextEl: `.${id}-next`,
					prevEl: `.${id}-prev`,
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
						<LightGallery plugins={[lgZoom, lgVdeo]} speed={500}>
							<a
								data-src={slide.meta.src}
								href={slide.meta.src}
								className="relative block w-full"
							>
								<Image src={slide.meta} alt={slide.alt} className="w-full" />
							</a>
						</LightGallery>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="w-full flex items-center justify-center gap-8">
				<button className={`${id}-prev flex items-center gap-2 font-semibold`}>
					<IconArrowLeft size={38} />
					<span>BACK</span>
				</button>
				<button className={`${id}-next flex items-center gap-2 font-semibold`}>
					<span>NEXT</span>
					<IconArrowRight size={38} />
				</button>
			</div>
		</>
	);
};

export default Slider;
