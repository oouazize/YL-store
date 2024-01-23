import { StaticImageData } from "next/image";

export interface category {
	image: StaticImageData;
	title: string;
	p: string;
}

export interface product {
	id: string;
	title: string;
	image: StaticImageData;
	description: string;
	price: number;
	created_at: string;
}