'use server'

import { supabaseServerClient } from "@/utils/supabaseServer"


export async function registerWithEmailAndPasword(email) {
    const supabase = await supabaseServerClient()

    const response = await supabase.auth.signInWithSupabaseOTP({
        email,
        options: {
            emailRedirectTo: "http://lcoalhost:3000",
        }
    })
    return JSON.stringify(response)
}