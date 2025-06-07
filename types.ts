import { Prisma } from "@prisma/client";

export type GroupWithUsers = Prisma.GroupGetPayload<{
    include: {
        UsersOnGroups: true
    }
}>

export type UsersOnGroupsWithUser = Prisma.UsersOnGroupsGetPayload<{
    include: {
        User: true
    }
}>

export type ContributionWithRelations = Prisma.ContributionGetPayload<{
    include: {
        ContributionItem: true
    }
}>

export type ContributionItemWithRelations = Prisma.ContributionItemGetPayload<{
    include: {
        Contribution: {
            include: {
                Group: {
                    include: {
                        UsersOnGroups: {
                            include: {
                                User: true
                            }
                        }
                    }
                }
            }
        }
    }
}>

export type ContributorWithRelations = Prisma.ContributorGetPayload<{
    include: {
        ContributionItem: {
            include: {
                Contribution: {
                    include: {
                        Group: {
                            include: {
                                UsersOnGroups: {
                                    include: {
                                        User: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}>
