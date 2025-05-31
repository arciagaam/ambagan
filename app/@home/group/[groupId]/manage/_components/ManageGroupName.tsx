'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { APIError } from '@/lib/apiErrorHandler'
import { asyncFetch } from '@/lib/asyncFetch'
import { Group } from '@prisma/client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

type ManageGroupNameProps = {
    group: Group,
    isOwner: boolean
}

export default function ManageGroupName({ group, isOwner }: ManageGroupNameProps) {
    const [groupName, setGroupName] = useState(group.name)

    const handleRenameGroup = async () => {
        try {
            await asyncFetch.put('/api/group/rename', { id: group.id, name: groupName })
            toast.success('Group renamed')
        } catch (error: unknown) {
            toast.error((error as APIError).message)
        }
    }
    return (
        <div className="flex flex-col p-4 gap-4 bg-white rounded-2xl border border-border shadow">
            <Label>Group Name</Label>
            <div className="flex items-center gap-2">
                <Input disabled={!isOwner} value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                {
                    isOwner && <Button onClick={handleRenameGroup} variant={'outline'}>Rename</Button>
                }
            </div>
        </div>

    )
}
