import { getMetadata } from "@/app/_utils";
import http from "@/lib/http";
import { PageProps, SEOData } from "@/types/index.type";
import { Metadata } from "next";
import { CommercialInfo } from "@/types/api/project.type";
import Slug from "../../_components/slug";
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const slug = (await params)?.slug;
	const data: SEOData = await http(`/seo/commercial/${slug}`);
	return getMetadata(data);
}

const Page = async ({ params }: PageProps<{ slug: string }>) => {
	const slug = (await params)?.slug;
	const data: CommercialInfo = await http(`/page/commercial/by-slug/${slug}`);
	return <Slug data={data} />;
};

export default Page;
