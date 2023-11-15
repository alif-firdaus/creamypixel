import React from "react";

// Import CSS Styling
import "./input.css";

// Import Sections
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import FaqSection from "./components/FaqSection";
import GetintouchSection from "./components/GetintouchSection";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="bg-bgbase">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<FaqSection />
			<GetintouchSection />
			<Footer />
		</div>
	);
};

export default App;
