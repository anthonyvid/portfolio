import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { useState, useEffect } from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import { BackgroundLines } from "./components/animations/BackgroundLines";
import $ from "jquery";

function App() {
	const [scrollPos, setScrollPos] = useState(0.0);
	const [reachedBottom, setReachedBottom] = useState(false);
	const [reachedTop, setReachedTop] = useState(false);

	window.onbeforeunload = function () {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const handleScroll = (e) => {
		const position = window.scrollY;
		setScrollPos(position);

		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setReachedBottom(true);
		} else {
			setReachedBottom(false);
		}

		if ($(window).scrollTop() === 0) {
			setReachedTop(true);
		} else {
			setReachedTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="page-container">
			<div
				className="lines-wrap"
				data-aos="fade"
				data-aos-easing="ease-in-back"
				data-aos-delay="500"
			>
				<BackgroundLines
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
			{/* <AnimatedCursor
				innerSize={8}
				outerSize={8}
				color="95, 115, 103"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={2}
			/> */}
			<Navbar scrollPos={scrollPos} reachedTop={reachedTop} />
			<About scrollPos={scrollPos} />
            {/* <div className="skills-scroll-pos"></div> */}
			<Skills />
			<Projects />
			<Contact />
			<Footer reachedBottom={reachedBottom} />
		</div>
	);
}

export default App;
