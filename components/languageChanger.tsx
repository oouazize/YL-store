"use client";

import React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Image from "next/image";
import lang from "@/public/assets/language.png";
import { languages } from "@/app/i18n/settings";

const LanguageChanger = () => {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();
	return (
		<div className="accordinate flex-center gap-2 cursor-pointer">
			<Image src={lang} alt="lang" />
			<ul>
				<li>
					<b className="hidden md:block">{currentLocale}</b>
					<div className="triangle"></div>
					<ul className="ul">
						{languages.map((lng) => (
							<li key={lng} onClick={() => changeLocale(lng as "en" | "fr")}>
								<i className={`sl-flag flag-${lng}`}>
									<div id={lng}></div>
								</i>
								<span className={`${currentLocale === lng ? "active" : ""}`}>
									{lng === "en" ? "English" : "French"}
								</span>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default LanguageChanger;