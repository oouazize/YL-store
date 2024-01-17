"use client";
import logo from "@/public/logo1.png";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Nav() {
	const [searchText, setSearchText] = useState("");
	const [openInput, setOpenInput] = useState(false);
	const inputRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (openInput && inputRef.current) inputRef.current.focus();
	}, [openInput]);

	const handleSearchText = (e: {
		preventDefault: () => void;
		target: { value: React.SetStateAction<string> };
	}) => {
		e.preventDefault();
		setSearchText(e.target.value);
	};

	const handleSearch = () => {
		setOpenInput(true);
	};

	const handleClickOutside = (e) => {
		if (inputRef.current && !inputRef.current.contains(e.target))
			setOpenInput(false);
		else if (!openInput) setOpenInput(true);
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<header>
			<Image src={logo} alt="logo" className="w-9 h-9" />
			<ul className={`${openInput ? "md:flex hidden" : ""}`}>
				<li>Women</li>
				<li>Men</li>
				<li>Kids</li>
			</ul>
			<div className="search flex-center gap-2 h-[48px]" ref={inputRef}>
				<input
					type="text"
					placeholder="search..."
					value={searchText}
					className={`md:block ${openInput ? "" : "hidden"}`}
					onChange={handleSearchText}
				/>
				<IoSearchSharp className="w-[32px] h-[32px] cursor-pointer" onClick={handleSearch} />
			</div>
		</header>
	);
}
