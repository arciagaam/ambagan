'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { UsersOnGroupsWithUser } from '@/types'
import React, { useState } from 'react'

export default function ManageGroupMembers({ members }: { members: UsersOnGroupsWithUser[] }) {


    const [memberFilterValue, setMemberFilterValue] = useState('')
    const filteredMembers = memberFilterValue ? members.filter((member) => `${member.User.first_name?.toLowerCase()} ${member.User.last_name?.toLowerCase()}`.includes(memberFilterValue.toLocaleLowerCase())) : members
    return (
        <div className="flex flex-col p-4 gap-4 bg-white rounded-2xl border border-border shadow">
            <h2>Members</h2>
            <Input placeholder='Find a member' value={memberFilterValue} onChange={(e) => setMemberFilterValue(e.target.value)} />

            <div className="flex flex-col gap-2">
                {
                    filteredMembers.map((member, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <p>{member.User.first_name} {member.User.last_name}</p>
                                <p className='text-sm text-black/50 capitalize'>{member.role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
