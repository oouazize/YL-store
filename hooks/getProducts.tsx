// import { supabaseForClientComponent as supabase } from '@/lib/supabase.client';
import { supabaseForClientComponent as supabase } from "@/lib/supabase.client";
// import "server-only";

export function getProducts() {
	return supabase.from("product").select("*");
}
