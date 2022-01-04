import Lottie from "react-lottie";
import animationData from "../../lotties/scroll3.json";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Scroll({ scrollPos }) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const [scrollIndicator, setScrollIndicator] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	if (scrollPos > 500) {
		if (!scrollIndicator) {
			document
				.getElementById("scroll_down")
				.setAttribute("data-aos", "fade");
			setScrollIndicator(true);
		}
	} else {
		if (scrollIndicator) {
			document.getElementById("scroll_down").removeAttribute("data-aos");
			setScrollIndicator(false);
		}
	}

	return (
		<div id="scroll_down">
			<Lottie options={defaultOptions} height={300} width={200} />
		</div>
	);
}

export default Scroll;
