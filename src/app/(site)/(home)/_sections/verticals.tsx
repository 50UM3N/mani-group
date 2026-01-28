"use client";
import d7 from "@/app/_assets/disposable/d7.png";
import d8 from "@/app/_assets/disposable/d8.png";
import d9 from "@/app/_assets/disposable/d9.png";
import d10 from "@/app/_assets/disposable/d10.png";
import d11 from "@/app/_assets/disposable/d11.png";
import Image from "next/image";
import logo from "@/app/_assets/images/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
	{
		title: "RESIDENTIAL",
		image: d7,
		url: "/residential",
	},
	{
		title: "RETAIL",
		image: d8,
		url: "/retail",
	},
	{
		title: "HOSPITALITY",
		image: d9,
		url: "/hospitality",
	},
	{
		title: "COMMERCIAL",
		image: d10,
		url: "/commercial",
	},
	{
		title: "EDU-HEALTH",
		image: d11,
		url: "/eduhealth",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.4, 0.25, 1],
		},
	},
};

const Verticals = () => {
	return (
		<section className="m-section">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="mani-title-wrapper"
			>
				<h2 className="mani-title">MANI VERTICALS</h2>
				<p className="text-center">
					Diversified mark of Excellence and Innovation
				</p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="lg:container lg:flex items-center"
			>
				{data.map((item, index) => (
					<motion.div key={index} variants={itemVariants}>
						<Link
							href={item.url}
							className="block relative overflow-hidden group"
						>
							<Image
								src={item.image}
								alt={item.title}
								className="w-full lg:h-[800px] h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="bg-black/60 absolute top-0 left-0 w-full h-full z-10 group-hover:bg-black/40 transition-colors duration-500"></div>
							<motion.div
								className="absolute top-1/2 left-1/2 w-full z-20 -translate-x-1/2 -translate-y-1/2"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<Image src={logo} alt="Logo" className="w-24 mx-auto mb-2" />
								<h2 className="text-white text-2xl font-bold text-center">
									{item.title}
								</h2>
							</motion.div>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Verticals;
