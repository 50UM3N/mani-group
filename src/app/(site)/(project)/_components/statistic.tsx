import { Statistics } from "@/types/index.type";
import Image from "next/image";
import React from "react";
import img3 from "@/app/_assets/images/img3.png";
import img4 from "@/app/_assets/images/img4.png";
import img5 from "@/app/_assets/images/img5.png";
import img6 from "@/app/_assets/images/img6.png";

const images = [img3, img4, img5, img6];
const Statistic: React.FC<{ data?: Statistics[] }> = ({ data }) => {
	if (!data || data.length === 0) return null;
	return (
		<section className="m-section">
			<div className="container">
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
					{data?.map((item, index) => (
						<div
							key={index}
							className="aspect-square relative flex items-center justify-center"
						>
							<Image
								src={images[index % images.length]}
								alt="Commercial Image"
								className="absolute inset-0 object-cover w-full h-full -z-20"
							/>
							<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
							<div className="text-white">
								<p className="font-semibold text-4xl text-center mb-2">
									{item.value}
								</p>
								<p className="font-bold text-lg text-center font-cormorant-garamond">
									{item.label}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Statistic;
