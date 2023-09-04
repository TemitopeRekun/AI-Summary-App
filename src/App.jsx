import Hero from "./component/Hero";
import Demo from "./component/Demo";

import "./App.css";

import React from "react";

const App = () => {
	return (
		<main>
			<div className="main">
				<div className="gradient" />
			</div>
			<div className="app">
				<Hero />
				<Demo />
			</div>
		</main>
	);
};

export default App;
