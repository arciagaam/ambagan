import { apiHandler } from "@/lib/apiHandler";
import prisma from "@/prisma/prisma";
import { getAuthUser } from "@/utils/auth";
import { NextResponse } from "next/server";

export const GET = apiHandler(async (req: Request) => {
    const url = new URL(req.url)
    const invite = url.searchParams.get('invite')
    if (!invite) throw new Error('Invite code is invalid');

    const user = await getAuthUser()
    if (!user) throw new Error('Unauthorized User')

    const group = await prisma.group.findFirst({
        where: {
            inviteCode: invite
        }
    })

    if (!group) throw new Error('Invalid invite code')

    const userOnGroup = await prisma.usersOnGroups.findFirst({
        where: {
            userId: user.id,
            Group: {
                inviteCode: invite
            }
        }
    })

    if (userOnGroup) throw new Error('You are already part of this group')


    await prisma.usersOnGroups.create({
        data: {
            role: 'member',
            userId: user.id,
            groupId: group.id
        }
    })

    return NextResponse.json({ message: `Successfully joined ${group.name}`, group: group })
})  
