import React from "react";
import "./contact.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
	return (
		<section className="contact-section">
			<div className="contact-header">
				<h1>Contact</h1>
				<small>Let's collaborate.</small>
			</div>
			<div className="contact-content">
				<div className="contact-wrap">
					<div className="socials-wrap">
						<AiFillGithub
							size={30}
							onClick={() =>
								window.open(
									"https://github.com/anthonyvid",
									"_blank"
								)
							}
						/>
						<AiFillLinkedin
							size={30}
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/anthonyvidovic/",
									"_blank"
								)
							}
						/>
					</div>
					<small>or</small>
					<div className="email-contact">
						Anthonyvidovic@gmail.com
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
