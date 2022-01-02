import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/person.json";

function Person() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={400} width={300} />
		</div>
	);
}

export default Person;
