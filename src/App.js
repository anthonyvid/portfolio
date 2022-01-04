import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { useState, useEffect } from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Track from "./components/track/Track";

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
			<Navbar scrollPos={scrollPos} />
			<About scrollPos={scrollPos} />
			<div className="master-content-wrap">
				<div className="track-box">
					<Track />
				</div>
				<div className="content-box">
					<Skills />
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
