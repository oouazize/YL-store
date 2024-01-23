"use client";
import logo from "@/public/assets/logo1.png";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import LanguageChanger from "./languageChanger";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

export default function Nav() {
	const [searchText, setSearchText] = useState("");
	const [openInput, setOpenInput] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const t = useScopedI18n("nav");

	useEffect(() => {
		if (openInput && inputRef.current) inputRef.current.focus();
	}, [openInput]);

	const handleSearchText = (e) => {
		setSearchText(e.target.value);
	};

	const handleSearch = () => {
		setOpenInput(true);
	};

	const handleClickOutside = (e) => {
		if (inputRef.current && !inputRef.current.contains(e.target)) {
			setOpenInput(false);
		} else if (!openInput) {
			setOpenInput(true);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<header>
			<Image src={logo} alt="logo" className="w-9 h-9" />
			<ul className={`${openInput ? "hidden md:flex" : ""}`}>
				<Link href="/category/Women">{t("women")}</Link>
				<Link href="/category/Men">{t("men")}</Link>
				<Link href="/category/Kids">{t("kids")}</Link>
			</ul>
			<div className="search flex-center gap-2 h-[48px]" ref={inputRef}>
				<input
					type="text"
					placeholder="search..."
					value={searchText}
					className={`md:block ${openInput ? "" : "hidden"}`}
					onChange={handleSearchText}
				/>
				<IoSearchSharp
					className="w-[32px] h-[32px] cursor-pointer"
					onClick={handleSearch}
				/>
				<LanguageChanger />
			</div>
		</header>
	);
}
