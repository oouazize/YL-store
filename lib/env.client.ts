"use client";

import { z } from "zod";

export const env = {
  NEXT_PUBLIC_ORIGIN: z.string().min(1).parse(process.env.NEXT_PUBLIC_ORIGIN),

  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1).parse(process.env.NEXT_PUBLIC_SUPABASE_URL),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).parse(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),

};
