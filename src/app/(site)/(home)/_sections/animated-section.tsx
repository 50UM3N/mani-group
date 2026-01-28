"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
	children: ReactNode;
	delay?: number;
	direction?: "left" | "right" | "up" | "down";
	className?: string;
}

const AnimatedSection = ({
	children,
	delay = 0,
	direction = "up",
	className = "",
}: AnimatedSectionProps) => {
	const directionVariants = {
		left: { x: -50, y: 0 },
		right: { x: 50, y: 0 },
		up: { x: 0, y: 50 },
		down: { x: 0, y: -50 },
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				...directionVariants[direction],
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			transition={{
				duration: 0.7,
				delay,
				ease: [0.25, 0.4, 0.25, 1],
			}}
			viewport={{ once: true, amount: 0.3 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
