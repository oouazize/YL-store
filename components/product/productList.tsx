"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import Image from "next/image";
import { product } from "@/type";
import { supabaseForClientComponent as supabase } from "@/lib/supabase.client";

export default function ProductList({
	fetchingType,
	category,
	selectedProduct,
	setSelectedProduct,
}: {
	fetchingType: "all" | "title" | "price";
	category: string;
	selectedProduct: product;
	setSelectedProduct: React.Dispatch<React.SetStateAction<product>>;
}) {
	console.log(fetchingType);
	const [dataProducts, setDataProducts] = useState<product[]>([]);

	const getDataWithImages = async (data: product[]) => {
		return Promise.all(
			data.map(async (product) => {
				const productImages = product.images.map((imagePath) => {
					return supabase.storage.from("images").getPublicUrl(imagePath).data
						.publicUrl;
				});
				return { ...product, images: productImages };
			})
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				let query = supabase
					.from("product")
					.select("*")
					.eq("category", category);

				if (fetchingType !== "all")
					query = query.order(fetchingType, { ascending: true });
				const { data, error } = await query;
				if (error) {
					throw error;
				}
				const response = await getDataWithImages(data as product[]);
				setDataProducts(response);
			} catch (error: any) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	}, [fetchingType]); // Empty dependency array ensures this effect runs only once on component mount

	console.log(dataProducts);
	return (
		<div className="list w-full">
			{dataProducts?.map((product: any) => (
				<ProductCard
					key={product.id}
					className="product-card overflow-hidden"
					variant={`${
						selectedProduct.id === product.id ? "pressed" : "default"
					}`}
					onClick={() => setSelectedProduct(product)}
				>
					<div className="flex flex-col w-full h-3/5">
						<Image
							src={product.images[0]}
							alt={product.title}
							width={200}
							height={200}
							className="w-full h-full rounded-lg"
						/>
					</div>
					<div className="flex flex-col gap-2 justify-between w-full flex-grow font-bold">
						<h4 className="line-clamp-3 max-h-[74px] font-semibold text-sm">
							{product.title}
						</h4>
						<div className="flex-between">
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
					</div>
				</ProductCard>
			))}
		</div>
	);
}
