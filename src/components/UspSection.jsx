import React from "react";

// Import Icons
import quote from "../assets/icons/quote.svg";

const UspSection = () => {
	return (
		<div className="w-screen mt-52 px-sectionpxsm bg-bgbase">
			<p className="text-[40px] leading-none text-sand">
				We provide in-house senior quality, freelancer cost
			</p>

			<div className="flex flex-col gap-5 mt-12">
				<div className="flex flex-col w-full px-5 py-5 rounded-xl bg-bgsecondary h-fit">
					<div className="px-3 py-2 rounded-lg bg-primary h-fit w-fit">
						<p className="text-3xl">😐</p>
					</div>
					<p className="text-[20px] font-light mt-7 text-sand">
						A senior designer will cost you at least $120k a year.
						That does not include hiring and onboarding costs.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 py-5 rounded-xl bg-bgsecondary h-fit">
					<div className="px-3 py-2 rounded-lg bg-primary h-fit w-fit">
						<p className="text-3xl">😕</p>
					</div>
					<p className="text-[20px] font-light mt-7 text-sand">
						Hiring a freelancer can be cost-effective, but it comes
						with a trade-off in commitment and reliability.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 pb-8 pt-7 rounded-xl bg-primary h-fit">
					<img src={quote} alt="quote" className="w-9" />
					<p className="mt-4 text-4xl font-medium text-black">
						With our design subscription, you get the best of both
						worlds.
					</p>
				</div>
			</div>
		</div>
	);
};

export default UspSection;
