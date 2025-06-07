import { apiHandler } from "@/lib/apiHandler"
import prisma from "@/prisma/prisma"
import { getAuthUser } from "@/utils/auth"
import { NextResponse } from "next/server"

export const PUT = apiHandler(async (req: Request) => {
    const { id, name } = await req.json()

    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {

        const group = await prisma.group.update({
            where: {
                id,
                UsersOnGroups: {
                    some: {
                        role: 'owner',
                        userId: user.id
                    }
                }
            },
            data: {
                name
            },
        })

        return NextResponse.json({ data: group }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'You are not authorized to rename this group' }, { status: 403 })
    }


})