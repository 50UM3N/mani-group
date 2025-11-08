import React from "react";
import Link from "next/link";

const NotFound = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
				<div className="max-w-md w-full text-center">
					<div>
						<p className="mt-4 text-lg">
							The page you are looking for doesn{"'"}t exist or may have been
							moved to another location.
						</p>
					</div>

					<div className="mt-8 flex justify-center gap-4">
						<Link
							href="/"
							className="px-6 py-2 bg-color-1 text-white rounded-md hover:scale-95 transition"
						>
							Back
						</Link>
						<Link
							href="/"
							className="px-6 py-2 bg-color-4 text-white rounded-md hover:scale-95 transition"
						>
							Home Page
						</Link>
					</div>

					
				</div>
			</div>
		</>
	);
};

export default NotFound;
