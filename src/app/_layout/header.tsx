"use client";
import Image from "next/image";
import logo from "../_assets/images/logo.png";
import logov2 from "../_assets/images/logo-v2.png";
import SocialLinks from "../_components/social-links";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MenuType } from "@/types/api/menu.type";
import Link from "next/link";
import { SiteSettingsInfo } from "@/types/api/site-settings.type";
import { motion, AnimatePresence } from "framer-motion";


const Header: React.FC<{ menu: MenuType; siteSettings: SiteSettingsInfo }> = ({
	menu,
	siteSettings,
}) => {
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

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
				<div className="container mx-auto flex justify-between items-center">
					<SocialLinks
						links={siteSettings.social_links}
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
			<AnimatePresence>
				{open && (
					<div className="fixed top-0 left-0 w-full h-svh z-50 overflow-hidden">
						{/* Staircase background animation */}
						{Array.from({ length: 6 }).map((_, index) => {
							return (
								<motion.div
									key={index}
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									exit={{ scaleX: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.05,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="absolute left-0 w-full bg-color-1"
									style={{
										transformOrigin: "right",
										top: `${index * 16.66}%`,
										height: "16.66%",
										zIndex: 6 - index,
									}}
								/>
							);
						})}
						
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ 
								duration: 0.2,
								delay: 0,
								ease: "easeOut"
							}}
							className="relative z-10 w-full h-full overflow-y-auto"
						>
							<motion.div
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								transition={{ 
									duration: 0.2,
									delay: 0,
									ease: "easeOut"
								}}
								className="container p-4 sm:p-6 md:p-8 lg:p-section space-y-12 lg:space-y-20"
							>
							<div className="flex justify-between items-center">
								<motion.div
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{ 
										duration: 0.2,
										delay: 0,
										ease: "easeOut"
									}}
								>
									<Image
										src={logov2}
										alt="Mani Logo"
										className="w-full max-w-[180px] sm:max-w-60 lg:max-w-sm"
									/>
								</motion.div>
								<motion.button
									onClick={handleMenuClick}
									whileHover={{ scale: 1.1 }}
									initial={{ x: 20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: 20, opacity: 0 }}
									transition={{ 
										duration: 0.2,
										delay: 0,
										ease: "easeOut"
									}}
								>
									<IconX className="lg:size-16 size-8 sm:size-10" />
								</motion.button>
							</div>
							<DesktopMenu
								siteSettings={siteSettings}
								menu={menu}
								handleMenuClick={handleMenuClick}
							/>
							<MobileMenu
								siteSettings={siteSettings}
								menu={menu}
								handleMenuClick={handleMenuClick}
							/>
						</motion.div>
					</motion.div>
				</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;

const DesktopMenu: React.FC<{
	menu: MenuType;
	handleMenuClick: () => void;
	siteSettings: SiteSettingsInfo;
}> = ({ menu, handleMenuClick, siteSettings }) => {
	const [openedMenu, setOpenedMenu] = useState(-1);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const submenuVariants = {
		hidden: { x: 20, opacity: 0, height: 0 },
		visible: {
			x: 0,
			opacity: 1,
			height: "auto",
			transition: {
				duration: 0.4,
				staggerChildren: 0.08,
				delayChildren: 0.1,
			},
		},
		exit: {
			x: 20,
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.3,
			},
		},
	};

	const submenuItemVariants = {
		hidden: { x: 20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="lg:grid lg:grid-cols-2 gap-8 hidden"
		>
			<div className="space-y-20">
				<motion.div className="flex flex-col gap-8 lg:gap-12">
					{menu.map((menuItem, index) => (
						<motion.div
							variants={itemVariants}
							key={menuItem.id}
							whileHover={{ x: 10, color: "#666" }}
							className="font-cormorant-garamond text-5xl lg:text-6xl cursor-pointer transition-colors"
							onClick={() => setOpenedMenu((s) => (s === index ? -1 : index))}
						>
							{menuItem.title}
						</motion.div>
					))}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
				>
					<SocialLinks
						links={siteSettings.social_links}
						className="text-black"
						size={40}
					/>
				</motion.div>
			</div>
			<AnimatePresence mode="wait">
				{openedMenu >= 0 && (
					<motion.div
						key={openedMenu}
						variants={submenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="space-y-4 flex flex-col overflow-hidden"
					>
						{menu[openedMenu]?.children?.map((item) => (
							<motion.div key={item.id} variants={submenuItemVariants}>
								<Link
									className="font-cormorant-garamond text-3xl lg:text-4xl cursor-pointer block hover:text-gray-600 transition-colors"
									href={item.url}
									onClick={handleMenuClick}
								>
									{item.title}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const MobileMenu: React.FC<{
	menu: MenuType;
	handleMenuClick: () => void;
	siteSettings: SiteSettingsInfo;
}> = ({ menu, handleMenuClick, siteSettings }) => {
	const [expandedMenus, setExpandedMenus] = useState<number[]>([]);

	const toggleMenu = (index: number) => {
		setExpandedMenus((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	const submenuVariants = {
		hidden: { height: 0, opacity: 0 },
		visible: {
			height: "auto",
			opacity: 1,
			transition: {
				duration: 0.3,
				staggerChildren: 0.05,
			},
		},
		exit: {
			height: 0,
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	const submenuItemVariants = {
		hidden: { x: -10, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:hidden"
		>
			{menu.map((menuItem, index) => (
				<motion.div key={menuItem.id} variants={itemVariants}>
					<motion.div
						className="font-cormorant-garamond text-2xl sm:text-3xl cursor-pointer mb-3 sm:mb-4 flex items-center justify-between"
						onClick={() => toggleMenu(index)}
					>
						<span>{menuItem.title}</span>
						<motion.span
							animate={{ rotate: expandedMenus.includes(index) ? 180 : 0 }}
							transition={{ duration: 0.3 }}
							className="text-xl"
						>
							▼
						</motion.span>
					</motion.div>
					<AnimatePresence>
						{expandedMenus.includes(index) && (
							<motion.div
								variants={submenuVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="flex flex-col gap-2 sm:gap-3 overflow-hidden"
							>
								{menuItem?.children?.map((item) => (
									<motion.div key={item.id} variants={submenuItemVariants}>
										<Link
											className="font-cormorant-garamond text-lg sm:text-xl cursor-pointer block py-1 hover:text-gray-600 transition-colors"
											href={item.url}
											onClick={handleMenuClick}
										>
											{item.title}
										</Link>
									</motion.div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			))}
			<motion.div variants={itemVariants} className="col-span-1 sm:col-span-2">
				<SocialLinks
					links={siteSettings.social_links}
					className="text-black"
					size={36}
				/>
			</motion.div>
		</motion.div>
	);
};