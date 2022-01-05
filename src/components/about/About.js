import "./about.css";
import { Scroll } from "../scroll-down/Scroll";
import { ScrollMobile } from "../scroll-down/ScrollMobile";
import Person from "../person/Person";

function About({ scrollPos }) {
	return (
		<section className="master-content">
			<div className="hero">
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
					I'm an <strong>independent developer</strong> from Canada.
				</h3>
			</div>
		</div>
	);
};

export default About;
