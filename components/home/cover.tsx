import patternPad from "@/public/assets/patternpad.svg";
import Image from "next/image";
import {useTranslation} from '@/app/i18n';

export default async function Cover({ lng }: { lng: string }) {
	const { t } = await useTranslation(lng, 'home');

	return (
		<section className="h-[calc(100vh-64px)]">
			<article className="flex-center flex-col text-center h-full gap-6">
				<h1 className="w-3/4 max-w-[970px]">{t("header")}</h1>
				<p className="w-4/5 max-w-[1300px]">{t("paragraph")}</p>
			</article>
			<Image
				src={patternPad}
				alt=""
				className="absolute bottom-0 -z-10 opacity-15 w-screen"
			/>
		</section>
	);
}
