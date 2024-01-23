"use client";
import Image from "next/image";
import plusSvg from "@/public/assets/plus.svg";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScopedI18n } from "@/locales/client";

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
	const t = useScopedI18n("faq");

	const data = [
		{
			q: t("q1"),
			a: t("a1"),
		},
		{
			q: t("q2"),
			a: t("a2"),
		},
		{
			q: t("q3"),
			a: t("a3"),
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
				<h1 className="text-primary">{t("shop")}</h1>
				<Link
					href="#categories"
					className="px-4 py-2 rounded-lg shadow-sm shadow-black w-fit font-bold bg-secondary text-primary"
				>
					{t("started")}
				</Link>
			</section>
		</>
	);
}
