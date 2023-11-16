import React from "react";

import { useState } from "react";

// Import HeroIcons
import { PlusIcon } from "@heroicons/react/24/outline";

const Accordion = (props) => {
	const [item, setItem] = useState(props.data);

	const handletoggleActive = () => {
		let newActive = item.active === 1 ? 0 : 1;
		setItem({ ...item, active: newActive });
	};

	return (
		<div
			className={`p-4 rounded-lg bg-bgsecondary group transition-all ease-in-out duration-300 ${
				item.active === 1 ? "is-active" : ""
			}`}
		>
			<div className="flex items-start justify-between">
				<div className="text-lg text-sand group-[.is-active]:text-primary transition-all ease-in-out duration-300">
					{item.question}
				</div>
				<div className="flex items-start">
					<PlusIcon
						className="w-5 pt-1 text-sand group-[.is-active]:rotate-45 transition-all ease-in-out duration-500"
						onClick={handletoggleActive}
					/>
				</div>
			</div>
			<div className="overflow-hidden text-lg max-h-0 font-extralight text-slate-300 group-[.is-active]:max-h-[100px] group-[.is-active]:mt-4 transition-all ease-in-out duration-300">
				{item.answer}
			</div>
		</div>
	);
};

export default Accordion;
