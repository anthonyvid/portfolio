import React, { useState, useEffect, useRef } from "react";
import "./projects.css";
import { projects } from "../../data/data";
import { MdOutlineOpenInNew } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import "aos/dist/aos.css";
import SimpleImageSlider from "react-simple-image-slider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
	const [imgBoxSize, setImgBoxSize] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	console.log(imgBoxSize.width, imgBoxSize.height);

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
									<VscGithub
										className="icon"
										size={29}
										onClick={() =>
											window.open(links[0], "_blank")
										}
									/>
									<MdOutlineOpenInNew
										className="icon"
										size={30}
										onClick={() =>
											window.open(links[1], "_blank")
										}
									/>
								</div>
							</div>
							<div className="img-wrap" ref={ref}>
								<Carousel
									infiniteLoop
									autoPlay
									className="carousel"
								>
									{img.map((img, index) => {
										return (
											<div className="image" key={index}>
												<img
													src={img.url}
													alt="project photo"
												/>
											</div>
										);
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
