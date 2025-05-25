import { apiHandler } from "@/lib/apiHandler";
import prisma from "@/prisma/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const POST = apiHandler(async (req: Request) => {
    const supabase = await createClient()
    const {
        firstName,
        middleName,
        lastName,
        email,
        password,
    } = await req.json()

    const signupUser = await supabase.auth.signUp({
        email: email,
        password: password,
    })

    if (signupUser.error) throw new Error(signupUser.error.message);

    const newUser = signupUser.data.user


    await prisma.user.create({
        data: {
            id: newUser!.id,
            email: email,
            first_name: firstName,
            last_name: lastName
        }
    })

    return NextResponse.json({ data: newUser }, { status: 200 })
})