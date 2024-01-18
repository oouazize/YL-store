"use client";
import Image from "next/image";
import plusSvg from "@/public/plus.svg";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FadeInUpVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2,
			duration: 0.6,
		},
	},
};

export default function Faq() {
	const [openIndex, setOpenIndex] = useState(-1);
	const [isCross, setIsCross] = useState(false);

	const data = [
		{
			q: "What is YL?",
			a: "YL store offers clothing for men, women, and kids",
		},
		{
			q: "How to buy a product?",
			a: "YL makes it easy for you. Send a WhatsApp message to the seller with your address and any other relevant information",
		},
		{
			q: "What is the payment method?",
			a: "But now, Pay later!, YL requires payment upon delivery for better service.",
		},
	];

	const faq = data.map((item, index) => (
		<div key={index} className="w-full border-b-[1px] border-gray-400">
			<button
				className="flex w-full items-center gap-4 p-6"
				onClick={() => {
					setIsCross((prev) => !prev);
					setOpenIndex(openIndex === index ? -1 : index);
				}}
			>
				<Image
					src={plusSvg}
					alt="plus/cross icon"
					className={`${
						isCross ? "rotate-45" : ""
					} transition-all ease-in-out duration-500`}
				/>
				<h2 className="text-lg text-left font-medium">{item.q}</h2>
			</button>
			<div className={`px-6 py-4 ${openIndex === index ? "" : "hidden"}`}>
				<span>{item.a}</span>
			</div>
		</div>
	));
	return (
		<>
			<motion.section
				className="py-28 gap-10"
				variants={FadeInUpVariants}
				initial="initial"
				whileInView={"animate"}
				viewport={{ once: true }}
			>
				<h1>FAQ</h1>
				<figure className="w-4/5 bg-secondary rounded-2xl text-primary">
					{faq}
				</figure>
			</motion.section>
			<section className="py-28 gap-10 bg-secondary">
				<h1 className="text-primary">Shop Now</h1>
				<Link
					href="#categories"
					className="px-4 py-2 rounded-lg shadow-sm shadow-black w-fit font-bold bg-secondary text-primary"
				>
					Get Started
				</Link>
			</section>
		</>
	);
}
