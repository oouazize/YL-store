"use client";
import Button from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import plusSvg from "@/public/assets/plusicon.svg";
import { MdSort } from "react-icons/md";
import ProductDetail from "@/components/product/productDetail";
import CreateProduct from "@/components/product/createProduct";
import ProductList from "@/components/product/productList";
import { useTranslation } from "@/app/i18n/i18n-client";
import productList from "@/hooks/productList";

export default function page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const all = productList(locale);
	const { t } = useTranslation(locale, "category");
	const [activeItem, setActiveItem] = useState("");
	const itemsData = [
		t("all"),
		t("jacket"),
		t("sweater"),
		t("tshirt"),
		t("jeans"),
		t("shorts"),
		t("shirt"),
		t("suit"),
	];

	useEffect(() => {
		setActiveItem(t("all"))
	}, [locale])

	// useEffect(() => {
	// 	// fetch products data by item name
	// }, [activeItem]);

	return (
		<main>
			<div className="w-full bg-secondary flex flex-grow flex-col gap-7 rounded-2xl p-4 md:p-8">
				<div className="title flex-between">
					<h3 className="text-primary">Men Products</h3>
					<Button onClick={() => all.setCreatingProduct(true)}>
						<span className="hidden md:block">Add a new product</span>
						<Image
							src={plusSvg}
							alt="plus icon"
							className="fill-black hover:rotate-45 hover:transition-all hover:ease-in-out hover:duration-500"
						/>
					</Button>
				</div>
				<div className="items flex-between gap-3">
					<div className="flex gap-2 overflow-x-hidden">
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
						<span className="hidden md:block">{t("sort")}</span>
						<MdSort />
					</Button>
				</div>
				<ProductList
					selectedProduct={all.selectedProduct}
					setSelectedProduct={all.setSelectedProduct}
				/>
			</div>
			{all.creatingProduct && <CreateProduct toggle={all.setCreatingProduct} />}
			{all.selectedProduct.id && (
				<ProductDetail
					product={all.selectedProduct}
					toggle={all.setSelectedProduct}
				/>
			)}
		</main>
	);
}
