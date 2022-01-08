import React, { useEffect } from "react";
import "./footer.css";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ reachedBottom }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="footer">
			<div className="back-to-top"></div>
			<div className="content-wrap">
				<small>Designed & Built by Anthony Vidovic</small>
				<div>
					<AiOutlineCopyright />
					<small>2022</small>
				</div>
			</div>
			<div className="back-to-top" onClick={scrollToTop}>
				{" "}
				<BsArrowUpShort />
				<small>TO TOP</small>
			</div>
		</div>
	);
};

export default Footer;
