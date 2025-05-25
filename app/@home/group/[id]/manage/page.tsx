import BackButton from '@/components/back-button'
import { notFound } from 'next/navigation'
import React from 'react'
import ManageGroupMembers from './_components/ManageGroupMembers'
import ManageGroupName from './_components/ManageGroupName'
import DeleteGroup from './_components/DeleteGroup'
import prisma from '@/prisma/prisma'

type ManageGroupProps = {
    params: {
        id: string
    }
}

export default async function ManageGroup({ params }: ManageGroupProps) {
    const { id } = await params
    const group = await prisma.group.findFirst({
        where: {
            id: id
        },
        include: {
            UsersOnGroups: {
                include: {
                    user: true
                }
            },
            contributions: true,
        }
    })

    if (!group) return notFound()

    return (
        <div className="flex flex-col">
            <div className="flex px-4 py-6 items-center gap-2">
                <BackButton href={`/group/${id}`} />
                <h1 className='text-xl font-bold'>Manage Group</h1>
            </div>


            <div className="flex flex-col gap-4 p-4 pt-0">
                <ManageGroupName group={group} />
                <ManageGroupMembers members={group.UsersOnGroups} />
                <DeleteGroup />
            </div>
        </div>
    )
}
