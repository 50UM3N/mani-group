"use client";
import { useRef } from "react";
import d2 from "@/app/_assets/disposable/d2.png";
import d3 from "@/app/_assets/disposable/d3.png";
import d4 from "@/app/_assets/disposable/d4.png";
import d5 from "@/app/_assets/disposable/d5.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const data = [
	{
		title: "1",
		description: "CONGLOMERATE",
		image: d2,
	},
	{
		title: "60+ Million",
		description: "Sq Ft of Prime Development",
		image: d3,
	},
	{
		title: "15+ Million",
		description: "Sq Ft Under Construction",
		image: d4,
	},
	{
		title: "12000+",
		description: "HAPPY FAMILIES",
		image: d5,
	},
];

const Card = ({ item, index }: { item: (typeof data)[0]; index: number }) => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// 3D transforms based on scroll
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
	const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.5, 0.8, 1],
		[0, 1, 1, 1, 0],
	);
	const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

	// Text animations synced with scroll
	const titleOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
	const titleY = useTransform(scrollYProgress, [0.25, 0.45], [30, 0]);

	const descOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
	const descY = useTransform(scrollYProgress, [0.35, 0.5], [20, 0]);

	const lineWidth = useTransform(scrollYProgress, [0.4, 0.5], ["0px", "96px"]);
	const lineOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

	return (
		<div
			ref={ref}
			className="h-svh flex items-center justify-center sticky top-0 px-4 sm:px-0"
		>
			<motion.div
				style={{
					scale,
					rotateX,
					opacity,
					y,
					transformPerspective: 1200,
				}}
				className="relative w-full sm:w-[90vw] max-w-full h-[60vh] sm:h-[70vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
			>
				{/* Background Image */}
				<Image
					src={item.image}
					alt={item.title}
					fill
					className="object-cover"
					priority={index === 0}
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80 z-10" />

				{/* Content */}
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 sm:p-8">
					<div className="text-center">
						{/* Title */}
						<motion.h2
							className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4 tracking-tight"
							style={{
								opacity: titleOpacity,
								y: titleY,
							}}
						>
							{item.title}
						</motion.h2>

						{/* Description */}
						<motion.p
							className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide sm:tracking-wider uppercase px-4"
							style={{
								opacity: descOpacity,
								y: descY,
							}}
						>
							{item.description}
						</motion.p>

						{/* Decorative line */}
						<motion.div
							className="h-0.5 sm:h-1 bg-white mx-auto mt-4 sm:mt-8"
							style={{
								width: lineWidth,
								opacity: lineOpacity,
							}}
						/>
					</div>
				</div>

				{/* 3D Shine Effect */}
				<motion.div
					className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent z-30 pointer-events-none"
					style={{
						x: useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]),
					}}
				/>
			</motion.div>
		</div>
	);
};

const ScrollSlider = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={containerRef} className="relative bg-black/50">
			{/* Blurred Background Image */}
			<div className="absolute inset-0 -z-10 blur-3xl">
				<Image
					src={d2}
					alt="background"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Floating SVG Elements - Hidden on mobile for performance */}
			<div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
				{/* Circle 1 */}
				<motion.svg
					className="absolute top-20 left-10 w-12 lg:w-16 h-12 lg:h-16 opacity-20"
					animate={{
						y: [0, -30, 0],
						rotate: [0, 360],
					}}
					transition={{
						y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 20, repeat: Infinity, ease: "linear" },
					}}
					viewBox="0 0 100 100"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</motion.svg>

				{/* Circle 2 */}
				<motion.svg
					className="absolute top-1/3 right-10 lg:right-20 w-16 lg:w-24 h-16 lg:h-24 opacity-15"
					animate={{
						y: [0, 40, 0],
						rotate: [0, -360],
					}}
					transition={{
						y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 25, repeat: Infinity, ease: "linear" },
					}}
					viewBox="0 0 100 100"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</motion.svg>

				{/* Triangle */}
				<motion.svg
					className="absolute bottom-1/4 left-1/4 w-16 lg:w-20 h-16 lg:h-20 opacity-20"
					animate={{
						y: [0, -40, 0],
						rotate: [0, 360],
					}}
					transition={{
						y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 30, repeat: Infinity, ease: "linear" },
					}}
					viewBox="0 0 100 100"
				>
					<polygon
						points="50,10 90,90 10,90"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</motion.svg>

				{/* Square */}
				<motion.svg
					className="absolute top-2/3 right-1/3 w-12 lg:w-16 h-12 lg:h-16 opacity-15"
					animate={{
						y: [0, 30, 0],
						rotate: [0, -360],
					}}
					transition={{
						y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 22, repeat: Infinity, ease: "linear" },
					}}
					viewBox="0 0 100 100"
				>
					<rect
						x="20"
						y="20"
						width="60"
						height="60"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</motion.svg>

				{/* Small Circle */}
				<motion.svg
					className="absolute top-1/2 left-1/2 w-10 lg:w-12 h-10 lg:h-12 opacity-10"
					animate={{
						y: [0, -25, 0],
						rotate: [0, 360],
					}}
					transition={{
						y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 18, repeat: Infinity, ease: "linear" },
					}}
					viewBox="0 0 100 100"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</motion.svg>
			</div>

			{/* Cards with 3D effect */}
			<div className="relative" style={{ perspective: "1200px" }}>
				{data.map((item, index) => (
					<Card key={index} item={item} index={index} />
				))}
			</div>
		</div>
	);
};

export default ScrollSlider;