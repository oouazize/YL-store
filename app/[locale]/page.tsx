import Categories from "@/components/home/categories";
import Cover from "@/components/home/cover";
import Faq from "@/components/home/faq";
import { Provider } from "./provider";

export default function Page() {
	return (
		<>
			<Cover />
			<Categories />
			<Provider>
				<Faq />
			</Provider>
		</>
	);
}
