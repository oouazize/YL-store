import womenClothes from "@/public/womenClothes.jpg";
import menClothes from "@/public/menClothes.jpg";
import kidsClothes from "@/public/kidsClothes.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
	const data = [
		{
			image: womenClothes,
			title: "Women",
			p: "Chic and timeless styles for her.",
		},
		{
			image: menClothes,
			title: "Men",
			p: "Modern essentials for a sharp look.",
		},
		{
			image: kidsClothes,
			title: "Kids",
			p: "Playful outfits for little adventures.",
		},
	];

	const categories = data.map((category, index) => (
		<div
			key={index}
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
		</div>
	));
	return <section id="categories" className="bg-secondary gap-6 py-28">{categories}</section>;
}
