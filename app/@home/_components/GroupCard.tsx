import MultipleAvatars from '@/components/MultipleAvatars';
import {  GroupWithUsers } from '@/types';
import { Group } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import { FaUserFriends } from "react-icons/fa";

type AvatarProps = {
    src?: string;
    alt: string;
    name: string;
}

const sampleAvatars: AvatarProps[] = [
    { src: '', alt: 'US1', name: 'User 1'},
    { alt: 'US2', name: 'User 2'},
    { alt: 'US3', name: 'User 3'},
    { alt: 'US4', name: 'User 4'},
    { alt: 'US5', name: 'User 5'},
]

export default function GroupCard({ group }: { group: GroupWithUsers }) {
    return (
        <Link href={`/group/${group.id}`}>
            <div className="flex flex-col p-4 rounded-2xl border border-border aspect-square bg-white shadow">
                {group.name}
                <MultipleAvatars avatars={sampleAvatars}/>
                <div className="flex gap-2 items-center  mt-auto">
                    <FaUserFriends size={18} />
                    {group.UsersOnGroups.length}
                </div>
            </div>
        </Link>
    )
}
