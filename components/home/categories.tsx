import womenClothes from "@/public/womenClothes.jpg";
import menClothes from "@/public/menClothes.jpg";
import kidsClothes from "@/public/kidsClothes.jpg";
import { category } from "@/type";
import CategoryCard from "./categoryCard";

export default function Categories() {
	const data: category[] = [
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
		<CategoryCard key={index} category={category} index={index} />
	));
	return (
		<section id="categories" className="bg-secondary gap-6 py-28">
			{categories}
		</section>
	);
}
