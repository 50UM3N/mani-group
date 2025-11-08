import React from "react";
import footerlogo from "@/app/_assets/images/footer-logo.png";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import SocialLinks from "../_components/social-links";
const Footer = () => {
	return (
		<footer className="p-section pb-8 bg-color-1">
			<div className="container">
				<div className="grid lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-8 lg:mb-0 mb-8">
					<div className="lg:col-span-4 sm:col-span-2 cols-span-1">
						<Image src={footerlogo} alt="Footer Logo" className="mb-6" />
						<div className="space-y-4">
							<div>
								<p className="font-semibold mb-1">CORPORATE OFFICE</p>
								<p>
									9-IT Chambers, Mani Square, 164/1 Maniktala Main Road, Kolkata
									700054, West Bengal, India
								</p>
							</div>
							<p>
								<span className="font-semibold">CALL US ON</span>:{" "}
								<a href="tel:+919831489780">9831489780</a> |{" "}
								<a href="tel:03340208176">40208176</a>
							</p>
							<p>
								<span className="font-semibold">EMAIL AT</span>:
								<a href="mailto:malladmin@mani-group.com">
									malladmin@mani-group.com
								</a>
							</p>
						</div>
					</div>
					<div className="lg:col-span-2 cols-span-1">
						<h4 className="font-bold mb-2 text-lg">ABOUT MANI</h4>
						<ul className="space-y-1">
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
						</ul>
					</div>
					<div className="lg:col-span-2 cols-span-1">
						<h4 className="font-bold mb-2 text-lg">VERTICALS</h4>
						<ul className="space-y-1">
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
						</ul>
					</div>
					<div className="lg:col-span-2 cols-span-1">
						<h4 className="font-bold mb-2 text-lg">MEDIA CENTRE</h4>
						<ul className="space-y-1">
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
							<li>
								<a href="">Mission & Vision</a>
							</li>
						</ul>
					</div>
					<div className="lg:col-span-2 cols-span-1">
						<h4 className="font-bold mb-2 text-lg">CAREERS</h4>
						<ul className="space-y-1">
							<li>
								<a href="">Mission & Vision</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex sm:flex-row flex-col justify-between mb-8 gap-8">
					<SocialLinks
						links={{ facebook: "#", x: "#", instagram: "#", youtube: "#" }}
					/>
					<div>
						<label
							htmlFor="subscription"
							className="font-semibold mb-1 inline-block uppercase"
						>
							Subscribe to newsletter
						</label>
						<div className="border-2 border-black rounded-lg flex">
							<input
								id="subscription"
								type="email"
								placeholder="Enter your email"
								className="focus:outline-none px-3 py-1 sm:w-auto w-full"
							/>
							<button
								type="submit"
								className="bg-black text-white size-9 flex items-center justify-center"
							>
								<IconArrowRight />
							</button>
						</div>
					</div>
				</div>
				<div className="border-t border-black pt-8">
					<p className="text-sm text-center">
						© Mani Group Copyright {new Date().getFullYear()}, All Rights
						Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
