import React from "react";
import footerlogo from "@/app/_assets/images/footer-logo.png";
import Image from "next/image";
import SocialLinks from "../_components/social-links";
import { MenuType } from "@/types/api/menu.type";
import NewsLetterForm from "./_components/news-letter-form";
const Footer: React.FC<{ menu: MenuType }> = ({ menu }) => {
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
					{menu.map((item) => (
						<div className="lg:col-span-2 cols-span-1" key={item.id}>
							<h4 className="font-bold mb-2 text-lg">{item.title}</h4>
							<ul className="space-y-1">
								{item.children.map((subItem) => (
									<li key={subItem.id}>
										<a href={subItem.url}>{subItem.title}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex sm:flex-row flex-col justify-between mb-8 gap-8">
					<SocialLinks
						links={{ facebook: "#", x: "#", instagram: "#", youtube: "#" }}
					/>
					<NewsLetterForm />
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
