import React from "react";

const UspSection = () => {
	return (
		<div className="w-screen pt-20 mt-40 pb-28 px-sectionpxsm bg-primary">
			<p className="text-[40px] leading-none black">
				We provide in-house senior quality, freelancer cost
			</p>

			<div className="flex flex-col gap-5 mt-12">
				<div className="flex flex-col w-full px-5 py-5 rounded-xl bg-secondary h-fit">
					<div className="px-4 py-3 bg-white rounded-full bg-opacity-20 h-fit w-fit">
						<p className="text-4xl">😐</p>
					</div>
					<p className="mt-4 text-xl">
						A senior designer will cost you at least $120k a year.
						That does not include hiring and onboarding costs.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 py-5 rounded-xl bg-secondary h-fit">
					<div className="px-4 py-3 bg-white rounded-full bg-opacity-20 h-fit w-fit">
						<p className="text-4xl">😕</p>
					</div>
					<p className="mt-4 text-xl">
						A freelancer is indeed cheaper, but less committed and
						reliable.
					</p>
				</div>

				<div className="flex flex-col w-full px-5 py-5 rounded-xl bg-secondary h-fit">
					<div className="px-4 py-3 bg-white rounded-full bg-opacity-20 h-fit w-fit">
						<p className="text-4xl">🤩</p>
					</div>
					<p className="mt-4 text-xl">
						Luckily, you don't have to choose between the opposites.
						With our design subscription, you get the best of both
						worlds.
					</p>
				</div>
			</div>
		</div>
	);
};

export default UspSection;
