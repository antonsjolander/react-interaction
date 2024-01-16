import "./App.css";
import { useState } from "react";
import { Section } from "./components/Section";
import { Cursor } from "./components/Cursor";
function App() {
	const [hover, setHover] = useState(false);
	return (
		<div className="app">
			<Section setHover={setHover} hover={hover} />
			<section className="section"></section>
			<Cursor hover={hover} />
		</div>
	);
}

export default App;
