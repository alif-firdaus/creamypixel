import React from "react";

import Marquee from "react-fast-marquee";

// Import Icons
import sparkle from "../assets/icons/sparkle.svg";

const AboutSection = () => {
	return (
		<div className="mt-32">
			{/* Marquee Col 1 */}
			<Marquee
				className="flex items-center flex-shrink-0 h-20 whitespace-nowrap"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
					maskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
				}}
			>
				{/* Product Design */}
				<div className="text-[64px] w-fit text-slate-300">
					Product Design
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* Web Development */}
				<div className="text-[64px] w-fit text-slate-300">
					Web Development
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* UI/UX Design */}
				<div className="text-[64px] w-fit text-slate-300">
					UI/UX Design
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* UX Strategy */}
				<div className="text-[64px] w-fit text-slate-300">
					UX Strategy
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* Product Design */}
				<div className="text-[64px] w-fit text-slate-300">
					Product Design
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* Web Development */}
				<div className="text-[64px] w-fit text-slate-300">
					Web Development
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* U?UX Design */}
				<div className="text-[64px] w-fit text-slate-300">
					UI/UX Design
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />

				{/* UX Strategy */}
				<div className="text-[64px] w-fit text-slate-300">
					UX Strategy
				</div>

				{/* Divider */}
				<img src={sparkle} alt="divider" className="w-7 h-7 mx-7" />
			</Marquee>

			<div className="mt-32 px-sectionpxsm">
				<p className="text-4xl leading-none text-sand">
					When it comes to making your first move, we've got your
					back!
				</p>
				<p className="mt-10 text-xl font-extralight text-slate-300">
					Creamypixel is a Design Company Agency helping startups to
					unlock their moves. Say goodbye to the hassle of wasting
					your time finding for freelancers and hello to
					lightning-fast execution.
				</p>
				<p className="mt-5 text-xl font-extralight text-slate-300">
					With us, it's all about prioritizing your business goals and
					getting things done quickly.{" "}
					<span className="italic text-primary">'pssst'</span> we
					always try to deliver results that go beyond expectations!
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
