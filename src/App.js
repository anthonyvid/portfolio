import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { useState, useEffect } from "react";

function App() {
	const sbHeight =
		window.innerHeight * (window.innerHeight / document.body.offsetHeight);
	// const scrollCircleHeight = document.querySelector(".scroll-circle");
	const [scrollPos, setScrollPos] = useState(0);
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
	console.log(scrollPos);
	return (
		<div className="page-container">
			<div
				className="scroll-circle"
				style={{
					top: scrollPos,
				}}
			></div>
			<Navbar />
			<About />
		</div>
	);
}

export default App;
