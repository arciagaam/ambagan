'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Group } from '@prisma/client'
import React, { useState } from 'react'
import { renameGroup } from '../actions'
import toast from 'react-hot-toast'

export default function ManageGroupName({ group }: { group: Group }) {

    const [groupName, setGroupName] = useState(group.name)

    const handleRenameGroup = async () => {
        const res = await renameGroup(groupName, group.id)

        if(res.status) {
            toast.success('Group renamed')
            return
        }

        toast.error('Something went wrong')
    }
    return (
        <div className="flex flex-col p-4 gap-4 bg-white rounded-2xl border border-border shadow">
            <Label>Group Name</Label>
            <div className="flex items-center gap-2">
                <Input value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                <Button onClick={handleRenameGroup} variant={'outline'}>Rename</Button>
            </div>
        </div>

    )
}
