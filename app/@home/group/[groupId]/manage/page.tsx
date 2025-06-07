import { notFound } from 'next/navigation'
import React from 'react'
import ManageGroupMembers from './_components/ManageGroupMembers'
import ManageGroupName from './_components/ManageGroupName'
import DeleteGroup from './_components/DeleteGroup'
import prisma from '@/prisma/prisma'
import { getAuthUser } from '@/utils/auth'

type ManageGroupProps = {
    params: Promise<{
        groupId: string
    }>
}

export default async function ManageGroup({ params }: ManageGroupProps) {
    const { groupId } = await params
    const user = await getAuthUser()

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
            Contribution: true,
        }
    })

    if (!group) return notFound()

    const isOwner = user?.UsersOnGroups?.find(userOnGroup => userOnGroup.groupId == group.id)?.role == 'owner'


    return (
        <div className="flex flex-col p-4 gap-4">
            <h1 className='text-xl font-bold'>Manage Group</h1>


            <div className="flex flex-col gap-4">
                <ManageGroupName group={group} isOwner={isOwner} />
                <ManageGroupMembers members={group.UsersOnGroups} />
                {
                    isOwner && <DeleteGroup />
                }
            </div>
        </div>
    )
}
