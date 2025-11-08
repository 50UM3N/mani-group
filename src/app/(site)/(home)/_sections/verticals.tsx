import React from "react";
import d7 from "@/app/_assets/disposable/d7.png";
import d8 from "@/app/_assets/disposable/d8.png";
import d9 from "@/app/_assets/disposable/d9.png";
import d10 from "@/app/_assets/disposable/d10.png";
import d11 from "@/app/_assets/disposable/d11.png";
import Image from "next/image";
import logo from "@/app/_assets/images/logo.png";
const data = [
	{
		title: "RESIDENTIAL",
		image: d7,
	},
	{
		title: "RETAIL",
		image: d8,
	},
	{
		title: "HOSPITALITY",
		image: d9,
	},
	{
		title: "COMMERCIAL",
		image: d10,
	},
	{
		title: "EDU-HEALTH",
		image: d11,
	},
];

const Verticals = () => {
	return (
		<section className="m-section">
			<div className="mani-title-wrapper">
				<h2 className="mani-title">MANI VERTICALS</h2>
				<p className="text-center">
					Diversified mark of Excellence and Innovation
				</p>
			</div>
			<div className="lg:container lg:flex items-center ">
				{data.map((item, index) => (
					<div className="relative" key={index}>
						<Image
							src={item.image}
							alt={item.title}
							className="w-full lg:h-[800px] h-full object-cover"
						/>
						<div className="bg-black/60 absolute top-0 left-0 w-full h-full z-10"></div>
						<div className="absolute top-1/2 left-1/2 w-full z-20 -translate-x-1/2 -translate-y-1/2">
							<Image
								src={logo}
								alt="Logo"
								className="w-24 mx-auto mb-2"
							/>
							<h2 className="text-white text-2xl font-bold text-center">
								{item.title}
							</h2>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Verticals;
