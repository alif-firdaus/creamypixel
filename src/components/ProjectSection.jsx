import React from "react";

// Import Images
import mockup from "../assets/images/fixit mockup 2.jpg";

// Import HeroIcons
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const ProjectSection = () => {
	return (
		<>
			{/* Title */}
			<div className="mt-48 px-sectionpxsm">
				<p className="text-[40px] leading-none text-sand">
					We bring your vision and ideas to life!
				</p>
			</div>

			<div className="flex flex-col gap-5">
				{/* Project 1 */}
				<div className="w-screen mt-16">
					<img src={mockup} alt="mockup" className="w-full" />
				</div>

				{/* Description */}
				<div className="flex flex-col mt-7 text-sand px-sectionpxsm">
					{/* Product Name */}
					<p className="text-[28px]">usereportify</p>
					{/* Product Description */}
					<p className="mt-4 text-lg font-extralight text-slate-300">
						Rapid AI-powered report generator
					</p>
					{/* Product Tags */}
					<div className="flex items-center gap-[10px] mt-1">
						<p className="text-lg font-extralight text-slate-300">
							Web Design
						</p>
						<div className="w-[4px] h-[4px] rounded-full bg-slate-300"></div>
						<p className="text-lg font-extralight text-slate-300">
							Development
						</p>
						<div className="w-[4px] h-[4px] rounded-full bg-slate-300"></div>
						<p className="text-lg font-extralight text-slate-300">
							SAAS
						</p>
					</div>

					{/* Product Link */}
					<div className="flex items-center py-2 border-b-[0.8px] gap-4 border-slate-300 mt-8 w-fit">
						<p className="text-lg font-light text-sand">
							Visit Website
						</p>
						<ArrowUpRightIcon className="w-[18px] text-primary" />
					</div>
				</div>

				{/* Project 2 */}
				<div className="w-screen mt-28">
					<img src={mockup} alt="mockup" className="w-full" />
				</div>

				{/* Description */}
				<div className="flex flex-col mt-7 text-sand px-sectionpxsm">
					{/* Product Name */}
					<p className="text-[28px]">usereportify</p>
					{/* Product Description */}
					<p className="mt-4 text-lg font-extralight text-slate-300">
						Rapid AI-powered report generator
					</p>
					{/* Product Tags */}
					<div className="flex items-center gap-[10px] mt-1">
						<p className="text-lg font-extralight text-slate-300">
							Web Design
						</p>
						<div className="w-[4px] h-[4px] rounded-full bg-slate-300"></div>
						<p className="text-lg font-extralight text-slate-300">
							Development
						</p>
						<div className="w-[4px] h-[4px] rounded-full bg-slate-300"></div>
						<p className="text-lg font-extralight text-slate-300">
							SAAS
						</p>
					</div>

					{/* Product Link */}
					<div className="flex items-center py-2 border-b-[0.8px] gap-4 border-slate-300 mt-8 w-fit">
						<p className="text-lg font-light text-sand">
							Visit Website
						</p>
						<ArrowUpRightIcon className="w-[18px] text-primary" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectSection;
