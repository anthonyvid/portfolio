import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { useState, useEffect } from "react";

function App() {
	const [scrollPos, setScrollPos] = useState(0.0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPos(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="page-container">
			<Navbar scrollPos={scrollPos} />
			<About />
		</div>
	);
}

export default App;
