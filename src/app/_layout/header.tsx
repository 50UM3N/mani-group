"use client";
import Image from "next/image";
import logo from "../_assets/images/logo.png";
import logov2 from "../_assets/images/logo-v2.png";
import SocialLinks from "../_components/social-links";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { MenuType } from "@/types/api/menu.type";
import Link from "next/link";

const Header: React.FC<{ menu: MenuType }> = ({ menu }) => {
	const [open, setOpen] = useState(false);
	const [openedMenu, setOpenedMenu] = useState(-1);
	const handleMenuClick = () => {
		setOpen((s) => !s);
	};
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
				<div className="container mx-auto flex justify-between items-center">
					<SocialLinks
						links={{ facebook: "#", x: "#", instagram: "#", youtube: "#" }}
						className="text-white hidden lg:flex"
					/>
					<Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 block">
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
				<div className="fixed top-0 left-0 w-full h-svh z-50 bg-color-1 ">
					<div className="container p-section space-y-20">
						<div className="flex justify-between">
							<Image src={logov2} alt="Mani Logo" className="w-sm " />
							<button onClick={handleMenuClick}>
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
											onClick={handleMenuClick}
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
