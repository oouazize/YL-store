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
import Link from "next/link";

export default function page({
	params: { locale, type },
}: {
	params: { locale: string; type: string };
}) {
	const all = productList(locale);
	const { t } = useTranslation(locale, "category");
	const [activeItem, setActiveItem] = useState("");
	const [fetchingType, setFetchingType] = useState<"all" | "title" | "price">(
		"all"
	);
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
		setActiveItem(t("all"));
	}, [locale]);

	return (
		<main>
			<div className="w-full bg-secondary flex flex-col gap-7 rounded-2xl p-4 md:p-8">
				<div className="title flex-between">
					<h3 className="text-primary">Men Products</h3>
					<Link href="/newProduct">
						<Button>
							<span className="hidden md:block">Add a new product</span>
							<Image
								src={plusSvg}
								alt="plus icon"
								className="fill-black hover:rotate-45 hover:transition-all hover:ease-in-out hover:duration-500"
							/>
						</Button>
					</Link>
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
					<Button className="accordinate" variant="outline">
						{/* <span className="hidden md:block">{t("sort")}</span> */}
						<ul>
							<li>
								<span className="hidden md:block">{t("sort")}</span>
								<div className="triangle"></div>
								<ul className="ul">
									<li onClick={() => setFetchingType("title")}>
										<span>Name</span>
									</li>
									<li onClick={() => setFetchingType("price")}>
										<span>Price</span>
									</li>
								</ul>
							</li>
						</ul>
						<MdSort />
					</Button>
				</div>
				<ProductList
					fetchingType={fetchingType}
					category={type}
					selectedProduct={all.selectedProduct}
					setSelectedProduct={all.setSelectedProduct}
				/>
			</div>
			{all.selectedProduct.id && (
				<ProductDetail
					product={all.selectedProduct}
					toggle={all.setSelectedProduct}
				/>
			)}
		</main>
	);
}
