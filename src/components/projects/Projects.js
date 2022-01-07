import React from "react";
import "./projects.css";
import { projects } from "../../data/data";

function Projects() {
	return (
		<section className="projects-section">
			<div className="projects-header">
				<h1>Projects</h1>
				<small>Things that I've built.</small>
			</div>
			<div className="projects-content"></div>
		</section>
	);
}

export default Projects;
