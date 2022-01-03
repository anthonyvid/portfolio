import React, { useState, useEffect } from "react";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

function Navbar({ scrollPos }) {
	useEffect(() => {
		AOS.init();
	}, []);
	console.log(scrollPos);
	const [navEffect, setNavEffect] = useState(false);

	const handleNavEffect = async () => {
		const items = document.getElementById("nav-items").childNodes;

		if (!items[0].hasAttribute("data-aos")) {
			items[0].setAttribute("data-aos", "fade");
			await timer(50);
			items[1].setAttribute("data-aos", "fade");
			await timer(50);
			items[2].setAttribute("data-aos", "fade");
		} else {
			items[2].removeAttribute("data-aos");
			await timer(50);
			items[1].removeAttribute("data-aos");
			await timer(50);
			items[0].removeAttribute("data-aos");
		}
	};

	if (scrollPos > 15) {
		if (!navEffect) {
			handleNavEffect();
			setNavEffect(true);
		}
	} else {
		if (navEffect) {
			handleNavEffect();
			setNavEffect(false);
		}
	}

	return (
		<nav className="navbar">
			<div className="logo">
				<img
					src="/logo.png"
					alt="logo"
					data-aos="zoom-in"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				/>
			</div>
			<ul id="nav-items">
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
