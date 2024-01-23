import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof ButtonVariants> {}

const ButtonVariants = cva(
	"flex-center gap-2 rounded-3xl py-2 px-3",
	{
		variants: {
			variant: {
				primary: "bg-primary",
				outline: "border-2 border-primary text-primary",
				secondary: "bg-gray",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
);

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
	return (
		<button
			className={cn(ButtonVariants({ variant, className }))}
			style={{ paddingLeft: "12px", paddingRight: "12px", fontWeight: "600" }}
			{...props}
		/>
	);
};

export default Button;
