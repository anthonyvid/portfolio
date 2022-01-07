import "./about.css";
import { Scroll } from "../animations/Scroll";
import { ScrollMobile } from "../animations/ScrollMobile";
import Person from "../person/Person";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About({ scrollPos }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className="master-content">
			<div
				className="hero"
				data-aos="fade-down"
				data-aos-easing="ease-in-back"
				data-aos-delay="300"
			>
				<Content />
				<div className="person">
					<Person />
				</div>
			</div>
			<div className="action">
				<Scroll scrollPos={scrollPos} />
				<ScrollMobile scrollPos={scrollPos} />
			</div>
		</section>
	);
}

const Content = () => {
	return (
		<div className="content">
			<div className="wrapper">
				<h1>
					Hi, im <strong>Anthony!</strong>
				</h1>
				<br />
				<h3>
					I'm a <strong>Software developer</strong> from Canada.
				</h3>
			</div>
		</div>
	);
};

export default About;
