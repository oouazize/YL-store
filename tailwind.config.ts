import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#F2F2F2",
				secondary: "#1F1F1F",
			},
			borderColor: {
				primary: "#F2F2F2",
				secondary: "#1F1F1F",
			},
			colors: {
				primary: "#F2F2F2",
				secondary: "#1F1F1F",
				gray: "#4F4F4F",
				priceColor: "#0050E6",
				price: "#72A1F7",
			},
		},
	},
	plugins: [],
};
export default config;
