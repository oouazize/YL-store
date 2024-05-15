"use client";
import React, { HTMLAttributes, useState } from "react";
import { handleInsert } from "@/actions/insertProduct";
import { validationSchema } from "@/lib/form.validation";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { inputField, newProduct } from "@/type";
import { FormikProps, useFormik, Formik, Form } from "formik";
import { Button } from "@nextui-org/react";
import { InputContent } from "./ui/formCreater";

interface props extends HTMLAttributes<HTMLDivElement> {
	label: string;
	error?: any;
}

type FormProps = {
	lng: string;
	formik: FormikProps<any>;
};

export default function FormField() {
	const initialValues = {
		titleEN: "",
		titleFR: "",
		price: "",
		sizes: [],
		images: [],
		item: "",
		descriptionEN: "",
		descriptionFR: "",
		category: "",
	};
	const onSubmit = (values: any, onSubmitProps: any) => {
		// try {
		console.log(values);
		onSubmitProps.setSubmitting(false);
		onSubmitProps.resetForm();
		// await formSchema.parseAsync(values);
		// await handleInsert(formData);
		// toast.success("Product created successfully");
		// setValues({
		// 	titleEN: "",
		// 	titleFR: "",
		// 	price: "",
		// 	sizes: [],
		// 	images: [],
		// 	item: "",
		// 	category: "",
		// 	descriptionEN: "",
		// 	descriptionFR: "",
		// });
		// } catch (error) {
		// 	console.log("error: ", error);
		// 	toast.error("Product creating failed");
		// }
	};
	const formik = useFormik({ initialValues, onSubmit, validationSchema });
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			validateOnBlur={false}
			validateOnChange={false}
		>
			<Form>
				<MyForm lng="en" formik={formik} />
				<MyForm lng="fr" formik={formik} />
				<Button
					disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
					className="w-full max-w-40 font-semibold flex-center gap-2 rounded-3xl py-2 px-3 bg-primary"
				>
					Submit
				</Button>
			</Form>
		</Formik>
	);
}

const sizesDropDownOptions = [
	{ key: "Select an option", value: "" },
	{ key: "S", value: "S" },
	{ key: "M", value: "M" },
	{ key: "L", value: "L" },
	{ key: "XL", value: "XL" },
	{ key: "XXL", value: "XXL" },
];

const itemDropDownOptions = [
	{ key: "Select an item", value: "" },
	{ key: "S", value: "S" },
	{ key: "M", value: "M" },
	{ key: "L", value: "L" },
	{ key: "XL", value: "XL" },
	{ key: "XXL", value: "XXL" },
];

const categoryDropDownOptions = [
	{ key: "Select a category", value: "" },
	{ key: "Women", value: "Women" },
	{ key: "Men", value: "Men" },
	{ key: "Kids", value: "Kids" },
];

export function MyForm({ lng, formik }: FormProps) {
	return (
		<div className="flex flex-grow w-full max-w-[600px] flex-col gap-4">
			<div className="flex w-full bg-primary text-secondary! rounded-lg">
				<h3 className="text-secondary">
					{lng === "en" ? "English" : "French"} Form
				</h3>
			</div>
			<div className="flex flex-wrap gap-4">
				<InputContent
					name={lng === "en" ? "titleEN" : "titleFR"}
					label="Title"
					type="text"
					style="input-field"
					className="flex-grow flex-shrink-0 basis-16"
				/>
				<InputContent
					name="price"
					label="Price"
					type="number"
					style="input-field"
					className="flex-grow flex-shrink-0 basis-4"
				/>
			</div>
			<InputContent
				name={lng === "en" ? "descriptionEN" : "descriptionFR"}
				label="Description"
				type="textarea"
				style="w-full input-field max-h-[160px]"
				className=""
			/>
			{/* <InputContent
				label="Images"
				className={`${lng === "fr" ? "hidden" : ""}`}
			>
				<div className="h-[160px] relative border-2 border-primary flex-center">
					<Field
						multiple
						type="file"
						name="images"
						className="absolute w-full p-12 outline-none opacity-0 z-10"
					/>
					<p className="text-center text-primary">
						Drag your images here or click in this area
					</p>
				</div>
				<ErrorMessage name="images" component={textError} />
			</InputContent> */}
			<div className="flex flex-wrap gap-4">
				<div className="flex flex-grow flex-col gap-4">
					<InputContent
						name="item"
						label="Item"
						type="select"
						options={itemDropDownOptions}
						style="input-field"
						className="flex-grow flex-shrink-0 basis-16"
					/>
					<InputContent
						name="category"
						label="Category"
						type="select"
						style="input-field"
						options={categoryDropDownOptions}
						className="flex-grow flex-shrink-0 basis-16"
					/>
				</div>
				<InputContent
					name="sizes"
					label="Sizes"
					type="select"
					options={sizesDropDownOptions}
					style="input-field"
					className="flex-grow h-full flex-shrink-0 basis-16"
				/>
			</div>
		</div>
	);
}

