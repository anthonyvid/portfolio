import React, { useState } from "react";
import "./navbar.css";

function Navbar({ scrollPos }) {
	// console.log(scrollPos);
	const [navEffect, setNavEffect] = useState(false);

	const navOnEffect = () => {
		console.log("onnn");
		const item1 = document.getElementById("about");
		const item2 = document.getElementById("media");
		const item3 = document.getElementById("contact");
		item1.style.display = "none";
		item2.style.display = "none";
		item3.style.display = "none";
	};

	const navOffEffect = () => {
		console.log("offf");
		const item1 = document.getElementById("about");
		const item2 = document.getElementById("media");
		const item3 = document.getElementById("contact");
		item1.style.display = "flex";
		item2.style.display = "flex";
		item3.style.display = "flex";
	};

	if (scrollPos > 300) {
		if (!navEffect) {
			navOnEffect();
			setNavEffect(true);
		}
	} else {
		if (navEffect) {
			navOffEffect();
			setNavEffect(false);
		}
	}

	return (
		<nav className="navbar">
			<div className="logo">
				<img src="/logo.png" alt="logo" />
			</div>
			<ul>
				<li id="about">
					<a href="#">About</a>
				</li>
				<li id="media">
					<a
						target="blank"
						href="https://www.linkedin.com/in/anthonyvidovic/"
					>
						LinkedIn
					</a>
				</li>
				<li id="contact">
					<a href="#">Contact</a>
				</li>
				<button id="view-work" href="">
					View Work
				</button>
			</ul>
		</nav>
	);
}

export default Navbar;
