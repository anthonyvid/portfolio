import React, { useState, useEffect } from "react";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu, GiSkills } from "react-icons/gi";
import { GoLinkExternal } from "react-icons/go";
import { GrFormClose, GrProjects, GrContactInfo } from "react-icons/gr";
import { IoMdOpen } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { FiBox } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Pdf from "../../documents/resume.pdf";

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

	const handleDropDown = async (e) => {
		const dropDownMenu = document.querySelector(".drop-down-menu");

		dropDownMenu.classList.toggle("hidden");

		dropDownMenu.classList.contains("hidden")
			? (document.body.style.overflow = "auto")
			: (document.body.style.overflow = "hidden");

		const mobileOptions = document.querySelector(".options").children;

		for (const item of mobileOptions) {
			await timer(100);
			item.classList.toggle("hidden");
		}

		await timer(200);
		document.querySelector(".credit").classList.toggle("hidden");
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
						<a href="#">Skills</a>
					</li>
					<li id="media">
						<a
							target="blank"
							href="https://www.linkedin.com/in/anthonyvidovic/"
						>
							Projects
						</a>
					</li>
					<li id="contact">
						<a href="#">Contact</a>
					</li>
					<button id="resume" onClick={() => window.open(Pdf)}>
						Resume <GoLinkExternal />
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
			<div className="drop-down-menu hidden">
				<div className="top-bar">
					<img src="/logo.png" alt="logo" />
					<GrFormClose size={40} onClick={handleDropDown} />
				</div>
				<div className="options">
					<div className="hidden">
						<VscTools size={35} />
						<a href="#">Skills</a>
					</div>
					<div className="hidden">
						<FiBox size={35} />
						<a href="#">Projects</a>
					</div>
					<div className="hidden">
						<GrContactInfo size={35} />
						<a href="#">Contact</a>
					</div>
					<div className="hidden">
						<IoMdOpen size={35} />
						<a
							href={Pdf}
							target="_blank"
							without
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</div>
				</div>
				<div className="credit hidden">
					<small>Designed & Built by Anthony Vidovic</small>
					<div>
						<AiOutlineCopyrightCircle />
						<small>2022</small>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
