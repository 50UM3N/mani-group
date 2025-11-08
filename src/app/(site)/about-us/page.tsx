import InnerBanner from "@/app/_components/inner-banner";
import React from "react";
import d13 from "@/app/_assets/disposable/d13.png";
import d14 from "@/app/_assets/disposable/d14.png";
import bg2 from "@/app/_assets/bg/bg2.png";
import m1 from "@/app/_assets/mock/m1.png";
import img1 from "@/app/_assets/images/img1.png";
import img2 from "@/app/_assets/images/img2.png";
import Image from "next/image";
import ConnectForm from "../(home)/_sections/connect-form";
const Page = () => {
	return (
		<>
			<InnerBanner title="About Us" />
			<section className="m-section">
				<div className="container">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
						<div>
							<Image src={d13} alt="About Us" className="w-full" />
						</div>
						<div>
							<h2 className="font-semibold sm:text-5xl text-3xl sm:mb-4 mb-2">
								More Than Four Decades of Trust and Quality
							</h2>
							<p className="sm:text-2xl">
								Quality has been the guiding star of the Group. It has always
								aggressively followed a ‘no compromise’ formula in its pursuit
								of quality in any area that is meaningful – be it in
								construction specifications, human resource talent
								identification or selection of its consultants.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* mission section */}
			<section className="m-section p-section relative">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="container">
					<div className="mani-title-wrapper">
						<h2 className="mani-title">MISSION</h2>
						<p className="text-center">
							At Mani Group, we enhance ‘Return on Life’ for our customers and
							associates in seven specific ways:
						</p>
					</div>
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
						<div className="col-span-1 bg-color-2 text-white">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By keeping all the promises we make
								</p>
							</div>
						</div>
						<div className="col-span-1 bg-white text-black">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">By our attention to detail</p>
							</div>
						</div>
						<div className="lg:col-span-1 sm:col-span-2 col-span-1 bg-color-3 text-white">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By making ‘word of mouth’ our strongest ambassador
								</p>
							</div>
						</div>
						<div className="col-span-1 bg-white text-black">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By exceeding the expectations of customers and associates
									every time
								</p>
							</div>
						</div>
						<div className="lg:col-span-2 col-span-1 bg-color-3 text-white">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By exceeding the expectations of customers and associates
									every time
								</p>
							</div>
						</div>
						<div className="col-span-1 bg-white text-black">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By bringing to our business a long-term commitment.
								</p>
							</div>
						</div>
						<div className="col-span-1 bg-color-2 text-white">
							<div className="p-6 lg:py-20 lg:px-12">
								<p className="text-2xl font-bold">
									By creating a sense of trust
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end of mission section */}
			<section className="m-section p-section relative">
				<Image
					src={m1}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="absolute inset-0 backdrop-blur-2xl -z-10"></div>
				<div className="container relative z-0">
					<h2 className="mani-title text-white text-left uppercase mb-8">
						The broad vision <br /> of the group envisages
					</h2>
					<div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:text-2xl text-xl font-semibold text-white">
						<ul className="list-disc list-inside space-y-4">
							<li>
								Being the best partner for residential spaces and living
								environments
							</li>
							<li>
								Being the No.1 brand in terms of reliability and adherence to
								committed deadlines and construction specifications
							</li>
							<li>
								Creating safe and secure living environments to enhance the
								‘Return on Life’
							</li>
						</ul>
						<ul className="list-disc list-inside space-y-4">
							<li>
								Generating new value for the environment to contribute to the
								future of society
							</li>
							<li>
								Constantly innovating its businesses to achieve sustainable
								growth
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="m-section">
				<div className="container">
					<h2 className="mani-title text-left">LATEST BY MANI</h2>
					<div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-3 lg:text-2xl lg:mb-8 mb-3">
						<div className="lg:space-y-4 space-y-3">
							<p>
								Mani Group has been into Kolkata real estate development since
								1980. Over the last four and a half decades, the Group has
								developed more than 25 million square feet across 50+ properties
								and is working steadily towards developing a further in and
								around Kolkata, Durgapur, Jaipur, Siliguri and Bhubaneswar.
							</p>
							<p>
								The Mani Group is a Kolkata headquartered organization that was
								set up by Mr. Sanjay Jhunjhunwala with a simple vision –
								building spaces for people who believe in quality. He sought to
								address the basic requirement of shelter, at the same ensuring
								superior quality construction as well as project completion
								within the stipulated time schedule. Today, over four decades
								later, this unwavering focus remains as strong as ever and Mani
								Group has blossomed into a large, vibrant and highly respected
								organization with a multi-sector pan-India footprint.
							</p>
						</div>
						<div className="lg:space-y-4 space-y-3">
							<p>
								Starting in 1980 from a one-room office at Lower Rawdon Street
								and two people, today the Mani Group Corporate Office at Mani
								Square itself sprawls over 30,000 sq.ft. and the group has over
								900 people on its rolls. The group’s operations have spread out
								far beyond the confines of Kolkata and now its offices and
								footprint cover West Bengal, Rajasthan, Maharashtra, Karnataka
								and Odisha. Other locations are in active consideration.
							</p>
							<Image src={img1} alt="About Mani Group" />
						</div>
					</div>
					<Image src={d14} alt="About Us" className="w-full" />
				</div>
			</section>
			<section className="m-section">
				<div className="relative p-section ">
					<Image
						src={bg2}
						alt="Background"
						className="absolute top-0 left-0 w-full h-full object-cover -z-20"
					/>
					<div className="container">
						<h2 className="mani-title text-left lg:mb-12 mb-8">
							CEO’S MESSAGE
						</h2>
						<article className="prose max-w-none text-black">
							<p>Dear Friend,</p>

							<p>
								Our journey began with a simple mission, to improve the quality
								of life. In four decades it helped us carve a niche to remain
								passionately engaged in exceeding customer expectations and
								enhancing value through quality developments.
							</p>

							<p>
								We have delivered over 50 prime destinations spanning over 10
								million sq ft. A further 30 million sq ft are under
								construction. As a result, the Mani Group has touched the lives
								of more than 5,000 happy families in Kolkata, Durgapur, Jaipur,
								Siliguri and Bhubaneswar. The 42, a 250-metre high architectural
								marvel on the historic Chowringhee in Kolkata, is the tallest
								tower in Eastern India. It stands as an outstanding feat of
								precision engineering and remarkable design.
							</p>

							<p>
								Our foray into retail began with Mani Square, Kolkata and Pink
								Square, Jaipur. Both, favourite destinations for shopping,
								leisure and entertainment. Hospitality initiatives include the
								JW Marriot, Kolkata. This 5-star deluxe hotel has 281 keys and
								is fully geared for any global business traveller. Besides, we
								have been setting up the 94-room Courtyard by Marriott,
								Siliguri.
							</p>

							<p>
								In the 100-acre IQ City township, Durgapur, West Bengal, we have
								ventured into eduhealth where we have created an entire
								Knowledge & Health Campus. The IQ City Medical College and the
								IQ City Institute of Nursing Sciences are already training
								doctors and nurses to serve the nation. The IQ City Medical
								College Hospital is a teaching hospital with world-class
								facilities and 814 beds.
							</p>

							<p>The Group’s verticals spread across . . .</p>

							<ul>
								<li>Residential.</li>
								<li>Retail.</li>
								<li>Commercial.</li>
								<li>Education and Healthcare.</li>
							</ul>

							<p>
								Our commitment to high-quality building, dovetailed with
								transparent work ethics has made us the desirable developer
								among diverse audiences. Going forward, we pledge to harness the
								best talent to create top notch residential, commercial,
								hospitality, edu-health infrastructure for holistic solutions.
								All the while upholding the highest standards of trust,
								integrity, service and corporate social responsibility.
							</p>

							<p>With best wishes,</p>
						</article>
					</div>
				</div>
				<div className="container lg:max-w-5xl p-section">
					<div className="grid sm:grid-cols-2 col-span-1 gap-8">
						<div className="relative sm:order-1 pt-[300px] sm:pt-0">
							<Image
								src={img2}
								alt="Sanjay Jhunjhunwala"
								className="absolute left-0 bottom-0 w-full sm:max-w-[400px]"
							/>
						</div>
						<div>
							<h4 className="font-bold text-color-2 text-5xl mb-2">
								Sanjay Jhunjhunwala
							</h4>
							<p className="font-bold text-3xl">CEO</p>
						</div>
					</div>
				</div>
			</section>
			<ConnectForm />
		</>
	);
};

export default Page;
