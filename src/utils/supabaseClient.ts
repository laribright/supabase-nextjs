//  need to install package

import { createBrowserClient } from "supabase/ssr"


export const supabaseBrowserClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'ENTER SUPABASE URL HERE',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'ENTER ANON KEY HERE' as string
)