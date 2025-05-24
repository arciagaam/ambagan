'use server'

import prisma from "@/prisma/prisma";

export async function renameGroup(name: string, groupId: string) {
    try {
        const res = await prisma.group.update({
            where: {
                id: groupId
            },
            data: {
                name: name
            }
        })

        console.log(res)

        return ({ status: "success" })
    } catch (error) {
        return ({ status: "error" })
    }
}