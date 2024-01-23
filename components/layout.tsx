import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import { Provider } from "@/app/[locale]/provider";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Provider>
				<Nav />
			</Provider>
			{children}
			<Footer />
		</>
	);
}
