'use server';

import { supabaseServerClient } from '@/utils/supabaseServer';

export async function registerWithEmailAndPasword({
  email,
}: {
  email: string;
}) {
  const supabase = await supabaseServerClient();

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'https://supabase-nextjs-j5opxp5h0-laribright.vercel.app/',
    },
  });

  return JSON.stringify(response)
}
