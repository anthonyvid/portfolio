import Lottie from "react-lottie";
import animationData from "../../lotties/scroll-down.json";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ScrollMobile = ({ scrollPos }) => {
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
				.getElementById("scroll_down_mobile")
				.setAttribute("data-aos", "fade");
			setScrollIndicator(true);
		}
	} else {
		if (scrollIndicator) {
			document
				.getElementById("scroll_down_mobile")
				.removeAttribute("data-aos");
			setScrollIndicator(false);
		}
	}

	return (
		<div id="scroll_down_mobile">
			<Lottie options={defaultOptions} height={70} width={70} />
		</div>
	);
};
