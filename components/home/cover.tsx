import Nav from "@/components/nav";
import patternPad from "@/public/patternpad.svg";
import Image from "next/image";

export default function Cover() {
	return (
		<section className="h-screen relative">
			<Nav />
			<article className="flex-center flex-col text-center h-full gap-6">
				<h1 className="w-3/4 max-w-[900px]">
					Style Elevated, Shop Now, Wear Confidence
				</h1>
				<p className="w-4/5 max-w-[1300px]">
					Discover a curated style that exudes confidence. Elevate your wardrobe
					with chic selections. Shop now for a confident, chic look that speaks
					volumes. Unleash your style – browse, click, wear confidence!
				</p>
			</article>
			<Image src={patternPad} alt="" className="absolute bottom-0 -z-10 opacity-15 w-screen" />
		</section>
	);
}
