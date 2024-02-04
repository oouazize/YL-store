// import { supabaseForClientComponent as supabase } from '@/lib/supabase.client';
import { createSupabaseForServerComponent } from "@/lib/supabase.server";
import "server-only";

export async function getProducts() {
	const supabase = createSupabaseForServerComponent();

	return supabase.from("product").select("*");
}
