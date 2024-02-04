"use client";
import React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Image from "next/image";
import lang from "@/public/assets/language.png";

const LocaleSwitcher = () => {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();
	return (
		<div className="sl-nav flex-center gap-2 cursor-pointer">
			<Image src={lang} alt="lang" />
			<ul>
				<li>
					<b className="hidden md:block">{currentLocale}</b>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
					<div className="triangle"></div>
					<ul className="ul">
						<li onClick={() => changeLocale("en")}>
							<i className="sl-flag flag-usa">
								<div id="english"></div>
							</i>
							<span className={`${currentLocale === "en" ? "active" : ""}`}>
								English
							</span>
						</li>
						<li onClick={() => changeLocale("fr")}>
							<i className="sl-flag flag-fr">
								<div id="french"></div>
							</i>
							<span className={`${currentLocale !== "en" ? "active" : ""}`}>
								French
							</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default LocaleSwitcher;
