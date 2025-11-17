"use client";
import m2 from "@/app/_assets/mock/m2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import bg2 from "@/app/_assets/bg/bg2.png";
import logo from "@/app/_assets/images/logo.png";
import { cn, DateFormatter } from "@/lib/utils";
import Link from "next/link";
import { PageDetails } from "@/types/index.type";
import { ProjectInfo } from "@/types/api/project.type";

const Timeline: React.FC<{
	data: { [year: string]: (PageDetails & ProjectInfo)[] };
	link: string;
}> = ({ data, link }) => {
	return (
		<>
			{Object.keys(data).map((year, index) => (
				<section
					className={cn("m-section", { "p-section relative": index % 2 === 1 })}
					key={year}
				>
					{index % 2 === 1 && (
						<Image
							src={bg2}
							alt="Background"
							className="absolute top-0 left-0 w-full h-full object-cover -z-20"
						/>
					)}
					<div className="container relative">
						<div className="absolute left-0 w-1 h-full bg-black"></div>
					</div>
					<div className="mani-title-wrapper flex justify-between">
						<div>
							<h2 className="mani-title text-left">{year}</h2>
							{/* <p className="text-left">
							Representing a Bespoke Collection of Mani’s Present
						</p> */}
						</div>
					</div>
					<div className="container">
						<Swiper
							effect={"coverflow"}
							centeredSlides={true}
							slidesPerView={1.2}
							initialSlide={1}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								scale: 0.9,
								depth: 0,
								modifier: 1,
								slideShadows: true,
							}}
							breakpoints={{
								1024: {
									slidesPerView: 3,
								},
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
						>
							{data[year].map((slide, index) => (
								<SwiperSlide key={index}>
									<Link
										href={`${link}/${slide.slug}`}
										className="rounded-lg overflow-hidden bg-white border border-zinc-200 relative block"
									>
										<div className="mb-2 relative">
											<Image
												src={slide.featured_image?.meta || m2}
												alt={slide.title}
												className="aspect-4/3 object-cover w-full"
											/>
											<div className="z-10 absolute inset-0 bg-black/45"></div>
											<div className="z-20 absolute bottom-0 left-0 w-full p-4">
												<Image src={logo} alt="Logo" className="w-16 mb-2" />
												<h4 className="text-white text-3xl font-bold">
													{slide.title}
												</h4>
											</div>
										</div>
										<div className="py-2 px-4">
											{slide?.location?.area && slide?.delivery_date && (
												<p className="text-sm text-zinc-600 mb-1">
													<span>Location</span>: {slide?.location?.area}
													{slide?.delivery_date && (
														<>
															<span>Delivery Date</span>:{" "}
															{DateFormatter.format1(slide?.delivery_date)}
														</>
													)}
												</p>
											)}
											<p className="font-medium line-clamp-2">
												{slide.excerpt}
											</p>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>
			))}
		</>
	);
};

export default Timeline;
