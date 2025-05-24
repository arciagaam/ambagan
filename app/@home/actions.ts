import prisma from "@/prisma/prisma";
import { getAuthUser } from "@/utils/auth";

export async function getUserGroups() {
    const user = await getAuthUser()

    if (!user) return

    const groups = await prisma.group.findMany({
        where: {
            UsersOnGroups: {
                some: {
                    userId: user.id, // The ID from Supabase Auth, also in your `User.id`
                },
            },
        },
        include: {
            UsersOnGroups: true, // Optional: to see role, createdAt, etc.
        },
    });

    return { groups };
}