"use client";
import React, { useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import bg2 from "@/app/_assets/bg/bg2.png";
import Image from "next/image";
import m2 from "@/app/_assets/mock/m2.png";
import { CSRInfo } from "@/types/api/csr.type";

const Gallery: React.FC<{
	data: CSRInfo[];
}> = ({ data, ...rest }) => {
	const lightGalleryRefs = useRef<any[]>([]);

	const onInit = useCallback((detail: any, index: number) => {
		if (detail) {
			lightGalleryRefs.current[index] = detail.instance;
		}
	}, []);

	const openGallery = (index: number) => {
		if (lightGalleryRefs.current[index]) {
			lightGalleryRefs.current[index].openGallery(0);
		}
	};
	return (
		<section className="m-section" {...rest}>
			<div className="relative p-section ">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="container">
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
						{data?.map((album, index) => (
							<React.Fragment key={index}>
								<div
									onClick={() => openGallery(index)}
									className="relative overflow-hidden group cursor-pointer hover:shadow-2xs"
								>
									<Image
										src={album.featured_image?.meta || m2}
										alt={album.title}
										className="aspect-square object-cover w-full"
									/>
									<div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-12 bg-linear-to-t from-black/0 to-transparent transition group-hover:from-black/60">
										<p className="text-white p-2 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 delay-75">
											{album.title}
										</p>
									</div>
								</div>
							</React.Fragment>
						))}
						{data.map((item, index) => (
							<LightGallery
								key={index}
								onInit={(e) => onInit(e, index)}
								elementClassNames={"gallery"}
								dynamic={true}
								plugins={[lgZoom, lgThumbnail]}
								dynamicEl={item.gallery?.map((item) => ({
									src: item.meta.src,
									thumb: item.meta.src,
								}))}
							></LightGallery>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
