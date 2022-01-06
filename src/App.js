import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { useState, useEffect } from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Track from "./components/track/Track";
import AnimatedCursor from "react-animated-cursor";

function App() {
	const [scrollPos, setScrollPos] = useState(0.0);
	const handleScroll = () => {
		const position = window.scrollY;
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
			<AnimatedCursor
				innerSize={8}
				outerSize={8}
				color="95, 115, 103"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={2}
			/>
			<Navbar scrollPos={scrollPos} />
			<About scrollPos={scrollPos} />
			<Skills />
			<Projects />
		</div>
	);
}

export default App;
