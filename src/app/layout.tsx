// src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./_assets/globals.css";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteLoader from "./_components/site-loader";
import { getMetadata } from "./_utils";
import { cn } from "../lib/utils";
import Footer from "./_layout/footer";
import Header from "./_layout/header";
import SchemaOrg from "./_components/schema-org";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import { MenuType } from "@/types/api/menu.type";
import http from "@/lib/http";
import { SiteSettingsInfo } from "@/types/api/site-settings.type";
export const dynamic = "force-dynamic";

const raleway = Raleway({
	variable: "--font-raleway",
});
const cormorant_garamond = Cormorant_Garamond({
	variable: "--font-cormorant-garamond",
});
export async function generateMetadata(): Promise<Metadata> {
	return getMetadata();
}
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationSchema: any = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "IQ City Medical College",
		url: "https://medical.iqcity.in",
		logo: "https://medical.iqcity.in/logo.png",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "(+91) 003 2563 2587",
			contactType: "customer service",
			email: "info@iqcitymedicalcollege.com",
			areaServed: "IN",
			availableLanguage: ["English", "Bengali"],
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Durgapur",
			addressRegion: "West Bengal",
			addressCountry: "IN",
		},
	};
	const menu: MenuType = await http(`/menus/9`);

	const siteSettings: SiteSettingsInfo = await http(`/site-settings`);
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					raleway.variable,
					cormorant_garamond.variable,
					"overflow-x-hidden",
				)}
			>
				<SchemaOrg schema={organizationSchema} />
				<SiteLoader />
				<NextTopLoader color="#71717a" />
				<Header menu={menu} siteSettings={siteSettings} />
				{children}
				<Footer menu={menu} siteSettings={siteSettings} />
				<GoogleAnalytics gaId="G-3XTYFQ8K5V" />
			</body>
		</html>
	);
}
