import React from 'react';
import { notFound } from 'next/navigation';
import InviteCode from './_components/InviteCode';
import GroupHeader from './_components/GroupHeader';
import AmbaganList from './_components/AmbaganList';
import prisma from '@/prisma/prisma';

type ViewGroupProps = {
    params: Promise<{
        groupId: string;
    }>;
};

export default async function Page({ params }: ViewGroupProps) {
    const { groupId } = await params;
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
    });

    if (!group) return notFound();

    return (
        <div className="flex flex-col">
            <GroupHeader groupName={group.name} groupId={groupId} />
            <InviteCode inviteCode={group.inviteCode} />
            <AmbaganList contributions={group.Contribution} groupId={groupId} />
        </div>
    );
}
