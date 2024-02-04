import React from "react";
import LanguageChanger from "./languageChanger"

export default function Footer() {
	return (
		<footer className="w-full flex-between p-6 border-t-gray border-t-2">
			<span>© YL Inc. 2024</span>
			<div className="social flex-center gap-4">
				<LanguageChanger />
				<a href="">Instagram</a>
				<a href="">Facebook</a>
			</div>
		</footer>
	);
}
