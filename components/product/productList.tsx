"use client";
import React from "react";
import ProductCard from "./productCard";
import Image from "next/image";
import { product } from "@/type";
import image from "@/public/assets/menClothes.jpg";

import { supabaseForClientComponent } from "@/lib/supabase.client";
import { getProducts } from "@/hooks/getProducts";

export default function ProductList({ selectedProduct, setSelectedProduct }: { selectedProduct: product, setSelectedProduct: React.Dispatch<React.SetStateAction<product>> }) {

    // const { data, error } = await getProducts();
    // console.log(data)
	const data: product[] = [
		{
			id: "1",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "2",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "3",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "4",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "5",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "6",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "7",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			images: [image, image, image, image, image, image, image],
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
	];

	return (
		<div className="list w-full">
			{data?.map((product: any) => (
				<ProductCard
					key={product.id}
					className="product-card overflow-hidden"
					variant={`${
						selectedProduct.id === product.id ? "pressed" : "default"
					}`}
					onClick={() => setSelectedProduct(product)}
				>
					<div className="flex flex-col w-full gap-2">
						<Image
							src={product.images[0]}
							alt={product.title}
							className="w-full h-full rounded-lg"
						/>
						<h4 className="line-clamp-3 font-semibold text-sm">
							{product.title}
						</h4>
					</div>
					<div className="flex-between w-full font-bold">
						<h4
							className={`${
								selectedProduct.id === product.id
									? "text-priceColor"
									: "text-price"
							}`}
						>
							{product.price} $
						</h4>
						<span
							className={`${
								selectedProduct.id === product.id ? "" : "text-primary"
							}`}
						>
							New
						</span>
					</div>
				</ProductCard>
			))}
		</div>
	);
}
