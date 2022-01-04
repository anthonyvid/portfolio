import React from "react";
import "./projects.css";
import { projects } from "../../data/data";

function Projects() {
	return (
		<section className="projects-section">
			<div className="projects">
				{/* {projects.map((project) => {
					const { id, title, description, tools } = project;
					return (
						<div className="project" key={id}>
							{title}
						</div>
					);
				})} */}
			</div>
		</section>
	);
}

export default Projects;
