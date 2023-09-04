import React from "react";
import { useState, useEffect } from "react";

import { tick, copy, linkIcon, loader } from "../assets";

const Demo = () => {
	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				<form
					className="relative flex justify-center item-center"
					onSubmit={() => {}}>
					<img
						src={linkIcon}
						alt="link_icon"
						className="absolute left-0 my-3 ml-3 w-5"
					/>
					<input
						type="url"
						placeholder="Enter a URL"
						value=""
						onChange={() => {}}
						required
						className="url_input peer"
					/>

					<button
						type="submit"
						className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
						{" "}
						Enter
					</button>
				</form>
			</div>
		</section>
	);
};

export default Demo;
