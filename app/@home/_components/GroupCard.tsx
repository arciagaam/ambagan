import { GroupWithUsers } from '@/types';
import Link from 'next/link';
import React from 'react'
import { FaUserFriends } from "react-icons/fa";

export default function GroupCard({ group }: { group: GroupWithUsers }) {
    return (
        <Link href={`/group/${group.id}`}>
            <div className="flex flex-col p-4 rounded-2xl border border-border aspect-square bg-white shadow relative overflow-clip">

                <p className='z-10'>{group.name}</p>

                <div className="flex gap-2 items-center  mt-auto z-10">
                    <FaUserFriends size={18} />
                    {group.UsersOnGroups.length}
                </div>

                <div className="absolute -bottom-10 -right-10 rounded-full bg-accent size-[10rem] text-[4rem] aspect-square flex items-center justify-center opacity-50">
                    🏠
                </div>
            </div>
        </Link>
    )
}
