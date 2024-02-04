import Categories from "@/components/home/categories";
import Cover from "@/components/home/cover";
import Faq from "@/components/home/faq";

export default function Page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	return (
		<>
			<Cover lng={locale} />
			<Categories lng={locale} />
			<Faq lng={locale} />
		</>
	);
}
