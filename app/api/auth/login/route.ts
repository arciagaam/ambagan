import { apiHandler } from "@/lib/apiHandler";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const POST = apiHandler(async (req: Request) => {
    const { email, password } = await req.json()

    const supabase = await createClient()

    const res = await supabase.auth.signInWithPassword({ email, password })

    if (res.error) throw new Error(res.error.message)

    return NextResponse.json({ data: res.data.user }, { status: 200 })
})