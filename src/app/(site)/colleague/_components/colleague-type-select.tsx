"use client";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

const ColleagueTypeSelect = ({ children, ...rest }: any) => {
	const router = useRouter();
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedVertical = e.target.value;
		const queryParam = selectedVertical ? `?type=${selectedVertical}` : "";
		router.push(`/colleague${queryParam}`);
	};
	return (
		<select
			name="latestByMani"
			id="latestByMani"
			className="border-2 border-black px-4 py-2 min-w-28"
			onChange={handleSelect}
			{...rest}
		>
			{children}
		</select>
	);
};

export default ColleagueTypeSelect;
