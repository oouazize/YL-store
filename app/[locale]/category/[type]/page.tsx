"use client";
import Button from "@/lib/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import plusSvg from "@/public/assets/plusicon.svg";
import { useScopedI18n } from "@/locales/client";
import { MdSort } from "react-icons/md";
import { product } from "@/type";
import ProductCard from "@/components/product/productCard";
import image from "@/public/assets/menClothes.jpg";

export default function page() {
	const t = useScopedI18n("items");
	const [activeItem, setActiveItem] = useState(t("all"));
	const [selectedProduct, setSelectedProduct] = useState({} as product);
	const [products, setProducts] = useState([] as product[]);
	const itemsData = [
		t("all"),
		t("veste"),
		t("pull"),
		t("tshirt"),
		t("jean"),
		t("short"),
		t("chemise"),
		t("costume"),
	];

	const data: product[] = [
		{
			id: "1",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "2",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "3",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "4",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "5",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "6",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
		{
			id: "7",
			title: "CARTELO-Veste brodée de haute qualité pour homme",
			image,
			description: "vsdkj bvjsdk vsdbjk vdbsjk vcsdhk csdhk vbsdhk",
			price: 12,
			created_at: "2024 JAN 02",
		},
	];

	useEffect(() => {
		// fetch products data by item name
	}, [activeItem]);

	return (
		<main>
			<div className="products_area bg-secondary flex flex-grow flex-col gap-7 rounded-2xl p-8">
				<div className="title flex-between">
					<h3 className="text-primary">Men Products</h3>
					<Button>
						<span>Add a new product</span>
						<Image
							src={plusSvg}
							alt="plus icon"
							className="fill-black hover:rotate-45 hover:transition-all hover:ease-in-out hover:duration-500"
						/>
					</Button>
				</div>
				<div className="items flex-between gap-3">
					<div className="flex gap-2 overflow-x-auto">
						{activeItem &&
							itemsData.map((item, idx) => (
								<Button
									key={idx}
									variant={`${activeItem === item ? "primary" : "secondary"}`}
									onClick={() => setActiveItem(item)}
								>
									{item}
								</Button>
							))}
					</div>
					<Button variant="outline">
						{t("sort")} <MdSort />
					</Button>
				</div>
				<div className="list w-full">
					{data.map((product) => (
						<ProductCard
							key={product.id}
							className="overflow-hidden"
							variant={`${
								selectedProduct.id === product.id ? "pressed" : "default"
							}`}
							onClick={() => setSelectedProduct(product)}
						>
							<div className="flex flex-col w-full gap-2">
								<Image
									src={product.image}
									alt={product.title}
									className="w-full h-full rounded-lg"
								/>
								<h4 className="line-clamp-3 font-semibold text-sm">{product.title}</h4>
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
			</div>
			{selectedProduct && <div className="product_details"></div>}
		</main>
	);
}
