import React from "react";
import { product } from "../../type";
import Image from "next/image";

export default function DescriptionTab({ product }: { product: product }) {
	return (
		<div className="w-full h-full flex flex-col gap-5">
			<Image
				src={product.images[0]}
				alt={product.title}
				className="w-full h-60 rounded-lg"
			/>
			<span className="font-bold text-lg">{product.title}</span>
			<span className="font-semibold text-lg">{product.description}</span>
		</div>
	);
}
