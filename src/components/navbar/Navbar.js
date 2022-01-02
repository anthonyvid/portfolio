import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo">
				<img src="/logo.png" alt="logo" />
			</div>
			<ul>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a
						target="blank"
						href="https://www.linkedin.com/in/anthonyvidovic/"
					>
						LinkedIn
					</a>
				</li>
				<li>
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
