import { React, useState, useEffect } from "react";
import { animated, useSprings } from "react-spring";

const EYE_MOVEMENT_LIMIT = 40;
const EYEBROW_MOVEMENT_LIMIT = 250;

function LeftEye(props) {
	return (
		<g {...props}>
			<path
				d="M1521.85 892.563a43.477 43.477 0 0112.1-1.707c24.02 0 43.51 19.497 43.51 43.512 0 24.014-19.49 43.511-43.51 43.511-24.01 0-43.51-19.497-43.51-43.511 0-4.198.6-8.258 1.71-12.098 3.41 8.272 11.55 14.1 21.05 14.1 12.56 0 22.75-10.197 22.75-22.757 0-9.495-5.83-17.64-14.1-21.05z"
				transform="translate(-760.018 -127.766) translate(-180.304 71.996) translate(-155.597 -64.81)"
			></path>
		</g>
	);
}

function RightEye(props) {
	return (
		<g {...props}>
			<path
				d="M1521.85 892.563a43.477 43.477 0 0112.1-1.707c24.02 0 43.51 19.497 43.51 43.512 0 24.014-19.49 43.511-43.51 43.511-24.01 0-43.51-19.497-43.51-43.511 0-4.198.6-8.258 1.71-12.098 3.41 8.272 11.55 14.1 21.05 14.1 12.56 0 22.75-10.197 22.75-22.757 0-9.495-5.83-17.64-14.1-21.05z"
				transform="translate(-760.018 -127.766) translate(0 7.187)"
			></path>
		</g>
	);
}

function Hair(props) {
	return (
		<g {...props}>
			<path
				fill="#775A44"
				d="M1013.36 875.928c-20.847-106.868-26.86-221.347 13.09-324.574 9.77-25.26 22.91-48.915 40.76-69.372 1.19-1.358 7.04-7.014 11.35-11.807 3.77-4.179 11.33-8.585 11.33-8.585s-.57 4.974-.09 9.316c.73 6.569 2.23 13.697 4.01 16.323.73 1.064 4.3 4.801 4.3 4.801s4.85-3.903 10.77-9.594c8.09-7.775 22.48-26.212 43.71-47.03 31.65-31.03 60.02-52.518 92.14-71.837 22.95-13.803 51.27-25.446 51.27-25.446s-3.97 21.01-2.55 27.026c1.1 4.655 4.07 10.033 4.07 10.033s28.43-15.887 31.8-18.081c7.87-5.146 27.28-20.865 46.97-28.129 20.89-7.707 41.89-6.818 41.89-6.818s-.15 3.693-.17 3.945c-.85 10.091-4.26 19.595-7.86 28.978-.14.358-1.14 2.957-1.14 2.957s15.03-7.528 16.87-8.492c18.74-9.785 37.93-19.278 58.1-25.736 77.54-24.827 164.11.019 203.29-88.602.06-.128 3.91 1.097 4.17 1.179 10.65 3.271 21.34 8.796 28.65 17.408 8.22 32.01 22.03 90.254 18.12 123.103-.7 5.899-12.01 46.076-11.35 47.757 5.44 13.968 27.64-7.668 38.36 11.749 9.66 17.501 15.85 57.066 13.82 76.166-4.22 39.57 1.24 72.936-6.88 111.863-9.32 44.733-16.11 89.898-27.53 134.141-3.77 14.612-9.24 29.182-14.25 43.41-1.82 5.16-5.83 16.134-7.89 21.205-.92 2.27-20.35 25.855-20.62 23.421-4.49-39.867 19.85-133.242-12.25-136.091-15.74-1.397 2.31-43.13-12.51-69.772-22.01-39.557-31.94-89.434-49.03-61.321-23.59 38.796-69.17 50.462-64.16-1.159 1.05-10.855-20.45-7.201-31.49 3.298-23.11 21.981-47.35-17.314-44.74-27.795 3.39-13.566-23.35 6.469-30.48-9.395-7.09-15.784-68.87 21.034-84.49 12.883-7.23-3.774-13.19-7.819-17.88-11.948-2.5-2.196-19.74-12.233-24.83-9.369-32.84 18.473-43.78 26.987-58.67 18.08-9.93-5.941-17.08 7.91-24.9 11.168-16.44 6.858-30.11 12.207-38.67 6.141-10.96-7.773 6.94-24.156 1.03-27.992-9.99-6.481-29.6 8.759-40.26 15.748-16.78 11.005-22.08 6.96-52.3 29.449-11.69 8.708-15.73 22.178-25.27 34.53-8.91 11.534-17.2 49.903-24.37 63.661-5.75 11.026-18.59-16.167-23.7-5.195-20.5 44.055-24.5 151.265-29.54 194.401z"
				transform="translate(-760.018 -127.766)"
			></path>
		</g>
	);
}

function LeftEyeBrow(props) {
	return (
		<g {...props}>
			<path
				d="M1131.41 809.621c31.13-31.732 82.18-45.773 122.82-24.909 13.62 6.994 30.36 1.612 37.35-12.009 7-13.622 1.62-30.359-12.01-37.353-61.96-31.812-140.31-12.97-187.77 35.412-10.72 10.931-10.56 28.511.37 39.234 10.93 10.724 28.51 10.555 39.24-.375z"
				transform="translate(-760.018 -127.766) translate(.083 -8.531)"
			></path>
		</g>
	);
}

function RightEyeBrow(props) {
	return (
		<g {...props}>
			<path
				d="M1091.8 770.762c47.46-48.382 125.81-67.224 187.77-35.412 13.63 6.994 19.01 23.731 12.01 37.353-6.99 13.621-23.73 19.003-37.35 12.009-40.64-20.864-91.69-6.823-122.82 24.909-10.73 10.93-28.31 11.099-39.24.375-10.93-10.723-11.09-28.303-.37-39.234z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2731.92 -8.531)"
			></path>
		</g>
	);
}

