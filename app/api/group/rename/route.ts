import { apiHandler } from "@/lib/apiHandler"
import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server"

export const PUT = apiHandler(async (req: Request) => {
    const { id, name } = await req.json()
    const group = await prisma.group.update({
        where: {
            id
        },
        data: {
            name
        },
    })
    return NextResponse.json({ data: group }, { status: 200 })
})