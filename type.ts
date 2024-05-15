import { StaticImageData } from "next/image";

type productProperties = {
	id: string;
	titleEN: string;
	titleFR: string;
	descriptionEN: string;
	descriptionFR: string;
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
	titleEN: string;
	titleFR: string;
	images: File[];
	descriptionEN?: string;
	descriptionFR?: string;
	price: string;
	category: string;
	item: string;
	sizes: string[];
}

export type FormikControlProps = {
	control: string;
	label: string;
	name: string;
	className?: string;
	style?: string,
	type?: string;
	options?: { key: string; value: string }[];
};

export type inputField = {
	name: string;
	label: string;
	options?: { key: string, value: string }[];
	type: string;
	style: string;
	className: string;
}