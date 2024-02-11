import { StaticImageData } from "next/image";

type productProperties = {
	id: string;
	title: string;
	description: string;
	price: number;
	created_at: string;
};

export interface category {
	image: StaticImageData;
	title: string;
	p: string;
}

export interface product extends productProperties {
	images: string[];
}

export interface newProduct {
	title: string;
	images: File[];
	description?: string;
	price: string;
	category: string;
	item: string;
	sizes: string[];
}
