"use server";

import { SEOData } from "@/types/index.type";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function getMetadata(seoData?: SEOData): Promise<Metadata> {
  const headersList = await headers();
  const fullUrl = headersList.get("referer") as string;
  const site = new URL(seoData?.base_url || "http://global.com");
  const canonical_url = seoData?.canonical_url ? seoData.canonical_url : fullUrl;
  return {
    metadataBase: site,
    title: seoData?.meta_title ? `${seoData.meta_title}` : "IQ City Medical College: Admissions, Courses & Facilities",
    description:
      seoData?.meta_description ||
      "Explore IQ City Medical College for MBBS, MD/MS courses. Discover admissions details, course offerings, and our state-of-the-art facilities.",
    keywords: seoData?.meta_keywords,
    robots: seoData?.meta_robots,
    authors: [{ name: "IQ City Medical College" }],
    creator: "IQ City Medical College",
    publisher: "IQ City Medical College",
    alternates: {
      canonical: canonical_url,
    },
    openGraph: {
      title: seoData?.og_title,
      description: seoData?.og_description,
      images: seoData?.og_image ? [seoData?.og_image] : [],
      type: (seoData?.og_type as any) || "website",
      locale: seoData?.og_locale,
    },
    twitter: {
      card: seoData?.twitter_card_type as "summary" | "summary_large_image" | "app" | "player",
      title: seoData?.twitter_title,
      description: seoData?.twitter_description,
      images: seoData?.twitter_image ? [seoData?.twitter_image] : [],
    },
  };
}
