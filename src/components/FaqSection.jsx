import React from "react";

import { useState } from "react";

// Import Accordion
import Accordion from "./Accordion";

function FaqSection() {
	// FAQ Contents
	const [list] = useState([
		{
			question: "What makes us different?",
			answer: (
				<>
					<p>
						creamypixel stands out in the industry due to our
						commitment to lightning-fast execution, unlimited
						requests, and a simple subscription model.
					</p>
					<p className="mt-4">
						With a sharp focus on delivering projects with
						exceptional speed and efficiency, we have streamlined
						our processes, assembled a dedicated team, and
						implemented innovative technology to ensure that
						deadlines are not just met, but exceeded.
					</p>
				</>
			),
		},
		{
			question: "Do you work with clients in different timezones?",
			answer: (
				<>
					<p>
						We have extensive experience working remotely with
						clients in various timezones. Our team excels at
						coordinating and scheduling meetings to accommodate
						clients' time preferences and availability across
						different regions.
					</p>
					<p className="mt-4">
						We prioritize clear and timely communication, leveraging
						various collaboration tools and platforms to maintain
						constant connectivity and streamline project workflows.
					</p>
				</>
			),
		},
		{
			question: "What if I only have a single request?",
			answer: (
				<>
					<p>
						That's fine. you can pause your subscription when
						finished and return when you have additional needs.
						There's no need to let the remainder of your
						subscription go to waste.
					</p>
				</>
			),
		},
		{
			question: "Can I upgrade or downgrade my subscription plan?",
			answer: (
				<>
					<p>
						Absolutely! just let us know, and the updated
						subscription plan will become valid starting from the
						following month.
					</p>
				</>
			),
		},
		{
			question: "What tools do you use for designing?",
			answer: (
				<>
					<p>
						Most design requests are designed using Figma, since we
						can collaborate on our own workspace.
					</p>
				</>
			),
		},
		{
			question: "What if I don't like the results?",
			answer: (
				<>
					<p>
						No worries! we truly value your inputs, we provide
						unlimited design request to align with your company's
						goals.
					</p>
				</>
			),
		},
		{
			question: "Do you offer refunds?",
			answer: (
				<>
					<p>
						If you haven't requested any work, we offer partial
						refund of 60% due to the time it will take us to perform
						the administrative work to cancel your subscription and
						undo the work.
					</p>
					<p className="mt-4">
						We don't offer refunds if you are unhappy with the
						results. But we are happy to work with you to ensure the
						design is meeting your needs, which is why we offer
						unlimited revisions and iterations.
					</p>
				</>
			),
		},
	]);

	return (
		<>
			<div className="pb-64 text-white mt-52 px-sectionpxsm">
				<p className="text-[40px] leading-none text-sand">
					Frequently asked questions
				</p>

				{/* Accordion */}
				<div className="flex flex-col gap-4 mt-14">
					{/* Begin Accordion Item */}
					{list.map((item, key) => (
						<Accordion key={key} data={item} />
					))}
					{/* End Accordion Item */}
				</div>
			</div>
		</>
	);
}

export default FaqSection;
