// "use client";

import { z } from "zod";

export const formSchema = z.object({
	title: z.string().trim().min(1, { message: "A title is required" }),
	price: z.string().refine(price => !isNaN(Number(price)) && Number(price) > 0, {message: 'A price is required'}).transform(price => Number(price)),
	description: z.string().trim().optional(),
	images: z.any(), // You may need to define a schema for files
	item: z.string(),
	sizes: z.array(z.string()),
});

const newProductSchema = z.object({
	title: z.string(),
	price: z.number(),
	description: z.string(),
	images: z.array(z.any()), // You may need to define a schema for files
	item: z.string(),
	sizes: z.array(z.string()),
});
