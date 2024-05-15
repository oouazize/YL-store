// "use client";

import * as Yup from "yup";

export const validationSchema = Yup.object({
	titleEN: Yup.string().trim().required("A title is required in both English and French"),
	titleFR: Yup.string().trim().required("A title is required in both English and French"),
	price: Yup.number().required('A price is required').transform(price => Number(price)),
	descriptionEN: Yup.string().trim().optional(),
	descriptionFR: Yup.string().trim().optional(),
	images: Yup.mixed(), // You may need to define a schema for files
	item: Yup.string().required('Required'),
	sizes: Yup.array().of(Yup.string()).required('Required'),
});

const newProductSchema = Yup.object({
	title: Yup.string(),
	price: Yup.number(),
	description: Yup.string(),
	images: Yup.array(), // You may need to define a schema for files
	item: Yup.string(),
	sizes: Yup.array(Yup.string()),
});
