"use client";

import { createBrowserClient } from "@supabase/ssr";
import { env } from "./env.client";


export const supabaseForClientComponent = createBrowserClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);