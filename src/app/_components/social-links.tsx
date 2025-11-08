import { cn } from "@/lib/utils";
import { SocialLinksInfo } from "@/types/api/site-settings.type";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
	IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SocialLinks: React.FC<
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> & { links?: SocialLinksInfo; size?: number }
> = ({ className, size = 24, links, ...rest }) => {
	return (
		<div className={cn("flex items-center gap-4", className)} {...rest}>
			{links?.facebook && (
				<Link target="_blank" href={links.facebook}>
					<IconBrandFacebook size={size} />
				</Link>
			)}
			{links?.x && (
				<Link target="_blank" href={links.x}>
					<IconBrandX size={size} />
				</Link>
			)}
			{links?.instagram && (
				<Link target="_blank" href={links.instagram}>
					<IconBrandInstagram size={size} />
				</Link>
			)}
			{links?.youtube && (
				<Link target="_blank" href={links.youtube}>
					<IconBrandYoutube size={size} />
				</Link>
			)}
		</div>
	);
};

export default SocialLinks;
