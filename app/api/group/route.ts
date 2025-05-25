import prisma from "@/prisma/prisma"
import { generateSaltedCode } from "@/utils/utils";
import { NextResponse } from "next/server"
import crypto from 'crypto'
import { getAuthUser } from "@/utils/auth";
import { apiHandler } from "@/lib/apiHandler";

async function getInviteCode() {
    const inviteCode = generateSaltedCode(crypto.randomUUID());

    const inviteCodeCheck = await prisma.group.findFirst({
        where: {
            inviteCode: inviteCode
        }
    })

    if (inviteCodeCheck) return await getInviteCode()

    return inviteCode
}


export const POST = apiHandler(async (req: Request) => {
    const body = await req.json()
    const user = await getAuthUser()

    if (!user) {
        return NextResponse.json({ error: 'Unauthorized User' }, { status: 401 })
    }

    const inviteCode = await getInviteCode()

    const group = await prisma.group.create({
        data: {
            ...body,
            inviteCode,
            UsersOnGroups: {
                create: {
                    userId: user.id,
                    role: 'owner',
                },
            },
        },
    })

    return NextResponse.json({ data: group }, { status: 201 })
})
