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
				placeholder="Interested In"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<input
				type="file"
				placeholder="Resume"
				className="bg-white px-4 w-full py-2 placeholder:text-zinc-400 "
			/>
			<button className="mani-button text-center">Apply</button>
		</form>
	);
};

export default Form;
