import womenClothes from "@/public/assets/womenClothes.jpg";
import menClothes from "@/public/assets/menClothes.jpg";
import kidsClothes from "@/public/assets/kidsClothes.jpg";
import { category } from "@/type";
import CategoryCard from "./categoryCard";
import { useTranslation } from "@/app/i18n";

export default async function Categories({ lng }: { lng: string }) {
	const { t } = await useTranslation(lng, 'home');
	const data: category[] = [
		{
			image: womenClothes,
			title: t("women"),
			p: t("women_p"),
		},
		{
			image: menClothes,
			title: t("men"),
			p: t("men_p"),
		},
		{
			image: kidsClothes,
			title: t("kids"),
			p: t("kids_p"),
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
