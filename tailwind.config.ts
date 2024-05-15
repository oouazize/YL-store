import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#F2F2F2",
				secondary: "#1F1F1F",
				input: "#27272A",
				holder: "#c3c4c3",
				gray: "#4F4F4F",
				priceColor: "#0050E6",
				price: "#72A1F7",
				danger: "#F31260",
			},
		},
	},
	plugins: [],
};
export default config;
