"use client";
import Image from "next/image";
import logo from "../_assets/images/logo.png";
import logov2 from "../_assets/images/logo-v2.png";
import SocialLinks from "../_components/social-links";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { MenuType } from "@/types/api/menu.type";
import Link from "next/link";

const menu: MenuType = [
	{
		id: 1,
		title: "About Mani",
		url: "#",
		children: [
			{
				id: 11,
				title: "Mission & Vision",
				url: "/about/mission-vision",
				children: [],
			},
			{
				id: 12,
				title: "Team",
				url: "/about/team",
				children: [],
			},
			{
				id: 13,
				title: "CSR",
				url: "/about/csr",
				children: [],
			},
			{
				id: 14,
				title: "Testimonials",
				url: "/about/testimonials",
				children: [],
			},
			{
				id: 15,
				title: "Awards & Achievements",
				url: "/about/awards-achievements",
				children: [],
			},
			{
				id: 16,
				title: "Mani Colleagues",
				url: "/about/colleagues",
				children: [],
			},
			{
				id: 17,
				title: "Contact Us",
				url: "/about/contact",
				children: [],
			},
		],
	},
	{
		id: 2,
		title: "Verticals",
		url: "#",
		children: [
			{
				id: 21,
				title: "Residential",
				url: "/verticals/residential",
				children: [],
			},
			{
				id: 22,
				title: "Commercial",
				url: "/verticals/commercial",
				children: [],
			},
			{
				id: 23,
				title: "Edu-Health",
				url: "/verticals/edu-health",
				children: [],
			},
			{
				id: 24,
				title: "Hospitality",
				url: "/verticals/hospitality",
				children: [],
			},
			{
				id: 25,
				title: "Retail",
				url: "/verticals/retail",
				children: [],
			},
		],
	},
	{
		id: 3,
		title: "Media Centre",
		url: "#",
		children: [
			{
				id: 31,
				title: "In the News",
				url: "/media/news",
				children: [],
			},
			{
				id: 32,
				title: "Latest @ Mani",
				url: "/media/latest",
				children: [],
			},
			{
				id: 33,
				title: "Photo Gallery",
				url: "/media/photos",
				children: [],
			},
			{
				id: 34,
				title: "Video Gallery",
				url: "/media/videos",
				children: [],
			},
			{
				id: 35,
				title: "News Letter",
				url: "/media/newsletter",
				children: [],
			},
		],
	},
	{
		id: 4,
		title: "Careers",
		url: "#",
		children: [
			{
				id: 41,
				title: "Life @ Mani",
				url: "/careers/life-at-mani",
				children: [],
			},
		],
	},
];

const Header = () => {
	const [open, setOpen] = useState(false);
	const [openedMenu, setOpenedMenu] = useState(-1);
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
				<div className="container mx-auto flex justify-between items-center">
					<SocialLinks
						links={{ facebook: "#", x: "#", instagram: "#", youtube: "#" }}
						className="text-white hidden lg:flex"
					/>
					<Image
						src={logo}
						alt="Mani Logo"
						className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-full lg:max-w-48 max-w-32"
					/>
					<button
						className="flex items-center space-x-2 text-white mt-[11px]"
						onClick={() => setOpen(true)}
					>
						<span className="text-lg">Menu</span>
						<IconMenu2 />
					</button>
				</div>
			</header>
			{open && (
				<div className="fixed top-0 left-0 w-full h-svh z-50 bg-color-1 ">
					<div className="container p-section space-y-20">
						<div className="flex justify-between">
							<Image src={logov2} alt="Mani Logo" className="w-sm " />
							<button onClick={() => setOpen(false)}>
								<IconX className="size-16" />
							</button>
						</div>
						<div className="grid lg:grid-cols-2 gap-8">
							<div className="space-y-20">
								<div className="flex flex-col gap-12">
									{menu.map((menuItem, index) => (
										<div
											className="font-cormorant-garamond text-6xl cursor-pointer"
											key={menuItem.id}
											onClick={() =>
												setOpenedMenu((s) => (s === index ? -1 : index))
											}
										>
											{menuItem.title}
										</div>
									))}
								</div>
								<SocialLinks
									links={{
										facebook: "#",
										x: "#",
										instagram: "#",
										youtube: "#",
									}}
									className="text-black"
									size={40}
								/>
							</div>
							{openedMenu >= 0 && (
								<div className="space-y-4 flex flex-col">
									{menu[openedMenu]?.children?.map((item) => (
										<Link
											className="font-cormorant-garamond text-4xl cursor-pointer"
											key={item.id}
											href={item.url}
										>
											{item.title}
										</Link>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
