import {  GroupWithUsers } from '@/types';
import { Group } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import { FaUserFriends } from "react-icons/fa";

export default function GroupCard({ group }: { group: GroupWithUsers }) {
    return (
        <Link href={`/group/${group.id}`}>
            <div className="flex flex-col p-4 rounded-2xl border border-border aspect-square bg-white shadow">
                {group.name}

                <div className="flex gap-2 items-center  mt-auto">
                    <FaUserFriends size={18} />
                    {group.UsersOnGroups.length}
                </div>
            </div>
        </Link>
    )
}
