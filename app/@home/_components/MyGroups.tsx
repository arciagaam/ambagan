import React from 'react'
import GroupsGrid from './GroupsGrid'
import { Group, User } from '@prisma/client'
import NoGroups from './NoGroups'
import { GroupWithUsers } from '@/types'

type MyGroupsProps = {
    groups: GroupWithUsers[]
}

export default function MyGroups({ groups }: MyGroupsProps) {
    return (
        <div className="flex flex-col py-1">
            <div className="flex flex-col">
                <h2 className='text-lg font-bold mb-2 leading-none'>My Groups</h2>
                <p className="text-sm text-muted-foreground mb-3">Manage expenses with your friends and family</p>
            </div>

            {(groups && groups.length > 0) ? <GroupsGrid groups={groups} /> : <NoGroups />}
        </div>
    )
}
