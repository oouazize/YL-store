"use client";
import Image from "next/image";
import React from "react";
import cross from "@/public/assets/cross.svg";

export default function ToggleOff({
	toggle,
}: {
	toggle: React.Dispatch<React.SetStateAction<any>>;
}) {
	return (
		<Image
			src={cross}
			alt="cross icon"
			className="absolute top-2 right-2 ml-auto bg-white w-[30px] cursor-pointer"
			onClick={() => toggle((prev: any) => !prev)}
		/>
	);
}
