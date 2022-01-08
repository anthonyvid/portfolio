import React from "react";
import "./projects.css";
import { projects, colors } from "../../data/data";
import { IoOpen } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Projects() {
	return (
		<section className="projects-section">
			<div className="projects-header">
				<h1>Projects</h1>
				<small>Things that I've built.</small>
			</div>
			<div className="projects-content">
				{projects.map((project) => {
					const { id, title, description, stack, img, links } =
						project;

					return (
						<div className="project" data-aos="fade">
							<div className="content">
								<h2>{title}</h2>
								<p>{description}</p>
								<div className="stack">
									{stack.map((item) => {
										return (
											<div
												style={{
													backgroundColor: `#${item[1]}`,
												}}
											>
												{item[0]}
											</div>
										);
									})}
								</div>
								<div className="links">
									<AiFillGithub
										className="icon"
										size={30}
										onClick={() =>
											window.open(links[0], "_blank")
										}
									/>
									<IoOpen
										className="icon"
										size={30}
										onClick={() =>
											window.open(links[1], "_blank")
										}
									/>
								</div>
							</div>
							<div className="img-wrap">
								<Carousel
									className="silder"
									showThumbs={false}
									showArrows={true}
									dynamicHeight={true}
									emulateTouch={true}
									swipeable={true}
									infiniteLoop={true}
									showIndicators={false}
								>
									{img.map((i) => {
										return <img src={i} />;
									})}
								</Carousel>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
