'use server'

import prisma from "@/prisma/prisma";
import { CreateGroupSchema } from "@/schemas/GroupSchema";
import { getAuthUser } from "@/utils/auth";
import { z } from "zod";

export async function createGroup(formValues: z.infer<typeof CreateGroupSchema>) {
    const user = await getAuthUser();

    if (!user) return;

    try {

        const res = await prisma.group.create({
            data: {
                ...formValues, UsersOnGroups: {
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