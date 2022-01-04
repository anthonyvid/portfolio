import React from "react";
import "./skills.css";
import { skills, colors } from "../../data/data";

function Skills() {
	return (
		<section className="skills-section">
			<div className="skills">
				{/* {skills.map((skill) => {
					const { id, name } = skill;
					return (
						<div
							className="skill"
							key={id}
							style={{ backgroundColor: `${colors[id - 1]}` }}
							data-aos="fade-in"
						>
							{name}
						</div>
					);
				})} */}
			</div>
		</section>
	);
}

export default Skills;
