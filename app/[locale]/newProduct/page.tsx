"use client";
import { handleInsert } from "@/actions/insertProduct";
import React, { FC, HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { newProduct } from "@/type";
import { Toaster, toast } from "react-hot-toast";
import { formSchema } from "@/lib/form.validation";
import { z } from "zod";

interface props extends HTMLAttributes<HTMLDivElement> {
	label: string;
	error?: any;
}

const InputContent: FC<props> = ({
	className,
	children,
	label,
	error,
	...props
}) => {
	return (
		<div className={cn("flex flex-col space-y-1.5", className)} {...props}>
			<label className="text-sm font-semibold text-primary" htmlFor={label}>
				{label}
			</label>
			{children}
			{error && <span className="text-red-500">{String(error.message)}</span>}
		</div>
	);
};

export default function Page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const [values, setValues] = useState<newProduct>({
		title: "",
		price: "",
		sizes: [],
		images: [],
		item: "",
		description: "",
		category: "",
	});

	const handleSubmit = async (formData: FormData) => {
		try {
			await formSchema.parseAsync(values);
			await handleInsert(formData);
			toast.success("Product created successfully");
			setValues({
				title: "",
				price: "",
				sizes: [],
				images: [],
				item: "",
				category: "",
				description: "",
			});
		} catch (error) {
			console.log("error: ", error);
			toast.error("Product creating failed");
		}
	};
	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
		>
	) => {
		const { name, value, files, selectedOptions } = e.target;
		if (name === "sizes") {
			const selectedSizes = Array.from(
				selectedOptions,
				(option) => option.value
			);
			setValues((prev) => ({
				...prev,
				[name]: selectedSizes,
			}));
		} else {
			setValues((prev) => ({
				...prev,
				[name]: name === "images" ? files : value,
			}));
		}
	};

	return (
		<main>
			<div className="w-full h-full bg-secondary flex-grow flex-col gap-7 rounded-2xl p-4 md:p-8">
				<Toaster position="bottom-right" />
				<div className="relative mr-auto">
					<h3>New Product</h3>
					<p className="text-sm text-gray">
						deploy your new product in one-click
					</p>
				</div>
				<form
					action={handleSubmit}
					className="flex w-1/2 max-w-[1000px] mx-auto flex-col gap-4"
				>
					<div className="flex flex-wrap gap-4 pt-6">
						<InputContent
							className="flex-grow flex-shrink-0 basis-16"
							label="Name"
						>
							<input
								type="text"
								className="input-field"
								placeholder="Title"
								name="title"
								value={values.title}
								onChange={handleInputChange}
							/>
						</InputContent>
						<InputContent
							className="flex-grow flex-shrink-0 basis-4"
							label="Price"
						>
							<input
								type="number"
								className="input-field"
								placeholder="Price"
								name="price"
								value={values.price}
								onChange={handleInputChange}
							/>
						</InputContent>
					</div>
					<InputContent label="Description">
						<textarea
							className="w-full input-field max-h-[160px]"
							name="description"
							value={values.description}
							onChange={handleInputChange}
						/>
					</InputContent>
					<InputContent label="Images">
						<div className="h-[160px] relative border-2 border-primary flex-center">
							<input
								multiple
								type="file"
								name="images"
								className="absolute w-full p-12 outline-none opacity-0 z-10"
								onChange={handleInputChange}
							/>
							<p className="text-center text-primary">
								Drag your images here or click in this area
							</p>
						</div>
					</InputContent>
					<div className="flex flex-wrap gap-4">
						<div className="flex flex-grow flex-col gap-4">
							<InputContent
								label="Item"
								className="flex-grow flex-shrink-0 basis-16"
							>
								<select
									name="item"
									className="input-field"
									value={values.item}
									onChange={handleInputChange}
								>
									<option className="text-secondary" value="S">
										S
									</option>
									<option className="text-secondary" value="M">
										M
									</option>
									<option className="text-secondary" value="L">
										L
									</option>
									<option className="text-secondary" value="XL">
										XL
									</option>
									<option className="text-secondary" value="XXL">
										XXL
									</option>
								</select>
							</InputContent>
							<InputContent
								label="Category"
								className="flex-grow flex-shrink-0 basis-16"
							>
								<select
									name="category"
									className="input-field"
									value={values.category}
									onChange={handleInputChange}
								>
									<option className="text-secondary" value="Women">
										Women
									</option>
									<option className="text-secondary" value="Men">
										Men
									</option>
									<option className="text-secondary" value="Kids">
										Kids
									</option>
								</select>
							</InputContent>
						</div>
						<InputContent
							label="Size"
							className="flex-grow h-full flex-shrink-0 basis-16"
						>
							<select
								multiple
								className="input-field"
								name="sizes"
								onChange={handleInputChange}
							>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="XXL">XXL</option>
							</select>
						</InputContent>
					</div>
					<input
						className="w-full font-semibold flex-center gap-2 rounded-3xl py-2 px-3 bg-primary cursor-pointer"
						type="submit"
					/>
				</form>
			</div>
		</main>
	);
}
