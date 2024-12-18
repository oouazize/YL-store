"use client";

import type { ReactNode } from "react";
import { I18nProviderClient } from "@/locales/client";

export function Provider({ children }: { children: ReactNode }) {
	return (
		<I18nProviderClient >
			{children}
		</I18nProviderClient>
	);
}

// fallback={<p>Loading...</p>}