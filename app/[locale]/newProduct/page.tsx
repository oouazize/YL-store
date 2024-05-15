'use client';
import React from "react";
import { Toaster } from "react-hot-toast";
import { DynamicForm } from "@/components/ui/dynamicForm";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/utils";
import FormField from "@/components/form";

export default function Page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			titleEN: "",
			titleFR: "",
			price: 0,
			sizes: [],
			// images: [],
			item: "",
			descriptionEN: "",
			descriptionFR: "",
			category: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		form.reset();
	}

	const sizesDropDownOptions = ["S", "M", "L", "XL", "XXL"];

	const itemDropDownOptions = ["S", "M", "L", "XL", "XXL"];

	const categoryDropDownOptions = ["Women", "Men", "Kids"];

	const formFields: { name: string; label: string; options?: string[] }[] = [
		{ name: "titleEN", label: "Title" },
		{ name: "titleFR", label: "Title" },
		{ name: "price", label: "Price" },
		{ name: "descriptionEN", label: "Description" },
		{ name: "descriptionFR", label: "Description" },
		{
			name: "sizes",
			label: "Sizes",
			options: sizesDropDownOptions,
		},
		{
			name: "item",
			label: "Item",
			options: itemDropDownOptions,
		},
		{
			name: "category",
			label: "Category",
			options: categoryDropDownOptions,
		},
	];

	return (
		<main>
			<div className="w-full h-full bg-secondary flex flex-grow flex-col gap-7 rounded-2xl p-4 md:p-8">
				<Toaster position="bottom-right" />
				<div className="relative mr-auto">
					<h3>New Product</h3>
					<p className="text-sm text-gray">
						deploy your new product in one-click
					</p>
				</div>
				<div className="flex flex-col flex-grow lg:f lg:flex-row justify-between items-center lg:items-start gap-6">
					{/* <DynamicForm
						form={form}
						onSubmit={onSubmit}
						formFields={formFields}
					/> */}
					<FormField />
				</div>
			</div>
		</main>
	);
}
