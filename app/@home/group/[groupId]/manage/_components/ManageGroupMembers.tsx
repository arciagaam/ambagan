'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function ManageGroupMembers({ members }: { members: any }) {
    const [memberFilterValue, setMemberFilterValue] = useState('')
    const filteredMembers = memberFilterValue ? members.filter((member: any) => `${member.user.first_name.toLowerCase()} ${member.user.middle_name?.toLowerCase()} ${member.user.last_name.toLowerCase()}`.includes(memberFilterValue.toLocaleLowerCase())) : members
    return (
        <div className="flex flex-col p-4 gap-4 bg-white rounded-2xl border border-border shadow">
            <h2>Members</h2>
            <Input placeholder='Find a member' value={memberFilterValue} onChange={(e) => setMemberFilterValue(e.target.value)} />

            <div className="flex flex-col gap-2">
                {
                    filteredMembers.map((member: any, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <p>{member.user.first_name} {member.user.last_name}</p>
                                <p className='text-sm text-black/50 capitalize'>{member.role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
