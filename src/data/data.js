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
		title: "test project",
		description: "this is a test description that i wrote.",
		tools: ["html", "css", "js"],
	},
];
