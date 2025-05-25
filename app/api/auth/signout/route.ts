import { apiHandler } from "@/lib/apiHandler";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const GET = apiHandler(async () => {
    const supabase = await createClient()
    await supabase.auth.signOut()

    return NextResponse.json({ message: 'Logged out' })
})  