import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof ButtonVariants> {}

const ButtonVariants = cva(
	"gap-2 bg-primary border-2 rounded-2xl w-[160px] lg:w-[240px] h-[280px] text-left flex flex-col p-4",
	{
		variants: {
			variant: {
				default: "bg-opacity-10 border-primary text-primary",
				pressed: " border-gray",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

const ProductCard: FC<ButtonProps> = ({ className, variant, ...props }) => {
	return (
		<button className={cn(ButtonVariants({ variant, className }))} {...props} />
	);
};

export default ProductCard;
