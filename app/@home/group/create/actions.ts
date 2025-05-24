'use server'

import prisma from "@/prisma/prisma";
import { CreateGroupSchema } from "@/schemas/GroupSchema";
import { getAuthUser } from "@/utils/auth";
import { z } from "zod";

export async function createGroup(formValues: z.infer<typeof CreateGroupSchema>) {
    const user = await getAuthUser();

    if(!user) return;

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

    console.log('creategroup', res)
}