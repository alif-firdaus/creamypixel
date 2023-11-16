import React from "react";

// Import CSS Styling
import "./input.css";

// Import Sections
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import UspSection from "./components/UspSection";
import GetstartedSection from "./components/GetstartedSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="bg-bgbase">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<UspSection />
			<GetstartedSection />
			<FaqSection />
			<Footer />
		</div>
	);
};

export default App;
