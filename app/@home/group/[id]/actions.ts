import prisma from "@/prisma/prisma";

export async function getGroup(id: string) {
    return await prisma.group.findFirst({
        where: {
            id: id
        },
        include: {
            UsersOnGroups: true,
            contributions: true,
        }
    })
}
