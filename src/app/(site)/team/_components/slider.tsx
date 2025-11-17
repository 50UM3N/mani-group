"use client";
import React, { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import bg2 from "@/app/_assets/bg/bg2.png";
import { TeamInfo } from "@/types/api/team.type";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Slider: React.FC<{ data: TeamInfo[] }> = ({ data, ...rest }) => {
	const id = useId();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="m-section" {...rest}>
			<div className="relative p-section ">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="mani-title-wrapper flex items-center justify-between">
					<div className="">
						<h2 className="mani-title text-left">
							{data[activeIndex]?.caption}
						</h2>
						<p>{data[activeIndex]?.description}</p>
					</div>
				</div>
				<div className="container">
					<Swiper
						onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
						className="lg:mb-20 mb-8"
						navigation={{
							nextEl: `.${id}-next`,
							prevEl: `.${id}-prev`,
						}}
						modules={[Navigation]}
						slidesPerView={1}
					>
						{data.map((slide, index) => (
							<SwiperSlide key={index}>
								<Image
									className="w-full"
									src={slide.image.meta}
									alt={slide.image?.alt}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="w-full flex items-center justify-center gap-8">
						<button
							className={`${id}-prev flex items-center gap-2 font-semibold`}
						>
							<IconArrowLeft size={38} />
							<span>BACK</span>
						</button>
						<button
							className={`${id}-next flex items-center gap-2 font-semibold`}
						>
							<span>NEXT</span>
							<IconArrowRight size={38} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
