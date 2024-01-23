import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18Middleware = createI18nMiddleware({
	locales: ["en", "fr"],
	defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
	// let response = NextResponse.next({
	// 	request: {
	// 		headers: request.headers,
	// 	},
	// });

	// const supabase = createServerClient(
	// 	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	// 	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	// 	{
	// 		cookies: {
	// 			get(name: string) {
	// 				return request.cookies.get(name)?.value;
	// 			},
	// 			set(name: string, value: string, options: CookieOptions) {
	// 				request.cookies.set({
	// 					name,
	// 					value,
	// 					...options,
	// 				});
	// 				response = NextResponse.next({
	// 					request: {
	// 						headers: request.headers,
	// 					},
	// 				});
	// 				response.cookies.set({
	// 					name,
	// 					value,
	// 					...options,
	// 				});
	// 			},
	// 			remove(name: string, options: CookieOptions) {
	// 				request.cookies.set({
	// 					name,
	// 					value: "",
	// 					...options,
	// 				});
	// 				response = NextResponse.next({
	// 					request: {
	// 						headers: request.headers,
	// 					},
	// 				});
	// 				response.cookies.set({
	// 					name,
	// 					value: "",
	// 					...options,
	// 				});
	// 			},
	// 		},
	// 	}
	// );

	return I18Middleware(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