function FaceA(props) {
	return (
		<g {...props}>
			<path
				fill="#F6C394"
				d="M1213.88 882.242c5.91-47.873-7.25-84.016-58.47-54.482-11.1 6.401-40.98 51.314-47.18 39.504-7.22-13.741-5.56-46.234-4.53-59.313 1.48-18.866 17.9-88.189 25.06-100.914 13.21-23.471 37.96-81.192 54.07-102.998 5.68-7.685 14.55-20.268 20.55-27.907 16.26-63.887 80.86-83.303 138.59-83.891 62.76-.638 123.44 11.441 185.85 14.865 40.83 2.24 94.79-2.175 129.44 23.962 47.12 35.531 55.33 152.39 56.17 206.873.29 18.927-9.82 35.158-9.35 54.067l-2.28 34.345c-.06 1.913-2.32 18.671 2 16.992 3-1.165 13.36-14.7 14.94-17.145 5.09-7.839 14.11-13.806 25.22-13.889 21.11-.158 42.96 26.763 47.05 43.806 2.38 9.893 1.98 21.366 5.41 30.895 8.35 23.201.9 64.037-6.08 86.132-2.83 8.98-7.1 22.208-10.74 30.886-9.58 22.77-32.86 41.21-56.38 51.26-7.02 3-14.04 4.75-21.07 1-2.81-1.5-10.06-8.34-12.93-7.72-.86.18-1.82 6.28-2 7-1.92 7.83-3.75 15.62-6.38 23.28-10.05 29.27-28.47 56.07-44.45 82.44-22.63 37.33-51.84 69.39-77.83 104.2-27.47 36.78-56.03 79.49-96.41 103.22-16.91 9.94-34.62 12.83-53.45 17.27-17.5 4.13-33.52 3.5-51.57 4.71-31.44 2.1-72.28-12.27-96.41-30.44-14.36-10.81-29.18-22.12-37.77-38.27l-19.57-21.92c-15.43-16.71-22.74-40.7-31.46-61.28-22.72-53.65-45.53-110.77-29.43-169.84 5.42-19.89 20.73-28.42 30.74-44.78 3.02-4.93 3.98-12.41 4.62-20.19 19.31 1.02 41.69.95 49.21-.13 10.71-1.53 66.66-18.036 70.99-31.029.96-2.875-12.25-25.438-13.43-32.495-1.79-10.781.61-40.569-.74-42.366-7.77-10.366-23.98-10.693-36.64-13.859-5.72-1.431-18.88-1.954-33.36-1.849zm240.18 7.871c-.01-.77-20.61 86.254-17.77 87.766 4.81 2.567 88.38 31.511 107.36 29.401 7.19-.8 58.77-13.226 67.1-18.783 7.98-5.319 20.14-68.718 15.93-77.141-3.36-6.713-85.73-29.985-97-31.594-21.33-3.048-55.52 2.309-75.62 10.351zM971.298 887.767c-17.172 27.286-1.347 79.516 11.285 108.687 1.154 2.665 13.163 14.646 14.445 15.306 3.972 2.05 12.692-2.56 13.382-3.42 10.47-12.94 2.09-30.529-2.26-44.891-2.75-9.057-4-18.451-6.7-27.493-4.189-14.011-22.022-36.263-30.152-48.189z"
				transform="translate(-760.018 -127.766)"
			></path>
		</g>
	);
}

function FaceB(props) {
	return (
		<g {...props}>
			<path
				fill="#fff"
				d="M936.855 961.156c-5.968-27.399-9.183-122.374 25.426-134.282 20.684-7.116 48.169 56.085 56.719 63.982 1.02.943 2.41-260.744 23.2-318.779.31-.853 181.2-102.98 196.9-32.783 13.12 58.676 21.42 257.119-.94 317.809-13.24 35.951-112.16 22.198-128.98 52.325-4.28 7.649-1.13 46.52.99 54.535 14.98 56.777 64.92 25.592 76.82 60.037 17.83 51.6 11.57 264.46 11.25 264.48-22.15.97-160.54-188.42-151.88-221.53 3.85-14.71-34.03-6.11-42.48-12.57-31.989-24.45-53.44-54.22-67.025-93.224z"
				transform="translate(-760.018 -127.766)"
			></path>
		</g>
	);
}

