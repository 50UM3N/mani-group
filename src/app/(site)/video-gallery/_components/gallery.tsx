"use client";
import LightGallery from "lightgallery/react";
// Import plugins
import lgVdeo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";
import { VideoGalleryInfo } from "@/types/api/video-gallery";
import { cn } from "@/lib/utils";
import { IconPlayerPlay } from "@tabler/icons-react";
const Gallery: React.FC<{ data: VideoGalleryInfo[]; className?: string }> = ({
	data,
	className,
	...rest
}) => {
	return (
		<div className={cn("", className)} {...rest}>
			<LightGallery
				plugins={[lgZoom, lgVdeo]}
				speed={500}
				elementClassNames="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
			>
				{data.map((item, index) => (
					<a
						key={index}
						className="relative overflow-hidden group cursor-pointer hover:shadow-2xs"
						data-lg-size="1280-720"
						data-pinterest-text="Pin it3"
						data-tweet-text="lightGallery slide  4"
						data-video={JSON.stringify({
							source: [
								{
									src: item.video.file,
									type: "video/mp4",
								},
							],

							attributes: { preload: false, controls: true, playsinline: true },
						})}
						data-poster={item.video.thumbnail.meta.src}
						data-sub-html="Peck Pocketed' by Kevin Herron | Disney Favorite"
					>
						<Image
							className="aspect-square object-cover w-full"
							src={item.video.thumbnail.meta}
							alt={item.title}
						/>
						<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white rounded-full border-4 border-white p-2">
							<IconPlayerPlay size={40} />
						</div>
						<div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-12 bg-linear-to-t from-black/0 to-transparent transition group-hover:from-black/60">
							<p className="text-white p-2 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 delay-75">
								{item.title}
							</p>
						</div>
					</a>
				))}
			</LightGallery>
		</div>
	);
};

export default Gallery;