// "use client";
// import React, { HTMLAttributes, useState } from "react";
// import { handleInsert } from "@/actions/insertProduct";
// import { formSchema } from "@/lib/form.validation";
// import { cn } from "@/lib/utils";
// import toast from "react-hot-toast";
// import { newProduct } from "@/type";

// interface props extends HTMLAttributes<HTMLDivElement> {
// 	label: string;
// 	error?: any;
// }

// type FormProps = {
// 	lng: string;
// 	values: newProduct;
// 	setValues: React.Dispatch<React.SetStateAction<newProduct>>;
// };

// const InputContent: React.FC<props> = ({
// 	className,
// 	children,
// 	label,
// 	error,
// 	...props
// }) => {
// 	return (
// 		<div className={cn("flex flex-col space-y-1.5", className)} {...props}>
// 			<label className="text-sm font-semibold text-primary" htmlFor={label}>
// 				{label}
// 			</label>
// 			{children}
// 			{error && <span className="text-red-500">{String(error.message)}</span>}
// 		</div>
// 	);
// };

// export default function FormField() {
// 	const [values, setValues] = useState<newProduct>({
// 		titleEN: "",
// 		titleFR: "",
// 		price: "",
// 		sizes: [],
// 		images: [],
// 		item: "",
// 		descriptionEN: "",
// 		descriptionFR: "",
// 		category: "",
// 	});
// 	return (
// 		<React.Fragment>
// 			<Form lng="en" values={values} setValues={setValues} />
// 			<Form lng="fr" values={values} setValues={setValues} />
// 		</React.Fragment>
// 	);
// }
// export function Form({ lng, values, setValues }: FormProps) {
// 	const handleSubmit = async (formData: FormData) => {
// 		try {
// 			await formSchema.parseAsync(values);
// 			await handleInsert(formData);
// 			toast.success("Product created successfully");
// 			setValues({
// 				titleEN: "",
// 				titleFR: "",
// 				price: "",
// 				sizes: [],
// 				images: [],
// 				item: "",
// 				category: "",
// 				descriptionEN: "",
// 				descriptionFR: "",
// 			});
// 		} catch (error) {
// 			console.log("error: ", error);
// 			toast.error("Product creating failed");
// 		}
// 	};
// 	const handleInputChange = (
// 		e: React.ChangeEvent<
// 			HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
// 		>
// 	) => {
// 		const { name, value, files, selectedOptions } = e.target;
// 		if (name === "sizes") {
// 			const selectedSizes = Array.from(
// 				selectedOptions,
// 				(option) => option.value
// 			);
// 			setValues((prev) => ({
// 				...prev,
// 				[name]: selectedSizes,
// 			}));
// 		} else {
// 			setValues((prev) => ({
// 				...prev,
// 				[name]: name === "images" ? files : value,
// 			}));
// 		}
// 	};

