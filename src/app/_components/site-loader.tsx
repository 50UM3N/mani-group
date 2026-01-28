"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logov2 from "../_assets/images/logo-v2.png";

const SiteLoader = () => {
	const [loading, setLoading] = useState(true);
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		const textTimer = setTimeout(() => {
			setShowText(true);
		}, 900); // text appears AFTER logo

		const loaderTimer = setTimeout(() => {
			setLoading(false);
			window.sessionStorage.setItem("siteLoaded", "true");
		}, 3000);

		return () => {
			clearTimeout(textTimer);
			clearTimeout(loaderTimer);
		};
	}, []);

	// Create staircase panels
	const panelCount = 16;
	const panels = Array.from({ length: panelCount });

	return (
		<AnimatePresence>
			{loading && (
				<div className="fixed inset-0 z-9999">
					{/* Staircase panels */}
					{panels.map((_, index) => {
						const isTop = index < panelCount / 2;
						const delay = (index % (panelCount / 2)) * 0.05;

						return (
							<motion.div
								key={index}
								initial={{ y: 0 }}
								exit={{
									y: isTop ? "-100%" : "100%",
								}}
								transition={{
									duration: 0.6,
									delay: delay,
									ease: [0.77, 0, 0.175, 1],
								}}
								className="absolute bg-[#F5F6DC]"
								style={{
									left: `${(index % (panelCount / 2)) * (100 / (panelCount / 2))}%`,
									top: isTop ? 0 : "50%",
									width: `${100 / (panelCount / 2)}%`,
									height: "50%",
								}}
							/>
						);
					})}

					{/* Content layer */}
					<motion.div
						className="absolute inset-0 flex items-center justify-center pointer-events-none w-svw"
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col items-center">
							{/* LOGO */}
							<motion.div
								animate={{
									scale: showText ? 0.94 : 1.05, // logo becomes smaller when text comes
									opacity: 1,
								}}
								initial={{ scale: 1.05, opacity: 0 }}
								transition={{
									duration: 0.8,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<Image
									src={logov2}
									alt="Mani Logo"
									priority
									className="sm:w-[340px] w-30"
								/>
							</motion.div>

							{/* UNDER TEXT (SAME WIDTH AS LOGO) */}
							<div className="relative mt-0 sm:w-[680px] w-[280px] h-[72px] overflow-hidden">
								{showText && (
									<motion.div
										initial={{ clipPath: "inset(0 100% 0 0)" }}
										animate={{ clipPath: "inset(0 0% 0 0)" }}
										transition={{
											duration: 2.2,
											ease: [0.22, 1, 0.36, 1],
										}}
										className="absolute inset-0 flex justify-center sm:text-[40px] text-3xl font-raleway font-light tracking-tight"
									>
										<span className="text-gray-500">change</span>
										<span className="mx-1 text-[#F39C12]">for</span>
										<span className="text-gray-500">good</span>
									</motion.div>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default SiteLoader;