function Person() {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const updateMousePosition = (e) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () =>
			window.removeEventListener("mousemove", updateMousePosition);
	});

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="2"
			clipRule="evenodd"
			viewBox="0 0 1212 1874"
			width="375px"
			height="470px"
			id="person"
		>
			<path
				fill="#3A7492"
				d="M1175.61 1581.07c-8.6-1.23-23.09-13.07-26.77-9.85-8.59 7.5-9.53 15.15-9 30.11.63 17.56-18.2 35.05-31 41.47-5.07 2.55-25.63-14.1-28.66-17.15-2.07-2.09-4.03-4.28-6.06-6.4-.87-.91-8.8-9.82-7.92-6.81 2.51 8.55 5.17 29.36 2.69 39.83-6.22 26.26-17.97 32.38-40.68 55.42-22.9 23.24-72.849 68.35-51.886 100.1 24.596 37.26 56.076 65.17 88.586 85.63 90.73 57.11 200.17 124.58 311.77 104.61 79.36-14.2 140.22-37.48 206.56-76.81 43.11-25.56 186.43-91.62 207.06-103.6 48.42-28.14 163.06-101.5 165.43-116.57 3.43-21.9-22.05-48.76-35.55-63.44-22.31-24.28-58.75-32.98-89.47-41.86-39.44-11.41-79.24-25.16-112.82-49.59-11-8-12.47-27.57-21.1-38.34-.94-1.17-69.58-51.15-74.71-53.23-11.3-4.58-20.1 54.97-24.42 63.52-18.13 35.87-45.92 67.88-73.62 96.63-35.75 37.11-103.06 96.94-157.6 100.46-23.81 1.54-44.52-16.5-63.55-28.27-52.54-32.54-88.11-57.78-127.28-105.86z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#2E5679"
				d="M1640.96 1467.25l-3.22.91c-1.26 62.62-45.59 114.76-86.4 160.44-37.08 41.52-47.29 53.01-93.78 86.8-32.56 23.67 174.1-27.68-.94 84.92-22.45 14.44 140.22-23.89 137.56 53.33-1.18 34.28-13.44 58.57-27.5 77.11a782 782 0 0016.56-9.54c43.11-25.56 186.43-91.62 207.06-103.6 48.42-28.14 163.06-101.5 165.43-116.57 3.43-21.9-22.05-48.76-35.55-63.44-22.31-24.28-58.75-32.98-89.47-41.86-39.44-11.41-79.24-25.16-112.82-49.59-11-8-12.47-27.57-21.1-38.34-.66-.81-33.82-25.07-55.83-40.57z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#F6C394"
				d="M1226.73 1197.78c10.19 92.5-10.54 326.43 29.4 411.93 12.79 27.39 28.97 56.38 42.45 73.32 6.62 8.31 43.06 24.17 50.72 26.23 26.52 7.15 38.82-3.01 61.86-13.54 11.64-5.32 76.09-53.44 87.88-62.95 11.85-9.56 58.74-60.64 70.9-76.12 14.96-19.03 55.29-72.85 44.97-74.16-24.15-3.07-59.34-243.43-46.19-288.47 2.76-9.48-324.91 29.43-341.99 3.76z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#EC925E"
				d="M1289.48 1337.28c70.03 88.67 124.12 74.97 158.24 81.1 24.18 4.35 50.8 6.37 70.79 22.19 20.69 16.38 33.72 49.91 35.79 75.35 2.56 31.48-5.92 56.32-14.28 75.81 15.59 3.27 81.04-101.78 76.56-105.6-31.43-26.77-59.32-309.19-29.57-326.76.26-.15-268.59 85.92-297.53 177.91z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#EC925E"
				d="M1282.87 1497.78c39.31.02 80.63-4.91 115.92-23.71 16.46-8.76 30.82-21.12 46.91-30.53 5.16-3.01 12.59-8.16 18.89-6.29 8.75 2.6 11.81 14.31 11.76 22.09-.11 19.14-10.63 34.99-27.02 44.08-43.22 24-123.53 22.11-166.46-5.64z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1140.99 1059.48l8.13 193.77c4.05 77.11-8.11 152.3-39.43 223.01l-1.41 3.2 1.21 3.28c1.27 3.44 2.22 6.74 3.63 10.11 26.97 64.42 78.46 114.48 130.92 159.03 34.26 29.1 75.19 59.84 120.01 70.25l1.95.46 1.95-.46c6.65-1.54 13.22-3.53 19.69-5.89 37.13-13.55 71.14-39.58 100.32-64.36 55.21-46.88 108.91-99.76 134.55-169.14l1.21-3.28-1.41-3.2c-31.28-70.63-43.45-145.72-39.45-222.69 0-.01 22.08-191.01 22.08-191.01l-463.95-3.08zm25.35 192.96l-7.38-175.6 426.66 2.83-19.94 172.45-.01.27c-4.13 78.62 8.09 155.34 39.45 227.6-25.07 64.99-76.2 114.5-128.32 158.76-27.69 23.51-59.83 48.44-95.07 61.3-5.18 1.89-10.42 3.52-15.73 4.83-41.44-10.25-79.04-39.16-110.8-66.13-50.43-42.82-100.26-90.64-126.18-152.56-.85-2.03-1.51-4.04-2.2-6.07 31.4-72.29 43.64-149.03 39.52-227.68z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1614.13 1467.42c2.73-2.22 5.5-4.49 8.33-6.65 14.03 10.99 59.64 48.35 77.71 62.65-17.36 39.14-37.91 68.48-66.3 101.22-36.26 41.8-75.74 80.6-118.17 116.15-44.5 37.29-95.31 78.57-149.7 101.52-54.39-22.95-105.2-64.23-149.7-101.52a1043.689 1043.689 0 01-118.17-116.15c-28.39-32.74-48.94-62.08-66.3-101.22 18.07-14.3 63.68-51.66 77.71-62.65 2.83 2.16 5.6 4.43 8.33 6.65l6.69 5.44 10.87-13.37-6.68-5.44c-4.63-3.76-9.36-7.61-14.26-11.02l-4.31-3-4.64 2.46c-3.16 1.68-75.95 61.14-89.47 71.37l-5.36 4.05 2.63 6.19c18.67 43.99 40.68 75.97 71.77 111.83 36.86 42.49 76.99 81.93 120.12 118.07 46.7 39.13 100.3 82.31 157.52 105.62l3.25 1.33 3.25-1.33c57.22-23.31 110.82-66.49 157.52-105.62 43.13-36.14 83.26-75.58 120.12-118.07 31.1-35.86 53.1-67.84 71.77-111.83l2.63-6.19-5.36-4.05c-13.52-10.23-86.31-69.69-89.46-71.37l-4.65-2.46-4.31 3c-4.9 3.41-9.63 7.26-14.26 11.02l-6.68 5.44 10.87 13.37 6.69-5.44z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1704.94 1542.68c18.6 16.91 39.19 31.41 62.85 40.32 27.4 10.32 58.19 16.71 86.97 26.75 27.13 9.48 52.48 22.21 70.7 45.76 10.36 13.39 17.55 28.32 22.8 44.33 1.48 4.52 6.35 6.98 10.87 5.5 4.52-1.48 6.99-6.35 5.5-10.87-5.85-17.88-13.96-34.54-25.53-49.5-20.34-26.29-48.38-40.92-78.66-51.49-28.65-10-59.3-16.34-86.57-26.61-21.62-8.14-40.35-21.49-57.34-36.94a8.616 8.616 0 00-12.17.58c-3.2 3.51-2.94 8.97.58 12.17z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1448.94 1682.1c18.47-29.48 32.25-59.68 44.32-92.27 1.65-4.46-.63-9.43-5.09-11.08-4.46-1.65-9.42.63-11.07 5.09-11.66 31.47-24.93 60.65-42.76 89.11-2.53 4.03-1.31 9.36 2.72 11.88 4.04 2.53 9.36 1.3 11.88-2.73z"
				transform="translate(-760.018 -127.766) translate(0 -1)"
			></path>
			<path
				d="M1441.65 1494.02c-23.23 12.45-49.47 21.87-75.65 21.87-26.18 0-52.42-9.42-75.65-21.87-4.19-2.25-9.42-.67-11.67 3.53-2.24 4.19-.66 9.41 3.53 11.66 25.7 13.78 54.82 23.92 83.79 23.92 28.97 0 58.09-10.14 83.79-23.92 4.19-2.25 5.77-7.47 3.53-11.66-2.25-4.2-7.48-5.78-11.67-3.53z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1716.53 1529.93c16.99 15.45 35.72 28.8 57.34 36.94 27.27 10.27 57.92 16.61 86.57 26.61 30.28 10.57 58.32 25.2 78.66 51.49 11.57 14.96 19.68 31.62 25.53 49.5 1.49 4.52-.98 9.39-5.5 10.87-4.52 1.48-9.39-.98-10.87-5.5-5.25-16.01-12.44-30.94-22.8-44.33-18.22-23.55-43.57-36.28-70.7-45.76-28.78-10.04-59.57-16.43-86.97-26.75-23.66-8.91-44.25-23.41-62.85-40.32-3.52-3.2-3.78-8.66-.58-12.17a8.616 8.616 0 0112.17-.58z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 0)"
			></path>
			<path
				d="M1434.34 1672.95c17.83-28.46 31.1-57.64 42.76-89.11 1.65-4.46 6.61-6.74 11.07-5.09 4.46 1.65 6.74 6.62 5.09 11.08-12.07 32.59-25.85 62.79-44.32 92.27-2.52 4.03-7.84 5.26-11.88 2.73-4.03-2.52-5.25-7.85-2.72-11.88z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 -1)"
			></path>
			<LeftEye
				style={{
					transform: `translateY(${
						-(window.innerWidth / 2 - mousePosition.y) /
						EYE_MOVEMENT_LIMIT
					}px) translateX(${
						-(window.innerWidth / 2 - mousePosition.x) /
						EYE_MOVEMENT_LIMIT
					}px)`,
				}}
			/>
			<FaceB />
			<FaceA />
			<path
				fill="#EC925E"
				d="M1382.18 493.38c48.71 3.015 96.64 11.038 145.64 13.726 40.83 2.24 94.79-2.175 129.44 23.962 47.12 35.531 55.33 152.39 56.17 206.873.29 18.927-9.82 35.158-9.35 54.067l-2.28 34.345c-.06 1.913-2.32 18.671 2 16.992 3-1.165-21.05 57.835-10.26 60.487 38.38 9.434 64.87-75.55 76.17-81.809 6.69-3.71 25.54 43.088 26.71 64.989 1.46 27.408 5.81 66.153-6.08 86.132-4.81 8.093-7.1 22.208-10.74 30.886-9.58 22.77-32.86 41.21-56.38 51.26-7.02 3-14.04 4.75-21.07 1-2.81-1.5-10.06-8.34-12.93-7.72-.86.18-1.82 6.28-2 7-1.92 7.83-3.75 15.62-6.38 23.28-10.05 29.27-28.47 56.07-44.45 82.44-22.63 37.33-51.84 69.39-77.83 104.2-27.47 36.78-56.03 79.49-96.41 103.22-16.91 9.94-34.62 12.83-53.45 17.27-14.1 3.33-27.25 3.57-41.27 4.16 30.34-16.02 84.55-55.39 104.35-80.14 42.58-53.23 70.19-116.87 97.25-180.27 11.01-25.82 20.01-55.13 2.08-79.16-8.84-11.85-25.82-15.4-21.09-32.5 2.9-10.5 56.81-11.04 65.92-25.715 6.78-10.923 13.09-38.869 11.08-65.382.74-7.58.75-13.438-.34-15.617-.99-1.986-8.9-5.42-19.83-9.313-.05-.152-.1-.307-.15-.466-6.13-21.161-7.12-67.251-29.95-79.243-16.18-8.495-50.13-10.5-67.79.696-5.83 3.698-5.97 4.545-8.81 10.316-2.89 5.872-8.14 12.415-9.1 19.043-1.12 7.72 4.01 15.022 4.19 21.865.07 2.302-26.28 9.979-35.44 13.685-.31.125-.62.254-.92.386a105.98 105.98 0 00-4.82 1.788c0-.059-.12.397-.35 1.289-11.17 8.827-8.3 25.059-9.29 40.277-4.91 22.308-9.58 45.427-8.13 46.2.36.197 1.19.547 2.42 1.026.36 2.42 1.07 4.274 2.25 5.273 11.29 9.532 60.43 8.327 45.37 34.392-14.25 24.65-34.9 23.45-43.81 29.16-34.02 21.8-56.43 57.65-102.51 38.36-9.03-3.78-19.11-13.63-25.48-21.37-32.06-38.89 40.64-46.97 69.49-44.04 6.71.68 27.17 8 30.94.81 24.5-46.593-43.98-136.888-5.37-210.118 50.09-94.982 169.62-58.82 197.22-33.034 6.07 5.671-6.4-69.855-12.89-79.973-9.09-14.163-23.26-22.218-35.72-32.976-48.89-42.218-98.21-82.857-162.71-97.809-12.64-28.729-16.86-53.434-13.31-74.2z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#EC925E"
				d="M1265.62 1188.94c33.28-.7 42.41-18.49 70.21-27.48 14.42-4.66 15.48-1.62 30.17-1.14 10.18.34 26.07-1.32 35.56 2.76 21.09 9.05 40.06 27.63 72.31 27-13.53 9.6-24.15 9.82-34.56 11.78-19.58 3.68-34.84-.21-69.54 6.61-12.76 2.51-37.03-1.35-58.13-4.49-15.26-2.28-37.05-3.29-46.02-15.04zM1111.11 767.879c48.82-28.002 130.34-36.471 169.6-30.641 16.08 2.385 32.5 14.648 52.88 44.422 17.53 25.608 19.28 91.563-4.57 94.613-53 6.776-34.58-19.779-51.91-30.552-15.53-9.657-32.9-12.936-46.57-18.493-9.74-3.961-19.58-5.686-29.18-5.814-9.48-6.885-24.32-6.123-45.95 6.346-2.42 1.398-5.75 4.633-9.52 8.714-16.04 8.681-26.91 18.467-28.46 21.528-2.86 5.651-6.24 7.988-9.84 7.95-6.48-14.399-4.89-45.322-3.89-58.001.59-7.555 3.58-23.205 7.41-40.072z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#fff"
				d="M1312.13 994.925c-7.14 4.559-32.26 13.825-27.25 31.835 3.75 13.5 65.83-17.09 78.19-16.6 23.79.95 5.97-66.314 3.48-92.963-.81-8.683-12.92-46.238-26.47-28.621-4.78 6.216-9.4 39.433-11.49 46.212-4.13 13.416-4.59 52.569-16.46 60.137z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				fill="#fff"
				d="M1520.74 829.867c-40.51 8.276-48.57 60.833 6.13 49.982 13.63-2.704 29.19-6.21 36.29-19.642 12.96-24.488-14.29-36.087-42.42-30.34z"
				transform="translate(-760.018 -127.766) matrix(1 0 0 1.15993 0 -140.935)"
			></path>
			<path
				d="M1689.25 1021.12c-4.37 77.72-39.41 139.37-86.99 194.92-30.5 35.59-80.42 103.62-134.98 146.99-23.38 18.58-56.14 17.76-84.8 17.76-28.66 0-61.42.82-84.8-17.76-54.56-43.37-104.48-111.4-134.97-146.99-47.58-55.55-82.62-117.2-86.99-194.92-.27-4.66-4.19-8.23-8.77-7.96-4.58.26-8.08 4.26-7.82 8.92 4.6 81.7 41.05 146.68 91.06 205.07 30.98 36.17 81.84 105.15 137.27 149.2 26.28 20.89 62.81 21.34 95.02 21.34 32.22 0 68.75-.45 95.03-21.34 55.43-44.05 106.28-113.03 137.27-149.2 50.01-58.39 86.46-123.37 91.05-205.07.26-4.66-3.24-8.66-7.81-8.92-4.58-.27-8.51 3.3-8.77 7.96z"
				transform="translate(-760.018 -127.766) matrix(1.03757 0 0 1.01929 -68.424 -26.794)"
			></path>
			<path
				d="M1736.21 815.669c48.63 7.772 54.02 55.567 52.86 96.486-1.05 36.845-.81 70.568-25.65 100.355-9.23 11.07-23.51 27.88-39.37 36.13-8.57 4.45-17.65 6.31-26.36 1.32-4.13-2.36-9.4-.92-11.76 3.21-2.36 4.12-.92 9.39 3.2 11.75 14.16 8.1 28.94 6.24 42.86-.99 17.88-9.29 34.26-27.91 44.66-40.38 27.54-33.013 28.48-70.07 29.65-110.904 1.4-49.249-8.84-104.642-67.38-113.996-4.69-.75-9.11 2.453-9.86 7.15-.75 4.696 2.45 9.119 7.15 9.869z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1726.34 1004.54c.38-1.3 1.04-3.33 1.67-4.665 3.15-6.596 7.03-13.376 7.48-17.258.81-6.97-.65-13.698-2.3-20.398-1.17-4.737-2.53-9.446-2.03-14.35.88-8.606 5.82-17.43 11.41-25.897 6.4-9.697 13.83-18.866 18.92-26.609 2.62-3.973 1.51-9.321-2.46-11.936-3.97-2.614-9.32-1.511-11.93 2.462-6.18 9.381-15.72 20.847-22.82 32.808-5.37 9.039-9.34 18.393-10.26 27.417-.71 6.898.79 13.574 2.43 20.237 1.17 4.701 2.48 9.387 1.92 14.279-.16 1.344-1.42 3.154-2.56 5.308-1.94 3.672-4.12 7.735-5.46 11.526-2.18 6.156-2.08 11.886.41 16.186 2.39 4.12 7.35 8.11 17.75 8.49 4.75.17 8.75-3.55 8.93-8.3.17-4.75-3.55-8.75-8.3-8.93-.93-.03-1.99-.2-2.8-.37z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1323.56 1047.12c15.66-9.37 24.19-12.69 42.44-12.69 17.8 0 26.78 3.32 42.44 12.69 4.08 2.44 9.38 1.1 11.82-2.98a8.613 8.613 0 00-2.97-11.81c-18.91-11.31-29.8-15.14-51.29-15.14-22.03 0-32.38 3.83-51.29 15.14a8.613 8.613 0 00-2.97 11.81c2.44 4.08 7.74 5.42 11.82 2.98z"
				transform="translate(-760.018 -127.766) translate(0 -11)"
			></path>
			<path
				d="M1241.91 1187.07c22.19 22.15 53.8 23.12 82.68 25.85 12.83 1.21 28.52 5.51 41.41 5.51 12.82 0 28.58-4.3 41.41-5.51 28.88-2.73 60.49-3.7 82.68-25.85 3.36-3.36 3.37-8.82.01-12.18-3.36-3.37-8.82-3.37-12.19-.01-19.23 19.19-47.09 18.52-72.12 20.88-12.34 1.17-27.47 5.43-39.79 5.43-12.39 0-27.45-4.26-39.79-5.43-25.03-2.36-52.89-1.69-72.12-20.88-3.37-3.36-8.83-3.36-12.19.01-3.36 3.36-3.35 8.82.01 12.18zM1386.7 1147.29c-8.1 3.22-11.8 5.27-20.7 5.27-8.9 0-12.6-2.05-20.7-5.27-4.42-1.75-9.44.41-11.19 4.83-1.76 4.42.4 9.43 4.82 11.19 10.56 4.2 15.47 6.49 27.07 6.49s16.51-2.29 27.07-6.49c4.42-1.76 6.58-6.77 4.82-11.19-1.75-4.42-6.77-6.58-11.19-4.83zM1280.8 1060.89c4.45-.04 9.39-1.5 13.75-.17 5.58 1.7 9.9 5.57 14.11 9.63 5.55 5.35 10.84 11.13 16.96 15.34 12.14 8.35 25.79 14.92 40.38 14.92 14.59 0 28.24-6.57 40.38-14.92 6.12-4.21 11.41-9.99 16.96-15.34 4.21-4.06 8.53-7.93 14.11-9.63 4.36-1.33 9.3.13 13.75.17 4.76.05 8.66-3.78 8.7-8.53a8.621 8.621 0 00-8.53-8.71c-6.14-.05-12.93-1.25-18.94.58-8.2 2.5-14.86 7.74-21.06 13.71-4.86 4.69-9.39 9.86-14.75 13.55-9.27 6.37-19.49 11.88-30.62 11.88-11.13 0-21.35-5.51-30.62-11.88-5.35-3.69-9.89-8.86-14.75-13.55-6.2-5.97-12.85-11.21-21.06-13.71-6.01-1.83-12.8-.63-18.94-.58a8.621 8.621 0 00-8.53 8.71c.04 4.75 3.94 8.58 8.7 8.53zM1422.44 983.549c-1.65-17.891-5.59-35.785-10.73-52.992-4.33-14.508-10.92-27.361-9.8-42.912.35-4.743-3.22-8.874-7.97-9.218-4.74-.344-8.87 3.228-9.21 7.971-1.29 17.734 5.53 32.546 10.46 49.089 4.82 16.124 8.54 32.884 10.09 49.649.44 4.735 4.64 8.225 9.37 7.787 4.74-.438 8.23-4.639 7.79-9.374zM1387 1245.17c-8.24 2.14-12.52 3.36-21 3.36s-12.76-1.22-21-3.36c-4.6-1.19-9.31 1.58-10.5 6.19-1.19 4.6 1.58 9.31 6.18 10.5 9.93 2.57 15.11 3.9 25.32 3.9s15.39-1.33 25.32-3.9c4.6-1.19 7.37-5.9 6.18-10.5-1.19-4.61-5.9-7.38-10.5-6.19z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1752.32 812.905c21.18 3.864 35.34 17.067 43.89 36.032 7.81 17.326 10.77 39.737 10.09 63.709-1.17 40.834-2.11 77.891-29.65 110.904-10.4 12.47-26.78 31.09-44.66 40.38-13.92 7.23-28.7 9.09-42.86.99-4.12-2.36-5.56-7.63-3.2-11.75 2.36-4.13 7.63-5.57 11.76-3.21 8.71 4.99 17.79 3.13 26.36-1.32 15.86-8.25 30.14-25.06 39.37-36.13 24.84-29.787 24.6-63.51 25.65-100.355.6-21.106-1.7-40.884-8.57-56.138-6.14-13.616-16.07-23.383-31.27-26.157-4.68-.854-7.79-5.346-6.94-10.024.86-4.679 5.35-7.785 10.03-6.931z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 0)"
			></path>
			<path
				d="M1726.41 1004.56c.8.16 1.83.32 2.73.35 4.75.18 8.47 4.18 8.3 8.93-.18 4.75-4.18 8.47-8.93 8.3-10.4-.38-15.36-4.37-17.75-8.49-2.49-4.3-2.59-10.03-.41-16.186 1.34-3.791 3.52-7.854 5.46-11.526 1.14-2.154 2.4-3.964 2.56-5.308.56-4.892-.75-9.578-1.92-14.279-1.64-6.663-3.14-13.339-2.43-20.237.92-9.024 4.89-18.378 10.26-27.417 7.1-11.961 16.64-23.427 22.82-32.808 2.61-3.973 7.96-5.076 11.93-2.462 3.97 2.615 5.08 7.963 2.46 11.936-5.09 7.743-12.52 16.912-18.92 26.609-5.59 8.467-10.53 17.291-11.41 25.897-.5 4.904.86 9.613 2.03 14.35 1.65 6.7 3.11 13.428 2.3 20.398-.37 3.169-2.74 8.149-5.52 13.399-1.28 2.438-2.82 6.514-3.56 8.544zM1405.28 985.136c-1.55-16.765-5.27-33.525-10.09-49.649-4.93-16.543-11.75-31.355-10.46-49.089.34-4.743 4.47-8.315 9.21-7.971 4.75.344 8.32 4.475 7.97 9.218-1.12 15.551 5.47 28.404 9.8 42.912 5.14 17.207 9.08 35.101 10.73 52.992.44 4.735-3.05 8.936-7.79 9.374-4.73.438-8.93-3.052-9.37-7.787z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 0)"
			></path>
			<path
				d="M1485.99 841.699c9.35-5.47 19.41-9.729 29.94-12.337 43.67-10.816 80.54 12.547 104.88 47.375 2.72 3.898 8.1 4.851 12 2.127 3.89-2.724 4.85-8.101 2.12-12-28.46-40.723-72.08-66.878-123.14-54.232-12.13 3.005-23.73 7.889-34.5 14.19-4.11 2.401-5.49 7.683-3.09 11.789 2.4 4.105 7.68 5.489 11.79 3.088zM1443.74 888.805c-6.11 17.433-9.77 35.992-7.38 54.428-6.48 5.476-11.52 14.208-10.38 25.151 1.03 9.948 4.78 16.482 9.42 20.748 7.18 6.61 17.03 7.996 25.42 6.521 4.69-.822 7.82-5.293 7-9.978-.82-4.684-5.29-7.819-9.98-6.997-3.52.619-7.76.542-10.77-2.228-2.16-1.988-3.47-5.219-3.95-9.854-.6-5.714 3.08-9.861 6.68-11.79l5.64-3.016-1.25-6.266c-3.44-17.235.1-34.691 5.82-51.023 1.57-4.489-.8-9.409-5.29-10.981-4.49-1.572-9.41.796-10.98 5.285zM1617.38 908.476c3.92 25.971.65 56.024-17.49 76.28-3.17 3.543-2.87 8.996.67 12.169 3.54 3.175 8.99 2.871 12.17-.672 21.53-24.048 26.34-59.511 21.7-90.344a8.623 8.623 0 00-9.81-7.237c-4.7.708-7.95 5.101-7.24 9.804z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1459.8 995.981c8.83 2.786 22.12 10.029 32.79 13.289 41.23 12.6 87.17 8.79 123.55-14.648.7.483 1.37.979 2 1.493 2.58 2.097 4.36 4.575 3.32 8.525-1.22 4.6 1.53 9.32 6.13 10.54 4.6 1.21 9.32-1.54 10.53-6.14 4.2-15.889-4.99-24.633-17.83-32.131a8.611 8.611 0 00-9.33.414c-32.73 23.227-75.32 27.087-113.34 15.468-10.87-3.324-24.47-10.781-33.31-13.456-8.67-2.624-19.8 3.433-23.12 14.554-1.36 4.557 1.23 9.361 5.79 10.721 4.56 1.36 9.36-1.23 10.72-5.787.29-.943.78-1.769 1.42-2.37.18-.166.49-.362.68-.472zM1433.11 877.248c1.78 4.093 4.05 8.066 6.82 11.579 3.34 4.236 6.66 6.47 10.04 7.621 3.47 1.183 7.16 1.262 11.49.299 11.64-2.585 31.18-15.581 82.58-8.612 24.22 3.284 35.56 11.026 57.32 20.928 6.36 2.891 14.76 6.13 22.2 5.938 6.77-.173 12.96-2.697 17.51-9.101 2.76-3.867 1.85-9.241-2.01-11.993-3.87-2.753-9.25-1.848-12 2.019-1.43 2.008-3.66 2.042-5.84 1.779-4.44-.535-9.05-2.62-12.73-4.297-23.55-10.713-35.93-18.765-62.14-22.318-47.9-6.494-70.37 2.851-83.78 7.414-1.74.59-3.28 1.095-4.69 1.42-.89.204-1.64.454-2.35.249-.79-.228-1.32-1.006-2.09-1.99-1.86-2.362-3.36-5.049-4.56-7.801-1.89-4.352-6.97-6.346-11.32-4.452-4.35 1.895-6.34 6.967-4.45 11.318z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1477.29 826.822c10.77-6.301 22.37-11.185 34.5-14.19 51.06-12.646 94.68 13.509 123.14 54.232 2.73 3.899 1.77 9.276-2.12 12-3.9 2.724-9.28 1.771-12-2.127-24.34-34.828-61.21-58.191-104.88-47.375-10.53 2.608-20.59 6.867-29.94 12.337-4.11 2.401-9.39 1.017-11.79-3.088-2.4-4.106-1.02-9.388 3.09-11.789zM1460.01 894.501c-5.72 16.332-9.26 33.788-5.82 51.023l1.25 6.266-5.64 3.016c-3.6 1.929-7.28 6.076-6.68 11.79.48 4.635 1.79 7.866 3.95 9.854 3.01 2.77 7.25 2.847 10.77 2.228 4.69-.822 9.16 2.313 9.98 6.997.82 4.685-2.31 9.156-7 9.978-8.39 1.475-18.24.089-25.42-6.521-4.64-4.266-8.39-10.8-9.42-20.748-1.14-10.943 3.9-19.675 10.38-25.152-2.39-18.435 1.27-36.994 7.38-54.427 1.57-4.489 6.49-6.857 10.98-5.285s6.86 6.492 5.29 10.981zM1634.43 905.909c4.64 30.833-.17 66.296-21.7 90.344-3.18 3.543-8.63 3.847-12.17.672-3.54-3.173-3.84-8.626-.67-12.169 18.14-20.256 21.41-50.309 17.49-76.28-.71-4.703 2.54-9.096 7.24-9.804a8.623 8.623 0 019.81 7.237z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 0)"
			></path>
			<path
				d="M1459.8 995.981c-.19.11-.5.306-.68.472-.64.601-1.13 1.427-1.42 2.37-1.36 4.557-6.16 7.147-10.72 5.787-4.56-1.36-7.15-6.164-5.79-10.721 3.32-11.121 14.45-17.178 23.12-14.554 8.84 2.675 22.44 10.132 33.31 13.456 38.02 11.619 80.61 7.759 113.34-15.468a8.611 8.611 0 019.33-.414c12.84 7.498 22.03 16.242 17.83 32.131-1.21 4.6-5.93 7.35-10.53 6.14-4.6-1.22-7.35-5.94-6.13-10.54 1.04-3.95-.74-6.428-3.32-8.525a31.13 31.13 0 00-2-1.493c-36.38 23.438-82.32 27.248-123.55 14.648-10.67-3.26-23.96-10.503-32.79-13.289zM1448.9 870.375c1.19 2.751 2.69 5.436 4.55 7.797.78.98 1.3 1.758 2.09 1.985.71.203 1.45-.046 2.33-.249 1.42-.326 2.96-.83 4.69-1.421 13.41-4.563 35.89-13.909 83.8-7.414 26.2 3.554 38.59 11.605 62.13 22.319 3.69 1.677 8.29 3.761 12.73 4.296 2.18.262 4.4.23 5.83-1.772 2.76-3.875 8.14-4.781 12.02-2.024 3.87 2.758 4.78 8.143 2.02 12.018-4.56 6.409-10.75 8.935-17.53 9.109-7.45.191-15.85-3.048-22.2-5.94-21.76-9.901-33.1-17.644-57.32-20.927-51.39-6.968-70.94 6.027-82.57 8.612-4.34.963-8.03.885-11.51-.3-3.38-1.152-6.7-3.387-10.04-7.626-2.77-3.514-5.04-7.488-6.83-11.583-1.89-4.36.1-9.442 4.47-11.341 4.36-1.898 9.44.101 11.34 4.461z"
				transform="translate(-760.018 -127.766) matrix(-1 0 0 1 2732 0)"
			></path>
			<RightEyeBrow
				style={{
					transform: `translateY(${
						-(window.innerWidth / 2 - mousePosition.y) /
						EYEBROW_MOVEMENT_LIMIT
					}px) translateX(${
						-(window.innerWidth / 2 - mousePosition.x) /
						EYEBROW_MOVEMENT_LIMIT
					}px)`,
				}}
			/>
			<LeftEyeBrow
				style={{
					transform: `translateY(${
						-(window.innerWidth / 2 - mousePosition.y) /
						EYEBROW_MOVEMENT_LIMIT
					}px) translateX(${
						-(window.innerWidth / 2 - mousePosition.x) /
						EYEBROW_MOVEMENT_LIMIT
					}px)`,
				}}
			/>
			<Hair />
			<path
				fill="#5F3F30"
				d="M1687.35 235.198c.55.062 3.85 1.11 4.09 1.185 10.65 3.271 21.34 8.796 28.65 17.408 8.22 32.01 22.03 90.254 18.12 123.103-.7 5.899-12.01 46.076-11.35 47.757 1.53 3.928 4.38 5.04 7.94 5.042l.29-.003c4.59-.076 10.3-1.888 15.79-1.878l.36.003c5.26.087 10.3 1.911 13.98 8.585 9.66 17.501 15.85 57.066 13.82 76.166-4.22 39.57 1.24 72.936-6.88 111.863-9.32 44.733-16.11 89.898-27.53 134.141-3.77 14.612-9.24 29.182-14.25 43.41-1.82 5.16-5.83 16.134-7.89 21.205-.87 2.145-18.28 23.338-20.41 23.594l-.03.002c-.1.005-.17-.052-.18-.175-4.49-39.867 19.85-133.242-12.25-136.091-15.74-1.397 2.31-43.13-12.51-69.772-17.46-31.369-27.31-69.227-39.17-69.537l-.17-.002c-3.05.015-6.22 2.508-9.69 8.218-12.35 20.305-30.72 33.179-44.71 33.436l-.31.004c-12.57.062-21.51-10.198-19.14-34.599.44-4.495-3-6.502-7.95-6.565l-.28-.002c-7 .014-16.88 3.796-23.26 9.865-4.78 4.55-9.61 6.474-14.25 6.572l-.26.004c-17.63.112-32.29-26.101-30.23-34.371.96-3.815-.48-4.973-3.18-5.019l-.23-.001c-3.78.02-9.87 2.02-15.47 2.101l-.35.003c-4.67 0-8.96-1.398-11.25-6.479-1.65-3.684-5.93-21.272-5.83-21.028-4.11-7.349 84.16-78.401 133.09-113.166 18.5-13.145 52.59-48.528 62.57-66.635 15.68-28.453 35.39-68.537 40.31-108.344z"
				transform="translate(-760.018 -127.766)"
			></path>
			<path
				d="M1358.09 271.622c1.64-5.187 3.53-10.291 4.87-15.118l2.53-9.094-9.29-1.689c-64.08-11.659-132.58 17.258-178.06 62.495-.01-.335-.01-.672-.01-1.009.01-5.822 1.18-11.823 1.8-17.46l1.5-13.468-12.83 4.357c-96.99 32.93-163.1 131.807-179.857 230.14-5.206-3.884-10.549-7.719-14.936-11.34l-9.216-7.607-4.308 11.146c-11.671 30.202-15.136 64.233-18.04 96.187-4.446 48.928-3.148 100.209 6.966 148.405 8.213 39.133 23.265 76.156 39.358 112.599 8.232 18.641 20.583 44.064 30.253 62.028l16.09-5.5c-10.92-65.529-10.95-159.429 19.21-222.103 2.46 3.393 4.74 6.653 5.86 9.097l11.24 24.489 5.05-26.469c6.89-36.061 18.6-78.453 46.97-103.699 11.45-10.183 27.15-17.022 42.56-24.1 10.32-4.74 20.52-9.585 29.56-15.26-.68 4.309-1.69 8.37-3.19 11.49l-4.96 10.323 11.3 1.905c22.79 3.845 47.51-.564 66.2-14.257l-2.71 8.967 14.27-3.049c19.33-4.132 40.61-14.483 55.52-28.185 14 3.774 27.76 14.545 37.36 24.66l3.29 3.459 4.67-.947c13.23-2.681 27.47-4.685 40.73-8.672 10.36-3.116 20.13-7.429 28.6-13.9.35.988.65 1.943.88 2.837l1.87 7.082 7.29-.699c5.93-.569 13.71-.974 20.74-1.957.72 6.011.73 12.536 1.47 17.932l.65 4.632 4.23 1.986c10.07 4.721 19.31 12.336 26.83 20.517l5.09 5.52 6.16-4.273c9.32-6.454 21.69-14.412 33.27-18.91 3.1 8.824 4.17 21.017 4.36 28.491l.29 11.174 10.73-3.124c23.85-6.941 51.41-14.948 69-33.635 13.56 17.07 20.62 36.411 25.83 57.969 4.06 16.782 8.86 33.697 10.1 50.996.7 9.771.29 19.408.2 29.162l-.22 21.898 15.08-15.879c2.08-2.184 4.22-4.347 6.38-6.508-.44 16.879-2.37 33.822-3.27 50.594-1.87 35.123-3.5 71.596-10.23 106.239l-7.99 41.14 23.58-34.649c61.03-89.692 85.8-252.054 90.56-309.775 4.41-53.421 1.3-108.046-19.08-158.636l-3.32-8.234-8.13 3.56c-5.29 2.313-10.96 5.455-17.01 7.441 31.32-84.733-.15-198.013-76.23-250.255l-7.62-5.232-4.68 7.967c-14.62 24.853-38.13 31.297-64.92 36.115-27.05 4.864-54.38 9.082-81.25 14.822-16.18 3.454-32.88 7.296-47.11 15.973.04-.546.1-1.095.15-1.64.64-5.8 2.5-11.589 3.1-16.014l1.55-11.48-11.44 1.813c-34.99 5.545-71.61 27.558-95.24 56.219zm362.19 158.426l-5.34 11.263 12.42 1.017c10.72.877 20.86-2.919 30.08-6.964 16.47 45.707 18.65 94.585 14.7 142.422-4.01 48.676-22.3 173.948-65.78 263.281 2.07-21.336 3.13-42.853 4.26-63.898 1.29-24.202 4.56-48.754 2.89-72.983l-1.41-20.485-13.63 15.36a181.549 181.549 0 01-5.65 6.055c-.05-3.115-.17-6.236-.4-9.37-1.31-18.246-6.25-36.111-10.53-53.813-6.73-27.806-16.52-52.168-36.63-73.307l-7.47-7.85-5.97 9.046c-12.28 18.62-35.02 26.222-56.12 32.343-1.29-11.226-4.13-24.568-9.01-32.229l-3.38-5.311-6.09 1.611c-12.79 3.384-27.47 11.743-39.34 19.537-6.76-6.521-14.43-12.439-22.6-16.896-.71-7.825-.91-16.838-3.12-23.869l-2.54-8.07-8.12 2.388c-5.52 1.627-13.13 2.178-19.86 2.651-1.36-3.466-2.96-6.99-4.25-9.809l-5.58-12.126-8.76 10.076c-8.04 9.258-18.73 14.279-30.18 17.72-11.23 3.378-23.2 5.233-34.59 7.388-12.77-12.441-30.51-24.406-47.77-27.282l-4.45-.742-3.14 3.237c-10.4 10.699-25.52 19.242-40.4 24.076-.91-3.177-2.33-6.228-4.05-8.952l-6.42-10.149-7.56 9.331c-12.86 15.874-33.32 22.506-53.22 21.666 1.88-8.793 2.6-18.93 2.83-26.213l.7-21.844-15.42 15.491c-10.43 10.48-25.54 17.407-40.77 24.403-17.01 7.813-34.19 15.644-46.82 26.885-26.05 23.177-39.94 59.233-48.2 93.566-1.06-1.6-1.95-3.077-2.53-4.337l-6.87-14.981-8.38 14.197c-30.58 51.83-37.9 130.244-33.48 197.117a863.42 863.42 0 01-8-17.491c-15.605-35.345-30.289-71.223-38.254-109.177-9.766-46.539-10.962-96.06-6.669-143.305 2.415-26.581 5.08-54.703 13.136-80.555 5.861 4.32 12 8.77 16.74 13.12l12.397 11.379 1.99-16.713c10.97-92.485 68.94-189.138 157.47-226.082a63.149 63.149 0 00-.24 5.307c-.02 8.05 1.72 15.782 7.02 22.561l6.4 8.183 6.86-7.798c39.12-44.462 101.96-75.615 162.22-68.87-1.59 4.769-3.24 9.675-4.34 14.564-2.3 10.121-2.33 20.159 2.66 29.302l8.07 14.798 7.27-15.209c15.36-32.156 50.83-59.696 86.59-69.584-.51 2.786-.9 5.652-.93 8.457-.06 6.89 1.75 13.44 6.83 18.782l5.71 6.002 6.22-5.466c13.71-12.043 31.93-15.608 49.2-19.295 26.69-5.701 53.84-9.883 80.7-14.714 28.93-5.201 54.06-13.023 71.5-36.445 68.49 52.884 93.52 161.377 57.4 237.602z"
				transform="translate(-760.018 -127.766)"
			></path>
			<RightEye
				style={{
					transform: `translateY(${
						-(window.innerWidth / 2 - mousePosition.y) /
						EYE_MOVEMENT_LIMIT
					}px) translateX(${
						-(window.innerWidth / 2 - mousePosition.x) /
						EYE_MOVEMENT_LIMIT
					}px)`,
				}}
			/>
		</svg>
	);
}

export default Person;
