import { StaticImageData } from "next/image";

export interface category {
	image: StaticImageData;
	title: string;
	p: string;
}

export interface product {
	id: string;
	title: string;
	images: StaticImageData[];
	description: string;
	price: number;
	created_at: string;
}

export interface newProduct {
	title: string;
	images: File[];
	description?: string;
	price: number;
	item: string;
	sizes: string[];
}
