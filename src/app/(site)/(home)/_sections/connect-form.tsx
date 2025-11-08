import React from "react";
import bg1 from "@/app/_assets/bg/bg1.png";
import Image from "next/image";
const ConnectForm = () => {
	return (
		<section className="relative m-section p-section mb-0">
			<Image
				src={bg1}
				alt="Background"
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			/>
			<div className="mani-title-wrapper">
				<h2 className="mani-title text-white">
					LET’S CONNECT
				</h2>
			</div>
			<div className="container">
				<form>
					<div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-8">
						<div>
							<input
								type="text"
								className="border-2 border-white px-4 py-2 w-full focus:outline-none placeholder:text-white/60 text-white"
								placeholder="Your Name *"
							/>
						</div>
						<div>
							<input
								type="email"
								className="border-2 border-white px-4 py-2 w-full focus:outline-none placeholder:text-white/60 text-white"
								placeholder="Your Email *"
							/>
						</div>
						<div>
							<input
								type="text"
								className="border-2 border-white px-4 py-2 w-full focus:outline-none placeholder:text-white/60 text-white"
								placeholder="Your Mobile *"
							/>
						</div>
						<div className="lg:col-span-3 col-span-1">
							<input type="checkbox" id="consent" className="mr-2" />
							<label htmlFor="consent" className="text-white text-sm">
								By providing Mani Group your contact information, you
								acknowledge and agree to our Privacy Policy and consent to
								receiving marketing communications, including through automated
								calls, texts, and emails, some of which may use artificial or
								prerecorded voices. This consent isn’t necessary for purchasing
								any products or services and you may opt out at any time. To opt
								out from texts, you can reply, ‘stop’ at any time. To opt out
								from emails, you can click on the unsubscribe link in the
								emails. Message and data rates may apply.
							</label>
						</div>
					</div>
					<div className="flex justify-center">
						<button className="mani-button text-center">Submit</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ConnectForm;
