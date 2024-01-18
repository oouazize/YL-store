"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { category } from "@/type";

const FadeInUpVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
			duration: 0.6,
		},
	}),
};

export default function CategoryCard({
	category,
	index,
}: {
	category: category;
	index: number;
}) {
	return (
		<motion.div
			variants={FadeInUpVariants}
			initial="initial"
			whileInView={"animate"}
			viewport={{ once: true }}
			custom={index}
			className={`w-4/5 flex-center gap-12 flex-col md:flex-row ${
				index % 2 ? "md:flex-row-reverse" : ""
			}`}
		>
			<Image
				src={category.image}
				alt={category.title}
				className="w-full md:w-1/2 h-64 lg:h-96 rounded-3xl"
			/>
			<div
				className={`h-full w-full md:w-1/2 flex-grow flex flex-col justify-center gap-4 ${
					index % 2 ? "md:pl-12" : ""
				}`}
			>
				<h2>{category.title}</h2>
				<h5 className="w-2/3">{category.p}</h5>
				<Link
					href={`/category/${category.title}`}
					className="px-4 py-2 rounded-lg shadow-sm shadow-black w-fit font-bold bg-secondary text-primary"
				>
					Explore Now
				</Link>
			</div>
		</motion.div>
	);
}
