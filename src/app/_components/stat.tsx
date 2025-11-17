import Image from "next/image";
import m1 from "@/app/_assets/mock/m1.png";

const Stat = () => {
	return (
		<section className="m-section">
			<div className="container">
				<div className="grid grid-cols-4">
					<div className="aspect-square relative flex items-center justify-center">
						<Image
							src={m1}
							alt="Commercial Image"
							className="absolute inset-0 object-cover w-full h-full -z-20"
						/>
						<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
						<div className="text-white">
							<p className="font-semibold text-4xl text-center mb-2">1</p>
							<p className="font-bold text-lg text-center">CONGLOMERATE</p>
						</div>
					</div>
					<div className="aspect-square relative flex items-center justify-center">
						<Image
							src={m1}
							alt="Commercial Image"
							className="absolute inset-0 object-cover w-full h-full -z-20"
						/>
						<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
						<div className="text-white">
							<p className="font-semibold text-4xl text-center mb-2">1</p>
							<p className="font-bold text-lg text-center">CONGLOMERATE</p>
						</div>
					</div>
					<div className="aspect-square relative flex items-center justify-center">
						<Image
							src={m1}
							alt="Commercial Image"
							className="absolute inset-0 object-cover w-full h-full -z-20"
						/>
						<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
						<div className="text-white">
							<p className="font-semibold text-4xl text-center mb-2">1</p>
							<p className="font-bold text-lg text-center">CONGLOMERATE</p>
						</div>
					</div>
					<div className="aspect-square relative flex items-center justify-center">
						<Image
							src={m1}
							alt="Commercial Image"
							className="absolute inset-0 object-cover w-full h-full -z-20"
						/>
						<div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
						<div className="text-white">
							<p className="font-semibold text-4xl text-center mb-2">1</p>
							<p className="font-bold text-lg text-center">CONGLOMERATE</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stat;
