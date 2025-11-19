"use client";

import { BrandInfo, FloorDetailInfo } from "@/types/api/project.type";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import m1 from "@/app/_assets/mock/m1.png";
import bg2 from "@/app/_assets/bg/bg2.png";

import { TermInfo } from "@/types/index.type";
const Brand: React.FC<{
	data: FloorDetailInfo[];
	brandCategory: TermInfo[];
	brandTag: TermInfo[];
}> = ({ data, brandCategory, brandTag }) => {
	const [selectedFloor, setSelectedFloor] = useState<string>("all");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedTag, setSelectedTag] = useState<string>("all");

	// Get all unique floors
	const floors = useMemo(() => {
		return data.map((floor) => ({
			name: floor.name,
			value: floor.name.toLowerCase().replace(/\s+/g, "-"),
		}));
	}, [data]);

	// Filter brands based on selected filters
	const filteredBrands = useMemo(() => {
		let brands: BrandInfo[] = [];

		// Collect brands from all floors or selected floor
		if (selectedFloor === "all") {
			data.forEach((floor) => {
				brands = [...brands, ...floor.brands];
			});
		} else {
			const floor = data.find(
				(f) => f.name.toLowerCase().replace(/\s+/g, "-") === selectedFloor
			);
			if (floor) {
				brands = floor.brands;
			}
		}

		// Filter by category
		if (selectedCategory !== "all") {
			brands = brands.filter((brand) =>
				brand.brand_category.includes(selectedCategory)
			);
		}

		// Filter by tag
		if (selectedTag !== "all") {
			brands = brands.filter((brand) => brand.brand_tag.includes(selectedTag));
		}

		return brands;
	}, [selectedFloor, selectedCategory, selectedTag, data]);

	return (
		<>
			<section className="m-section p-section relative">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="container grid lg:grid-cols-2  gap-8">
					<div>
						<p className="font-semibold text-xl">
							Showing {filteredBrands.length} brand
							{filteredBrands.length !== 1 ? "s" : ""}
						</p>
					</div>
					<div className="grid sm:grid-cols-3 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Floor
							</label>
							<select
								value={selectedFloor}
								onChange={(e) => setSelectedFloor(e.target.value)}
								className="w-full px-4 py-2 border-2 border-black"
							>
								<option value="all">All Floors</option>
								{floors.map((floor) => (
									<option key={floor.value} value={floor.value}>
										{floor.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Category
							</label>
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="w-full px-4 py-2 border-2 border-black"
							>
								<option value="all">All Categories</option>
								{brandCategory.map((category) => (
									<option key={category.term_id} value={category.slug}>
										{category.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Tag
							</label>
							<select
								value={selectedTag}
								onChange={(e) => setSelectedTag(e.target.value)}
								className="w-full px-4 py-2 border-2 border-black"
							>
								<option value="all">All Tags</option>
								{brandTag.map((tag) => (
									<option key={tag.term_id} value={tag.slug}>
										{tag.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</section>
			<section className="m-section">
				<div className="container">
					{filteredBrands.length > 0 ? (
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
							{filteredBrands.map((brand) => (
								<div
									key={brand.id}
									className="bg-white rounded-lg shadow-md hover:shadow transition overflow-hidden group cursor-pointer"
								>
									<div className="aspect-square relative overflow-hidden bg-gray-100">
										<Image
											src={brand?.featured_image?.meta || m1}
											alt={brand?.featured_image?.alt || brand.title}
											className="w-full h-full object-contain p-4 group-hover:scale-105 transition"
										/>
									</div>
									<div className="p-3">
										<p className="text-sm font-semibold text-zinc-800 truncate">
											{brand.title}
										</p>
										{/* add floor  */}
										{(brand.brand_category.length > 0 ||
											brand.brand_tag.length > 0) && (
											<div className="mt-2 flex flex-wrap gap-1 justify-center">
												{brand.brand_tag.map((tag, idx) => (
													<span
														key={idx}
														className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
													>
														{tag}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-center py-16">
							<h3 className="text-4xl font-semibold text-zinc-800 mb-2">
								No Brands Found
							</h3>
							<p className="text-zinc-500">
								Try adjusting your filters to see more results
							</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Brand;
