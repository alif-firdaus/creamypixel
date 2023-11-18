import React from "react";

// Import Animations
import subscription from "../assets/animations/subscription.gif";
import board from "../assets/animations/board.gif";

const HowitworkSection = () => {
	return (
		<div className="w-screen mt-52 px-sectionpxsm bg-bgbase">
			<p className="text-[40px] leading-none text-sand">
				Getting started is simple and super quick
			</p>

			<div className="flex flex-col gap-5 mt-12">
				<div className="flex flex-col w-full px-5 pt-6 pb-5 rounded-xl bg-bgsecondary h-fit">
					<img
						src={subscription}
						alt="subscription"
						className="w-20"
					/>
					<p className="text-[25px] mt-7 text-sand">Choose a plan</p>
					<p className="text-[18px] font-light mt-3 text-sand">
						You can choose a subscription plan that suits your
						needs. No hidden fees, pay the same fixed price each
						month.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 pt-6 pb-5 rounded-xl bg-bgsecondary h-fit">
					<img src={board} alt="board" className="w-20" />
					<p className="text-[25px] mt-7 text-sand">
						Project's board
					</p>
					<p className="text-[18px] font-light mt-3 text-sand">
						You will get access to Notion where you can easily
						create design tasks, and you can add as many requests
						you'd like.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 pt-6 pb-5 rounded-xl bg-bgsecondary h-fit">
					<img
						src={subscription}
						alt="subscription"
						className="w-20"
					/>
					<p className="text-[25px] mt-7 text-sand">
						Lightning-fast delivery
					</p>
					<p className="text-[18px] font-light mt-3 text-sand">
						Our average turnaorund time is 2 days within Monday to
						Friday. You can always prioriotize tasks accordingly.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 pt-6 pb-5 rounded-xl bg-bgsecondary h-fit">
					<img
						src={subscription}
						alt="subscription"
						className="w-20"
					/>
					<p className="text-[25px] mt-7 text-sand">
						Satisfaction guaranteed
					</p>
					<p className="text-[18px] font-light mt-3 text-sand">
						We really appreciate your input, and we also commit that
						we deliver results that go beyond expectations!
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowitworkSection;