// 	return (
// 		<form
// 			action={handleSubmit}
// 			className="flex flex-grow w-full max-w-[600px] flex-col gap-4"
// 		>
// 			<div className="flex w-full bg-primary text-secondary! rounded-lg">
// 				<h3 className="text-secondary">{lng === "en" ? "English" : "French"} Form</h3>
// 			</div>
// 			<div className="flex flex-wrap gap-4">
// 				<InputContent
// 					className="flex-grow flex-shrink-0 basis-16"
// 					label={lng === "en" ? "Title" : "Titre"}
// 				>
// 					<input
// 						type="text"
// 						className="input-field"
// 						placeholder={lng === "en" ? "Title" : "Titre"}
// 						name={lng === "en" ? "titleEN" : "titleFR"}
// 						value={lng === "en" ? values.titleEN : values.titleFR}
// 						onChange={handleInputChange}
// 					/>
// 				</InputContent>
// 				<InputContent
// 					className="flex-grow flex-shrink-0 basis-4"
// 					label={lng === "en" ? "Price" : "Prix"}
// 				>
// 					<input
// 						readOnly={lng === "en" ? false : true}
// 						type="number"
// 						className="input-field"
// 						placeholder={lng === "en" ? "Price" : "Prix"}
// 						name="price"
// 						value={values.price}
// 						onChange={handleInputChange}
// 					/>
// 				</InputContent>
// 			</div>
// 			<InputContent label="Description">
// 				<textarea
// 					className="w-full input-field max-h-[160px]"
// 					name={lng === "en" ? "descriptionEN" : "descriptionFR"}
// 					value={lng === "en" ? values.descriptionEN : values.descriptionFR}
// 					onChange={handleInputChange}
// 				/>
// 			</InputContent>
// 			<InputContent
// 				label="Images"
// 				className={`${lng === "fr" ? "hidden" : ""}`}
// 			>
// 				<div className="h-[160px] relative border-2 border-primary flex-center">
// 					<input
// 						multiple
// 						type="file"
// 						name="images"
// 						className="absolute w-full p-12 outline-none opacity-0 z-10"
// 						onChange={handleInputChange}
// 					/>
// 					<p className="text-center text-primary">
// 						Drag your images here or click in this area
// 					</p>
// 				</div>
// 			</InputContent>
// 			<div className="flex flex-wrap gap-4">
// 				<div className="flex flex-grow flex-col gap-4">
// 					<InputContent
// 						label={lng === "en" ? "Item" : "Article"}
// 						className="flex-grow flex-shrink-0 basis-16"
// 					>
// 						<select
// 							name="item"
// 							className="input-field"
// 							value={values.item}
// 							onChange={handleInputChange}
// 						>
// 							<option className="text-secondary" value="S">
// 								S
// 							</option>
// 							<option className="text-secondary" value="M">
// 								M
// 							</option>
// 							<option className="text-secondary" value="L">
// 								L
// 							</option>
// 							<option className="text-secondary" value="XL">
// 								XL
// 							</option>
// 							<option className="text-secondary" value="XXL">
// 								XXL
// 							</option>
// 						</select>
// 					</InputContent>
// 					<InputContent
// 						label={lng === "en" ? "Category" : "Catégorie"}
// 						className="flex-grow flex-shrink-0 basis-16"
// 					>
// 						<select
// 							name="category"
// 							className="input-field"
// 							value={values.category}
// 							onChange={handleInputChange}
// 						>
// 							<option className="text-secondary" value="Women">
// 								Women
// 							</option>
// 							<option className="text-secondary" value="Men">
// 								Men
// 							</option>
// 							<option className="text-secondary" value="Kids">
// 								Kids
// 							</option>
// 						</select>
// 					</InputContent>
// 				</div>
// 				<InputContent
// 					label={lng === "en" ? "Size" : "Taille"}
// 					className="flex-grow h-full flex-shrink-0 basis-16"
// 				>
// 					<select
// 						multiple
// 						className="input-field"
// 						name="sizes"
// 						onChange={handleInputChange}
// 					>
// 						<option value="S">S</option>
// 						<option value="M">M</option>
// 						<option value="L">L</option>
// 						<option value="XL">XL</option>
// 						<option value="XXL">XXL</option>
// 					</select>
// 				</InputContent>
// 			</div>
// 		</form>
// 	);
// }
