import React from "react";

const HeroSection = () => {
	return (
		<div className="pt-40 px-sectionpxsm">
			<p className="text-[45px] leading-none text-sand">
				Unleash your startup's first move with our rapid design magic!
			</p>
			<p className="mt-8 text-xl font-light text-slate-300">
				Discover a new way to kickstart your business. No more
				freelancer hassles—just a simple subscription, unlimited
				revisions, and fast execution.
			</p>

			{/* Main Button */}
			<div className="flex items-center justify-center py-4 text-lg bg-primary mt-14 rounded-xl">
				Book a call
			</div>
		</div>
	);
};

export default HeroSection;
