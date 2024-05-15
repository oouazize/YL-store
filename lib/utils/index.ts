import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { ClassValue } from "class-variance-authority/types";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formSchema = z.object({
	titleEN: z
		.string()
		.trim()
		.min(1, { message: "A title is required in both English and French" }),
	titleFR: z
		.string()
		.trim()
		.min(1, { message: "A title is required in both English and French" }),
	price: z
		.number()
		.min(1, { message: "A price is required" })
		.transform((price) => Number(price)),
	descriptionEN: z.string().trim().optional(),
	descriptionFR: z.string().trim().optional(),
	// images: z.mixed(), // You may need to define a schema for files
	item: z.string().min(1, { message: "Required" }),
	sizes: z.array(z.string()).min(1, { message: "Required" }),
	category: z.string().min(1, { message: "Required" }),
});
