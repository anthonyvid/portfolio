import { AiFillHtml5 } from "react-icons/ai";
import { FaSass, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { DiJavascript, DiNodejs, DiJava } from "react-icons/di";

export const skills = [
	{ id: 1, name: "HTML", icon: AiFillHtml5, color: "A882DD" },
	{ id: 2, name: "SCSS", icon: FaSass, color: "F08080" },
	{ id: 3, name: "JavaScript", icon: SiJavascript, color: "93827F" },
	{ id: 4, name: "React", icon: FaReact, color: "B4D2E7" },
	{ id: 5, name: "Node.js", icon: DiNodejs, color: "7D8CC4" },
	{ id: 6, name: "Express", icon: SiExpress, color: "C3BEF7" },
	{ id: 7, name: "Python", icon: FaPython, color: "FFC145" },
	{ id: 8, name: "Java", icon: DiJava, color: "6D9DC5" },
	{ id: 9, name: "C", icon: AiFillHtml5, color: "242038" },
	{ id: 10, name: "MongoDB", icon: SiMongodb, color: "A6D3A0" },
];

export const projects = [
	{
		id: 1,
		title: "TicketScout",
		description:
			"A Node.js web application powered by express to track and manage tickets, payments, and customers. Made for computer and phone technicians.",
		stack: [
			["HTML", "A882DD"],
			["SCSS", "F08080"],
			["JavaScript", "93827F"],
			["NodeJs", "B4D2E7"],
			["Express", "7D8CC4"],
			["MongoDB", "C3BEF7"],
			["Pusher Web Sockets", "FFC145"],
			["Google API", "6D9DC5"],
			["Twilio SMS API", "242038"],
			["GoShippo Tracking API", "A6D3A0"],
		],
		img: [
			{ url: "photos/ticketscout/1.jpeg" },
			{ url: "photos/ticketscout/2.png" },
			{ url: "photos/ticketscout/3.jpeg" },
			{ url: "photos/ticketscout/4.png" },
			{ url: "photos/ticketscout/5.jpeg" },
		],
		links: [
			"https://github.com/anthonyvid/TicketScout",
			"https://ticketscout.herokuapp.com/",
		],
	},
	{
		id: 2,
		title: "COVID-19 Data Analyzer",
		description:
			"Given COVID-19 data, the program will process, analyze, and plot, based on user input from a graphical user interface",
		stack: [
			["Python", "FFC145"],
			["Tkinter", "F08080"],
			["Matplot", "93827F"],
		],
		img: [
			{ url: "photos/coviddatatracker/1.png" },
			{ url: "photos/coviddatatracker/2.png" },
			{ url: "photos/coviddatatracker/3.png" },
			{ url: "photos/coviddatatracker/4.png" },
		],
		links: [
			"https://github.com/anthonyvid/CovidDataTracker",
			"https://replit.com/@CIS2250/PROJECTL01-CIS2250-3#README.md",
		],
	},
];
