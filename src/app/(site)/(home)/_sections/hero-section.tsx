// src/app/_components/HeroSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
	IconArrowLeft,
	IconArrowRight,
	IconArrowDown,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/types/api/home.type";

const HeroSlider: React.FC<{ sliders: Slider[] }> = ({ sliders }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	// Wait for loader to finish (3 seconds) before triggering animations
	useEffect(() => {
		const siteLoaded = window.sessionStorage.getItem("siteLoaded") === "true";
		if (siteLoaded && !isLoaded) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsLoaded(true);
			return;
		}
		if (isLoaded) return;
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 3100); // Slightly after loader (3000ms)

		return () => clearTimeout(timer);
	}, [isLoaded]);

	return (
		<motion.div
			className="relative"
			initial={{ opacity: 0 }}
			animate={{ opacity: isLoaded ? 1 : 0 }}
			transition={{ duration: 0.5 }}
		>
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
				{sliders.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="lg:h-svh h-[600px] w-full flex justify-center items-center text-white relative overflow-hidden">
							{/* Background Image with zoom animation */}
							<motion.div
								className="absolute inset-0"
								initial={{ scale: 1.2 }}
								animate={isLoaded ? { scale: 1 } : { scale: 1.2 }}
								transition={{ duration: 1.5, ease: "easeOut" }}
							>
								<Image
									src={slide.image.meta}
									alt={slide.title}
									layout="fill"
									objectFit="cover"
								/>
							</motion.div>

							{/* Overlay with fade in */}
							<motion.div
								className="absolute inset-0 bg-black"
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 0.5 } : { opacity: 0 }}
								transition={{ duration: 0.8 }}
							/>

							{/* Text Content */}
							<AnimatePresence mode="wait">
								{activeIndex === index && (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}
										transition={{
											duration: 0.8,
											ease: "easeOut",
											delay: isLoaded && index === 0 ? 0.3 : 0,
										}}
										className="relative z-10 text-center"
									>
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 0.6,
												delay: isLoaded && index === 0 ? 0.5 : 0.2,
											}}
											className="sm:text-5xl text-3xl md:text-7xl"
										>
											{slide.title}
										</motion.p>
										<motion.h1
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 0.6,
												delay: isLoaded && index === 0 ? 0.7 : 0.3,
											}}
											className="sm:text-5xl text-3xl md:text-7xl mb-8"
										>
											{slide.description}
										</motion.h1>
										{slide?.button?.label && (
											<motion.button
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{
													duration: 0.5,
													delay: isLoaded && index === 0 ? 0.9 : 0.5,
												}}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="mani-button"
												onClick={() => {}}
											>
												{slide.button.label}
											</motion.button>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation buttons with stagger animation */}
			<motion.div
				className="absolute text-white lg:bottom-16 bottom-8 left-1/2 -translate-x-1/2 z-10 lg:gap-16 gap-8 flex flex-col items-center justify-center"
				initial={{ opacity: 0, y: 20 }}
				animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6, delay: 1.2 }}
			>
				<div className="w-full flex items-center gap-8">
					<motion.button
						className="mani-hero-prev flex items-center gap-2 font-semibold"
						initial={{ opacity: 0, x: -20 }}
						animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ duration: 0.5, delay: 1.3 }}
						whileHover={{ x: -5 }}
					>
						<IconArrowLeft size={38} />
						<span>BACK</span>
					</motion.button>
					<motion.button
						className="mani-hero-next flex items-center gap-2 font-semibold"
						initial={{ opacity: 0, x: 20 }}
						animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
						transition={{ duration: 0.5, delay: 1.3 }}
						whileHover={{ x: 5 }}
					>
						<span>NEXT</span>
						<IconArrowRight size={38} />
					</motion.button>
				</div>
				<motion.button
					className="animate-bounce hover:opacity-100 opacity-40"
					initial={{ opacity: 0 }}
					animate={isLoaded ? { opacity: 0.4 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 1.5 }}
				>
					<IconArrowDown size={38} />
				</motion.button>
			</motion.div>
			{/* Progress bar at bottom */}
			<motion.div
				className="absolute bottom-0 w-full flex justify-center z-20"
				initial={{ opacity: 0 }}
				animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.5, delay: 1.4 }}
			>
				{sliders?.map((_, index) => (
					<motion.button
						key={index}
						className={cn("bg-white h-3 flex-1", {
							"opacity-100": index <= activeIndex,
							"opacity-0": index > activeIndex,
						})}
						initial={{ scaleX: 0 }}
						animate={
							isLoaded && index <= activeIndex ? { scaleX: 1 } : { scaleX: 0 }
						}
						transition={{
							duration: 0.5,
							delay: isLoaded ? 1.5 + index * 0.1 : 0,
						}}
						style={{ transformOrigin: "left" }}
					/>
				))}
			</motion.div>
		</motion.div>
	);
};

export default HeroSlider;
