"use client";
import { VERTICAL } from "@/lib/utils";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

const VerticalSelect: React.FC<{ link: string }> = ({ link }) => {
	const router = useRouter();
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedVertical = e.target.value;
		const queryParam = selectedVertical ? `?vertical=${selectedVertical}` : "";
		router.push(`${link}${queryParam}`);
	};
	return (
		<select
			name="latestByMani"
			id="latestByMani"
			className="border-2 border-black px-4 py-2 min-w-28"
			onChange={handleSelect}
		>
			{VERTICAL.map((item, index) => (
				<option value={item.value} key={index}>
					{item.label}
				</option>
			))}
		</select>
	);
};

export default VerticalSelect;
