import React from "react";

// Import CSS Styling
import "./input.css";

// Import Sections
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-section";
import AboutSection from "./components/About-section";
import SubscriptionSection from "./components/Subscription-section";
import FaqSection from "./components/Faq-section";
import GetintouchSection from "./components/Getintouch-section";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="bg-bgbase">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<SubscriptionSection />
			<FaqSection />
			<GetintouchSection />
			<Footer />
		</div>
	);
};

export default App;
