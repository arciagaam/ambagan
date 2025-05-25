import prisma from '@/prisma/prisma'
import { getAuthUser } from '@/utils/auth'
import { notFound, unauthorized } from 'next/navigation'
import React from 'react'

type ViewGroupLayoutProps = {
    children: React.ReactNode,
    params: {
        id: string
    }
}

const ViewGroupLayout = async ({ children, params }: ViewGroupLayoutProps) => {
    const { id: groupId } = await params;
    const user = await getAuthUser();

    if (!user) return notFound();

    const userCheck = await prisma.usersOnGroups.findFirst({
        where: { userId: user.id, groupId: groupId }
    })

    if (!userCheck) return unauthorized()

    return (children)
}

export default ViewGroupLayout