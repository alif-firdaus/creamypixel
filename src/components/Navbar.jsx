import React from "react";

import { useState } from "react";

// Import React Router
import { useNavigate } from "react-router";

// Import Icons
import logo from "../assets/icons/logo.svg";

// Import HeroIcons
import {
	Bars2Icon,
	XMarkIcon,
	ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
	// useNavigate
	const navigate = useNavigate();

	// Navbar Links
	const navLinks = [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "Service",
			href: "/service",
		},
		{
			text: "Projects",
			href: "/projects",
		},
		{
			text: "Subscription",
			href: "/subscription",
		},
	];

	// Responsive Navbar
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-screen flex items-center justify-between border-b-[1px] border-slate-50 border-opacity-20">
			<div className="z-10 flex items-center justify-between w-screen py-6 bg-bgbase px-sectionpxsm">
				{/* Navbar Title */}
				<a href="/">
					<div className="flex items-center justify-between gap-4 cursor-pointer text-sand">
						<img src={logo} alt="logo" className="w-6" />
						<p className="text-[25px] font-normal">creamypixel</p>
					</div>
				</a>

				{/* Hamburger Menu */}
				<div
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className="flex bg-bgbase justify-center border-[1px] w-[40px] h-[40px] rounded-full border-slate-50 border-opacity-20 items-center cursor-pointer"
				>
					{isOpen ? (
						<XMarkIcon className="w-6 stroke-[1.3px] text-sand" />
					) : (
						<Bars2Icon className="w-6 stroke-[1.3px] text-sand" />
					)}
				</div>
			</div>

			{/* Navbar Links */}
			<div
				className={`fixed flex pb-12 w-full flex-col px-sectionpxsm h-fit bg-bgbase border-t-[1px] border-slate-50 border-opacity-20
            ${
				isOpen
					? "top-[88px] left-0 transition-all duration-700 ease-in-out"
					: "-top-full left-0 transition-all duration-1000 ease-in-out"
			}`}
			>
				{navLinks.map((option, index) => (
					<div key={index}>
						<a
							href={option.href}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							<div className="flex items-center justify-between w-full py-6 text-lg font-light text-sand border-b-[1px] border-slate-50 border-opacity-20 duration-300">
								{option.text}
								<ArrowUpRightIcon className="w-5 stroke-[1.3px] text-sand" />
							</div>
						</a>
					</div>
				))}
				<div className="flex items-center justify-center py-4 mt-12 text-lg bg-sand rounded-xl">
					Let's talk 👋
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
