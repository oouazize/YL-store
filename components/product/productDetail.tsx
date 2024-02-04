"use client";
import React, { useEffect, useState } from "react";
import { product } from "../../type";
import Button from "@/components/ui/button";
import DescriptionTab from "./descriptionTab";
import Image, { StaticImageData } from "next/image";
import ToggleOff from "../toggleOff";

// TabButton component
const TabButton = ({
	label,
	onClick,
	isActive,
}: {
	label: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	isActive: boolean;
}) => (
	<Button onClick={onClick} variant={isActive ? "primary" : "secondary"}>
		{label}
	</Button>
);

// ImagesTab component
const ImagesTab = ({ images }: { images: StaticImageData[] }) => (
	<div className="w-full h-[63vh] flex flex-col gap-5 overflow-auto scroll-bar">
		{images.map((image) => (
			<Image
				src={image}
				alt="Product Image"
				className="w-full h-60 rounded-lg"
			/>
		))}
	</div>
);

// AcheterTab component
const AcheterTab = () => (
	<div className="w-full flex flex-col gap-5 font-medium">
		<p>
			Contactez le vendeur sur WhatsApp pour acheter ce produit. La livraison
			est gratuite dans la ville de Montréal, au Canada.
		</p>
		<p>
			Ce produit n'est livré qu'au Canada. Une fois votre commande passée, elle
			sera préparée et expédiée dans les 3 jours ouvrables.
		</p>
		<div className="wtp-icon w-[64px] h-[64px] cursor-pointer ml-auto"></div>
	</div>
);

export default function ProductDetail({
	product,
	toggle,
}: {
	product: product;
	toggle: React.Dispatch<React.SetStateAction<any>>;
}) {
	const [activeTab, setActiveTab] = useState("Description");

	const renderTabContent = () => {
		switch (activeTab) {
			case "Description":
				return <DescriptionTab product={product} />;
			case "Images":
				return <ImagesTab images={product.images} />;
			case "Acheter":
				return <AcheterTab />;
			default:
				return null;
		}
	};

	useEffect(() => {
		setActiveTab("Description");
	}, [product]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className="w-[30%] max-w-[400px] rounded-2xl p-8 flex flex-col gap-7 bg-secondary">
			<div className="relative">
				<h3>Details</h3>	
				<ToggleOff toggle={toggle} />
			</div>
			<div className="flex-center w-full gap-2">
				<TabButton
					label="Description"
					onClick={() => handleTabClick("Description")}
					isActive={activeTab === "Description"}
				/>
				<TabButton
					label="Images"
					onClick={() => handleTabClick("Images")}
					isActive={activeTab === "Images"}
				/>
				<TabButton
					label="Acheter"
					onClick={() => handleTabClick("Acheter")}
					isActive={activeTab === "Acheter"}
				/>
			</div>
			<figure className="w-full h-full text-primary">
				{renderTabContent()}
			</figure>
		</div>
	);
}
