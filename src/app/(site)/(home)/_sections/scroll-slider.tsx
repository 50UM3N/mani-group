import React from "react";
import d2 from "@/app/_assets/disposable/d2.png";
import d3 from "@/app/_assets/disposable/d3.png";
import d4 from "@/app/_assets/disposable/d4.png";
import d5 from "@/app/_assets/disposable/d5.png";
import Image from "next/image";

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

// const ScrollSlider = () => {
// 	return (
// 		<div className="h-svh w-svw overflow-y-scroll snap-y snap-mandatory">
// 			{data.map((item, index) => (
// 				<div className="h-svh relative snap-start" key={index}>
// 					<Image
// 						src={item.image}
// 						alt={item.title}
// 						className="w-full h-full object-cover"
// 					/>
// 					<div className="bg-black/30 absolute top-0 left-0 w-full h-full z-10"></div>
// 					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
// 						<p className="text-5xl mb-2 font-semibold">{item.title}</p>
// 						<h2 className="text-5xl font-bold">{item.description}</h2>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
const ScrollSlider = () => {
	return (
		<div>
			{data.map((item, index) => (
				<div className="lg:h-svh h-[400px] relative" key={index}>
					<Image
						src={item.image}
						alt={item.title}
						className="w-full h-full object-cover"
					/>
					<div className="bg-black/60 absolute top-0 left-0 w-full h-full z-10"></div>
					<div className="absolute w-full p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
						<p className="sm:text-5xl text-2xl mb-2 font-semibold">
							{item.title}
						</p>
						<h2 className="sm:text-5xl text-2xl font-bold">
							{item.description}
						</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default ScrollSlider;
