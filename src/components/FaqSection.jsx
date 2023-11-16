import React from "react";

import { useState } from "react";

// Import Accordion
import Accordion from "./Accordion";

function FaqSection() {
	// FAQ Contents
	const [list] = useState([
		{
			question: "What makes us different?",
			answer: "this is the answer for question 1",
		},
		{
			question: "Question 2",
			answer: "this is the answer for question 2",
		},
		{
			question: "What if I don't like the results?",
			answer: "No worries! we truly value your inputs, we provide unlimited design request to align with your company's goals.",
		},
		{
			question: "What if I don't like the results?",
			answer: "No worries! we truly value your inputs, we provide unlimited design request to align with your company's goals.",
		},
		{
			question: "What if I don't like the results?",
			answer: "No worries! we truly value your inputs, we provide unlimited design request to align with your company's goals.",
		},
		{
			question: "What if I don't like the results?",
			answer: "No worries! we truly value your inputs, we provide unlimited design request to align with your company's goals.",
		},
	]);

	return (
		<>
			<div className="pb-64 mt-48 text-white px-sectionpxsm">
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
