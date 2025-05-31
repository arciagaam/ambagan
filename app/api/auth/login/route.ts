import { apiHandler } from "@/lib/apiHandler";
import prisma from "@/prisma/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const POST = apiHandler(async (req: Request) => {
    const { email, password } = await req.json()

    const supabase = await createClient()

    const res = await supabase.auth.signInWithPassword({ email, password })

    const userId = res.data.user?.id;

    const findUser = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!findUser) {
        const userMetadata = res.data.user?.user_metadata as { first_name: string, last_name: string };
        const { first_name, last_name } = userMetadata;

        await prisma.user.create({
            data: {
                id: userId,
                email: email,
                first_name: first_name,
                last_name: last_name
            }
        })
    }


    if (res.error) throw new Error(res.error.message)

    return NextResponse.json({ data: res.data.user }, { status: 200 })
})