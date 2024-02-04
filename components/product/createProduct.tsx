"use client";
import { handleInsert } from "@/actions/insertProduct";
import React, { FC, HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { newProduct } from "@/type";
import ToggleOff from "../toggleOff";

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
	toggle,
}: {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [values, setValues] = useState({} as newProduct);

	const handleSubmit = async (formData: FormData) => {
		try {
			// Assuming handleInsert is an async function
			await handleInsert(formData);
			// If the server action is successful, toggle
			toggle((prev) => !prev);
		} catch (error) {
			console.error("Error occurred:", error);
			// Handle error if needed
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
				(option: any) => option.value
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
		<div className="absolute w-full h-full top-0 left-0 flex-center z-50">
			<div className="w-[50%] min-w-[400px] max-w-[600px] rounded-2xl p-8 bg-secondary">
				<div className="relative">
					<ToggleOff toggle={toggle} />
					<h3>New Product</h3>
					<p className="text-sm text-gray">
						deploy your new product in one-click
					</p>
				</div>
				<form action={handleSubmit} className="flex flex-col gap-4">
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
								type="text"
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
					<div className="flex flex-wrap gap-4 pt-6">
						<InputContent label="Item" className="flex-grow flex-shrink-0 basis-16">
							<select
								name="item"
								className="input-field"
								value={values.item}
								onChange={handleInputChange}
							>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="XXL">XXL</option>
							</select>
						</InputContent>
						<InputContent label="Size" className="flex-grow flex-shrink-0 basis-16">
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
		</div>
	);
}
