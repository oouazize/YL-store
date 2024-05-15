import { cn } from "@/lib/utils";
import { FormikControlProps } from "@/type";
import { ErrorMessage, Field } from "formik";
import React from "react";

type FormikPropsWithoutControl = Omit<FormikControlProps, "control">;

export function textError({ children }: { children?: React.ReactNode }) {
	return <div className="text-red-600">{children}</div>;
}

// export default function FormikControl({ control, ...props }: FormikControlProps) {
// 	switch (control) {
// 		case "input":
// 			return <Input {...props} />;
// 		case "textarea":
// 			return <Input as="textarea" {...props} />;
// 		case "select": <Input as="select" {...props} />;
// 		case "file":
// 		default:
// 			return null;
// 	}
// }

export const InputContent: React.FC<FormikPropsWithoutControl> = ({
	className,
	name,
	label,
	type,
	options,
	style,
	...props
}) => {
	return (
		<div className={cn("flex flex-col space-y-1.5", className)} {...props}>
			<label className="text-sm font-semibold text-primary" htmlFor={name}>
				{label}
			</label>
			<Field
				as={type || "text"}
				id={name}
				name={name}
				className={style}
				{...props}
			>
				{options?.map((option: any) => (
					<option
						className="text-secondary"
						key={option.value}
						value={option.value}
					>
						{option.key}
					</option>
				))}
			</Field>
			<ErrorMessage name={name} component={textError} />
		</div>
	);
};
