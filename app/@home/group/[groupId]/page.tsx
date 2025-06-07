import React from 'react'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/prisma'
import AmbaganList from './_components/AmbaganList'
import GroupHeader from './_components/GroupHeader'

type ViewGroupProps = {
    params: Promise<{
        groupId: string
    }>
}

export default async function Page({ params }: ViewGroupProps) {
    const { groupId } = await params
    const group = await prisma.group.findFirst({
        where: {
            id: groupId
        },
        include: {
            UsersOnGroups: {
                include: {
                    User: true
                }
            },
            Contribution: {
                include: {
                    ContributionItem: true
                }
            },
        }
    })

    if (!group) return notFound();

    return (
        <div className="flex flex-col p-4 gap-10">
            <GroupHeader group={group} />
            <AmbaganList contributions={group.Contribution} groupId={groupId} />
        </div>
    )
}
