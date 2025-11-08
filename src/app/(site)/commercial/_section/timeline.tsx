"use client";
import m1 from "@/app/_assets/mock/m1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import bg2 from "@/app/_assets/bg/bg2.png";
import logo from "@/app/_assets/images/logo.png";
const data = [1, 2, 3, 4];

const Timeline = () => {
	return (
		<>
			<section className="m-section">
				<div className="container relative">
					<div className="absolute left-0 w-1 h-full bg-black"></div>
				</div>
				<div className="mani-title-wrapper flex justify-between">
					<div>
						<h2 className="mani-title text-left">2025</h2>
						<p className="text-left">
							Representing a Bespoke Collection of Mani’s Present
						</p>
					</div>
				</div>
				<div className="container">
					<Swiper
						className="py-8"
						effect={"coverflow"}
						centeredSlides={true}
						slidesPerView={1.2}
						initialSlide={1}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							scale: 1,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						breakpoints={{
							1024: {
								slidesPerView: 2.5,
							},
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
					>
						{data.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="rounded-lg overflow-hidden bg-white shadow">
									<div className="mb-2 relative">
										<Image src={m1} alt="image" className="aspect-4/3" />
										<div className="z-10 absolute inset-0 bg-black/45"></div>
										<div className="z-20 absolute bottom-0 left-0 w-full p-4">
											<Image src={logo} alt="Logo" className="w-16 mb-2" />
											<h4 className="text-white text-3xl font-bold">VISTA</h4>
										</div>
									</div>
									<div className="py-2 px-4">
										<p className="text-sm text-zinc-600 mb-1">
											<span>Location</span>: Tollygunge{" "}
											<span>Delivery Date</span>: December 2023
										</p>
										<p className="font-medium">
											32-storey twin towers in Tollygunge on 2.5acres of land,
											3BHK & 4BHK luxury apartments, Vastu compliant, 3-side
											open view, 80% space open to sky, Tolly Club and RCGC on
											either side.
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			<section className="relative p-section">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="absolute inset-0 backdrop-blur-2xl -z-10"></div>
				<div className="mani-title-wrapper flex justify-between">
					<div>
						<h2 className="mani-title text-left">2025</h2>
						<p className="text-left">
							Representing a Bespoke Collection of Mani’s Present
						</p>
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
						{data.map((slide, index) => (
							<SwiperSlide key={index}>
								<div>
									<div className="mb-2">
										<Image src={m1} alt="image" className="aspect-4/3" />
									</div>
									<div className="px-2">
										<p className="text-sm text-zinc-600 mb-1">
											<span>Location</span>: Tollygunge{" "}
											<span>Delivery Date</span>: December 2023
										</p>
										<p className="font-medium">
											32-storey twin towers in Tollygunge on 2.5acres of land,
											3BHK & 4BHK luxury apartments, Vastu compliant, 3-side
											open view, 80% space open to sky, Tolly Club and RCGC on
											either side.
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Timeline;
