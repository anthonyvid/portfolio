import React, { useRef } from "react";
import "./skills.css";
import { skills } from "../../data/data";
import "aos/dist/aos.css";

function Skills() {
	const skillsSection = useRef(null);

	return (
		<section className="skills-section" ref={skillsSection}>
			<div className="skills-header">
				<h1>Skills</h1>
				<small>Things that I work with.</small>
			</div>
			<div className="skills-content">
				{skills.map((skill) => {
					const { id, name, icon, color } = skill;
					const Icon = icon;

					return (
						<div
							className="skill"
							key={id}
							style={{ backgroundColor: `#${color}` }}
							data-aos="zoom-in"
						>
							<Icon className="skill-logo" />
							{name}
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Skills;
