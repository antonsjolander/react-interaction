import { useState } from "react";

export function Section() {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [hover, setHover] = useState(false);
	const handleMouseMove = (e) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });
	};

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	return (
		<section
			onMouseMove={handleMouseMove}
			style={{ backgroundColor: hover ? "blue" : "black" }}
			className="section"
		>
			<div
				style={{
					transform: `translate(${cursorPosition.x}px, ${
						cursorPosition.y
					}px) scale(${hover ? 2 : 1})`,
					// top: `${cursorPosition.y}px`,
					// left: `${cursorPosition.x}px`,
				}}
				className="cursor"
			></div>
			<a
				className="link"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				href="https://google.com"
			>
				go to google
			</a>
		</section>
	);
}
