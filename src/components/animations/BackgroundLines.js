import animationData from "../../lotties/background-lines.json";
import Lottie from "react-lottie";

export const BackgroundLines = () => {
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
			<Lottie options={defaultOptions} />
		</div>
	);
};
