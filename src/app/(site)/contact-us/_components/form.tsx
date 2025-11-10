import React from "react";

const Form = () => {
	return (
		<form className="space-y-4">
			<input
				type="text"
				placeholder="Your Name"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<input
				type="text"
				placeholder="Your Mobile"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<input
				type="email"
				placeholder="Your Email"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<input
				type="text"
				placeholder="Project"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<textarea
				placeholder="Your Message"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			></textarea>
			<div className="lg:col-span-3 col-span-1">
				<input type="checkbox" id="consent" className="mr-2" />
				<label htmlFor="consent" className="text-white text-sm select-none">
					By providing Mani Group your contact information, you acknowledge and
					agree to our Privacy Policy and consent to receiving marketing
					communications, including through automated calls, texts, and emails,
					some of which may use artificial or prerecorded voices. This consent
					isn’t necessary for purchasing any products or services and you may
					opt out at any time. To opt out from texts, you can reply, ‘stop’ at
					any time. To opt out from emails, you can click on the unsubscribe
					link in the emails. Message and data rates may apply.
				</label>
			</div>
			<button className="mani-button text-center">Submit</button>
		</form>
	);
};

export default Form;
