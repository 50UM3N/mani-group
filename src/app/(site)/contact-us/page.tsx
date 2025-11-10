import Image from "next/image";
import bg2 from "@/app/_assets/bg/bg2.png";
import InnerBanner from "@/app/_components/inner-banner";
import { Metadata } from "next";
import http from "@/lib/http";
import { SEOData } from "@/types/index.type";
import { getMetadata } from "@/app/_utils";
import { ContactUsPageInfo } from "@/types/api/contact-us.type";
import Form from "./_components/form";

export async function generateMetadata(): Promise<Metadata> {
	const data: SEOData = await http(`/seo/page/contact-us`);
	return getMetadata(data);
}
const Page = async () => {
	const data: ContactUsPageInfo = await http(`/page/contact-us`);
	return (
		<>
			<InnerBanner
				image={data.featured_image}
				title={data.title}
				description={data.sub_title}
			/>
			<section className="m-section relative">
				<Image
					src={bg2}
					alt="Background"
					className="absolute top-0 left-0 w-full h-full object-cover -z-20"
				/>
				<div className="container">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
						<div className="space-y-8 p-section">
							<div>
								<h2 className="text-3xl font-bold"> GET IN TOUCH</h2>
								<p>
									Use our contact form for all information request or contact us
									directly using the contact Information given below.
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold">CORPORATE OFFICE</h2>
								<p>
									9-IT Chambers, Mani Square, 164/1 Maniktala Main Road, Kolkata
									700054, West Bengal, India
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold">EMAIL</h2>
								<p>malladmin@mani-group.com</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold">PHONE NUMBER</h2>
								<p>+91 9831 489 780 | 033 4020 8176</p>
							</div>
						</div>
						<div className="bg-color-2 text-white p-8">
							<h3 className="text-2xl mb-4">WE ARE EXCITED TO HEAR YOU OUT</h3>
							<Form />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
