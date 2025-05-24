import { Prisma } from "@prisma/client";

export type GroupWithUsers = Prisma.GroupGetPayload<{
    include: {
        UsersOnGroups: true
    }
}>