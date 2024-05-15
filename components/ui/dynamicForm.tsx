"use client";
import Button from "./button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./form";
import { Input } from "./input";
import { z } from "zod";
import FormSelect from "./formSelect";
import { UseFormReturn } from "react-hook-form";

type FormItemChildProps = {
	field: any;
	item: {
		name: string;
		label: string;
		options?: string[];
	};
};

type FormProps<T extends z.infer<any>> = {
	form: UseFormReturn<z.infer<any>>;
	onSubmit: (values: T) => void;
	formFields: {
		name: string;
		label: string;
		options?: string[];
	}[];
};
const substrings = ["fname", "lname", "gender", "phone", "email", "cemail"];

export function DynamicForm<T extends z.infer<any>>({
	form,
	onSubmit,
	formFields,
}: FormProps<T>) {
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-[600px] flex flex-wrap gap-4 text-secondary"
			>
				{formFields.map((item) => (
					<FormField
						key={item.name}
						control={form.control}
						name={item.name}
						render={({ field }) => (
							<FormItem
								className={`text-white ${
									substrings.some((substring) => item.name.includes(substring))
										? "md:basis-2/5"
										: ""
								}`}
							>
								<FormLabel>{item.label}</FormLabel>
								<FormItemChild field={field} item={item} />
								<FormMessage className="text-red-600" />
							</FormItem>
						)}
					/>
				))}
				<Button className="px-6" type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
}

const FormItemChild = ({ field, item }: FormItemChildProps) => {
	const SelectField = (
		<FormSelect
			field={field}
			data={{
				label: item.label,
				options: item.options,
			}}
		/>
	);

	const MultiSelect = (
		<select
			className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
			multiple
			name="sizes"
			value={field.value}
			// onChange={field.onChange}
		>
			{item.options?.map((option) => (
				<option
					className="relative flex w-full cursor-default select-none items-center bg-primary text-black rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:font-semibold"
					key={option}
				>
					{option}
				</option>
			))}
		</select>
	);

	const ImagesField = 0;

	const InputField = (
		<FormControl>
			<Input
				className="border-primary placeholder-holder"
				placeholder={item.label}
				{...field}
			/>
		</FormControl>
	);

	if (item.options) {
		return item.name === "sizes" ? MultiSelect : SelectField;
	}

	return item.name !== "images" ? InputField : ImagesField;
};
