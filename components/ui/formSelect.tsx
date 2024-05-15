import React from "react";
import { FormControl } from "./form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

type formSelectProps = {
	field: any;
	borderColor?: string;
	data: {label: string, options?: string[]};
};
export default function FormSelect({
	field,
	data,
}: formSelectProps) {
	return (
		<Select key={data.label} onValueChange={field.onChange} defaultValue={field.value}>
			<FormControl>
				<SelectTrigger className="border-primary">
					<SelectValue placeholder={data.label} />
				</SelectTrigger>
			</FormControl>
			<SelectContent>
				{data.options?.map((option, i) => (
					<SelectItem key={i} value={option}>{option}</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
