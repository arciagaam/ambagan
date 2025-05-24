'use server'

import prisma from "@/prisma/prisma";
import { CreateGroupSchema } from "@/schemas/GroupSchema";
import { getAuthUser } from "@/utils/auth";
import { generateSaltedCode } from "@/utils/utils";
import { z } from "zod";
import crypto from 'crypto'

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

export async function createGroup(formValues: z.infer<typeof CreateGroupSchema>) {
    const user = await getAuthUser();

    if (!user) return;

    try {

        const inviteCode = await getInviteCode()

        const res = await prisma.group.create({
            data: {
                ...formValues,
                inviteCode: inviteCode,
                UsersOnGroups: {
                    create: {
                        userId: user.id,
                        role: 'owner',
                    }
                }
            }
        })

        return { status: 'success', group: res }

    } catch (error) {
        if (error instanceof Error) return { status: 'error', message: (error).message }

        return { status: 'error' }
    }

}