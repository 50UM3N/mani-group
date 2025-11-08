"use client";
import { useEffect, useState } from "react";
import logov2 from "../_assets/images/logo-v2.png";
import Image from "next/image";

const SiteLoader = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	if (loading)
		return (
			<div className="fixed top-0 left-0 w-full h-full z-50 bg-white flex justify-center items-center">
				<Image src={logov2} alt="Loading..." className="animate-pulse" />
			</div>
		);
	return null;
};

export default SiteLoader;
