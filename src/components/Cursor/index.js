import { useState, useEffect } from "react";

export function Cursor({ hover }) {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
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
	);
}
