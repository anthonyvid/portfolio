import React, { useState, useEffect } from "react";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";

let width =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

function Navbar({ scrollPos }) {
	useEffect(() => {
		AOS.init();
	}, []);

	const [navEffect, setNavEffect] = useState(false);
	const [mobileNavEffect, setMobileNavEffect] = useState(false);

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

	const handleMobileNavEffect = () => {
		const dropDownMenu =
			document.querySelector(".drop-down-icon").firstElementChild;
		const logo = document.querySelector(".logo");

		if (!dropDownMenu.hasAttribute("data-aos")) {
			dropDownMenu.setAttribute("data-aos", "fade");
			logo.setAttribute("data-aos", "fade");
		} else {
			dropDownMenu.removeAttribute("data-aos");
			logo.removeAttribute("data-aos");
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

	if (scrollPos > 100 && width < 725) {
		if (!mobileNavEffect) {
			handleMobileNavEffect();
			setMobileNavEffect(true);
		}
	} else {
		if (mobileNavEffect) {
			handleMobileNavEffect();
			setMobileNavEffect(false);
		}
	}

	const handleDropDown = (e) => {
		const dropDownMenu = document.querySelector(".drop-down-menu");
		
		dropDownMenu.classList.toggle("hidden");

		dropDownMenu.classList.contains("hidden")
			? (document.body.style.overflow = "auto")
			: (document.body.style.overflow = "hidden");

		dropDownMenu.classList.contains("hidden")
			? enableBodyScroll(window)
			: disableBodyScroll(window);
	};

	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<img
						src="/logo.png"
						alt="logo"
						data-aos="fade-right"
						duration="4000"
					/>
				</div>
				<ul id="nav-items" data-aos="fade-left" duration="4000">
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
				<div
					className="drop-down-icon"
					data-aos="fade-left"
					duration="4000"
					onClick={handleDropDown}
				>
					<GiHamburgerMenu size={25} />
				</div>
			</nav>
			<div className="drop-down-menu hidden"></div>
		</>
	);
}

export default Navbar;
