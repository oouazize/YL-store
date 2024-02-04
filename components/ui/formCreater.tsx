import React from "react";
import { cn } from "@/lib/utils";
import Button from "./button";

const Form = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("rounded-2xl shadow", className)} {...props} />
));
Form.displayName = "Form";

const FormHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
FormHeader.displayName = "FormHeader";

const FormTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("font-semibold leading-none tracking-tight", className)}
		{...props}
	/>
));
FormTitle.displayName = "FormTitle";

const FormDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-gray", className)} {...props} />
));
FormDescription.displayName = "FormDescription";

const FormContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		label: string;
		onInputChange: (value: string) => void;
	}
>(({ className, label, onInputChange, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 pt-0", className)}
		{...props}
	>
		<label className="text-sm font-semibold text-primary" htmlFor="name">
			{label}
		</label>
		<input
			className="input-field pt-0"
			id="name"
			placeholder={label}
			onChange={(e) => onInputChange(e.target.value)}
		/>
	</div>
));
FormContent.displayName = "FormContent";

const FormUpload = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		label: string;
		onInputChange: (value: FileList | null) => void;
	}
>(({ className, label, onInputChange, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 pt-0", className)}
		{...props}
	>
		<label className="text-sm font-semibold text-primary" htmlFor="name">
			{label}
		</label>

		<input
			className="input-field pt-0"
			type="file"
			accept="image/*"
			onChange={(e) => onInputChange(e.target.files)}
		/>
	</div>
));
FormUpload.displayName = "FormUpload";

const FormMultiSelect = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		label: string;
		handleMultiSelectChange: (values: string[]) => void;
	}
>(({ className, label, handleMultiSelectChange, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 pt-0", className)}
		{...props}
	>
		<label className="text-sm font-semibold text-primary" htmlFor="name">
			{label}
		</label>
		<select
			multiple
			onChange={(e) =>
				handleMultiSelectChange(
					Array.from(e.target.selectedOptions, (option) => option.value)
				)
			}
		>
			<option>S</option>
			<option>M</option>
			<option>L</option>
			<option>XL</option>
			<option>XXL</option>
		</select>
	</div>
));
FormMultiSelect.displayName = "FormMultiSelect";

const FormSelect = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		label: string;
		handleSelectChange: (values: string) => void;
	}
>(({ className, label, handleSelectChange, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 pt-0", className)}
		{...props}
	>
		<label className="text-sm font-semibold text-primary" htmlFor="name">
			{label}
		</label>
		<select onChange={(e) => handleSelectChange(e.target.value)}>
			<option>S</option>
			<option>M</option>
			<option>L</option>
			<option>XL</option>
			<option>XXL</option>
		</select>
	</div>
));
FormSelect.displayName = "FormSelect";

const FormFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		name: string;
		variant?: "primary" | "secondary" | "outline";
	}
>(({ variant, name }) => (
	<div className="p-6 pt-0">
		<Button variant={variant}>{name}</Button>
	</div>
));
FormFooter.displayName = "FormFooter";

export {
	Form,
	FormHeader,
	FormFooter,
	FormTitle,
	FormDescription,
	FormContent,
	FormSelect,
	FormMultiSelect,
	FormUpload,
};