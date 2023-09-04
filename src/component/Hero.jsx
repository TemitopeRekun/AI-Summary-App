import React from "react";

import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
				<img src={logo} alt="sumz_logo" className="w-28 object-contain" />
				<button
					type="button"
					onClick={() =>
						window.open("https://github.com/TemitopeRekun/AI-Summary-App")
					}
					className="black_btn">
					Github
				</button>
			</nav>

			<h1 className="head_text">
				Summarize Article with <br className="max-md:hidden" />
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>

			<h2 className="desc">
				{" "}
				Simplify your reading with summarize, an open-source article
				summarizer that transforms lenghty articles into clean and concise
				summaries.
			</h2>
		</header>
	);
};

export default Hero;
