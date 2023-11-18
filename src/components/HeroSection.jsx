import React from "react";

// Import HeroIcons
import { HeartIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
	return (
		<div className="pt-40 px-sectionpxsm">
			<p className="text-[45px] leading-none text-sand">
				Unleash your startup's{" "}
				<span className="font-medium text-primary">first move</span>{" "}
				with our rapid design magic!
			</p>
			<p className="mt-8 text-xl font-light text-slate-300">
				Discover a new way to kickstart your business. No more
				freelancer hassles—just a simple subscription, unlimited
				requests, and fast execution.
			</p>

			{/* Main Button */}
			<div className="flex items-center justify-center pt-5 pb-6 text-xl text-black bg-primary mt-14 rounded-xl">
				Get started
			</div>
			<div className="flex items-center justify-center gap-3 mt-8">
				<p className="text-lg font-light text-center text-slate-400">
					results you'll
				</p>
				<HeartIcon className="w-5 text-center text-pink-500" />
				<p className="text-lg font-light text-center text-slate-400">
					guaranteed!
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
