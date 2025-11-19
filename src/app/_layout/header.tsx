"use client";
import Image from "next/image";
import logo from "../_assets/images/logo.png";
import logov2 from "../_assets/images/logo-v2.png";
import SocialLinks from "../_components/social-links";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MenuType } from "@/types/api/menu.type";
import Link from "next/link";

// const menu: MenuType = [
// 	{
// 		id: 1,
// 		title: "ABOUT MANI",
// 		url: "",
// 		children: [
// 			{
// 				id: 11,
// 				title: "Mission & Vision",
// 				url: "/mission-vision",
// 				children: [],
// 			},
// 			{ id: 12, title: "Team", url: "/team", children: [] },
// 			{ id: 13, title: "CSR", url: "/csr", children: [] },
// 			{ id: 14, title: "Testimonials", url: "/testimonial", children: [] },
// 			{
// 				id: 15,
// 				title: "Awards & Achievements",
// 				url: "/achievement",
// 				children: [],
// 			},
// 			{ id: 16, title: "Mani Colleagues", url: "/colleague", children: [] },
// 			{ id: 17, title: "Contact Us", url: "/contact-us", children: [] },
// 		],
// 	},
// 	{
// 		id: 2,
// 		title: "VERTICALS",
// 		url: "/verticals",
// 		children: [
// 			{ id: 21, title: "Residential", url: "/residential", children: [] },
// 			{ id: 22, title: "Commercial", url: "/commercial", children: [] },
// 			{ id: 23, title: "Edu-Health", url: "/eduhealth", children: [] },
// 			{ id: 24, title: "Hospitality", url: "/hospitality", children: [] },
// 			{ id: 25, title: "Retail", url: "/retail", children: [] },
// 		],
// 	},
// 	{
// 		id: 3,
// 		title: "MEDIA CENTRE",
// 		url: "/media",
// 		children: [
// 			{ id: 31, title: "In the News", url: "/in-the-news", children: [] },
// 			{ id: 32, title: "Latest @ Mani", url: "/latest", children: [] },
// 			{ id: 33, title: "Photo Gallery", url: "/photo-gallery", children: [] },
// 			{ id: 34, title: "Video Gallery", url: "/video-gallery", children: [] },
// 			{ id: 35, title: "News Letter", url: "/newsletter", children: [] },
// 		],
// 	},
// 	{
// 		id: 4,
// 		title: "CAREERS",
// 		url: "/careers",
// 		children: [
// 			{
// 				id: 41,
// 				title: "Life @ Mani",
// 				url: "/careers/life-at-mani",
// 				children: [],
// 			},
// 		],
// 	},
// ];

const Header: React.FC<{ menu: MenuType }> = ({menu}) => {
	const [open, setOpen] = useState(false);
	const handleMenuClick = () => {
		setOpen((s) => !s);
	};
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup function to ensure overflow is restored
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
				<div className="container mx-auto flex justify-between items-center">
					<SocialLinks
						links={{ facebook: "#", x: "#", instagram: "#", youtube: "#" }}
						className="text-white hidden lg:flex"
					/>
					<Link
						href="/"
						className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 block"
					>
						<Image
							src={logo}
							alt="Mani Logo"
							className="w-full lg:max-w-48 max-w-32"
						/>
					</Link>
					<button
						className="flex items-center space-x-2 text-white mt-[11px]"
						onClick={handleMenuClick}
					>
						<span className="text-lg">Menu</span>
						<IconMenu2 />
					</button>
				</div>
			</header>
			{open && (
				<div className="fixed top-0 left-0 w-full h-svh z-50 bg-color-1 overflow-y-auto">
					<div className="container p-section space-y-20">
						<div className="flex justify-between">
							<Image src={logov2} alt="Mani Logo" className="w-full max-w-sm" />
							<button onClick={handleMenuClick}>
								<IconX className="lg:size-16 size-8" />
							</button>
						</div>
						<DesktopMenu menu={menu} handleMenuClick={handleMenuClick} />
						<MobileMenu menu={menu} handleMenuClick={handleMenuClick} />
					</div>
				</div>
			)}
		</>
	);
};

export default Header;

const DesktopMenu: React.FC<{
	menu: MenuType;
	handleMenuClick: () => void;
}> = ({ menu, handleMenuClick }) => {
	const [openedMenu, setOpenedMenu] = useState(-1);
	return (
		<div className="lg:grid lg:grid-cols-2 gap-8 hidden">
			<div className="space-y-20">
				<div className="flex flex-col gap-12">
					{menu.map((menuItem, index) => (
						<div
							className="font-cormorant-garamond text-6xl cursor-pointer"
							key={menuItem.id}
							onClick={() => setOpenedMenu((s) => (s === index ? -1 : index))}
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
							onClick={handleMenuClick}
						>
							{item.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

const MobileMenu: React.FC<{
	menu: MenuType;
	handleMenuClick: () => void;
}> = ({ menu, handleMenuClick }) => {
	return (
		<div className="grid lg:grid-cols-2 gap-8 lg:hidden">
			{menu.map((menuItem) => (
				<div key={menuItem.id}>
					<div className="font-cormorant-garamond text-3xl cursor-pointer mb-2">
						{menuItem.title}
					</div>
					<div className="flex flex-col gap-2">
						{menuItem?.children?.map((item) => (
							<Link
								className="font-cormorant-garamond text-xl cursor-pointer"
								key={item.id}
								href={item.url}
								onClick={handleMenuClick}
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			))}
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
	);
};
