'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import toast from 'react-hot-toast'

export default function InviteCode() {

    const copyInviteLink = () => {
        navigator.clipboard.writeText('AljcvaS8@UH') //change to db group invite code
        toast('Invite code copied to clipboard.')
    }
    return (
        <div className="flex gap-2 items-end">

            <div className="flex flex-col gap-1 w-full">
                <Label>Invite Code</Label>
                <Input defaultValue={'AljcvaS8'} />
            </div>
            <Button onClick={copyInviteLink}>
                Copy
            </Button>
        </div>
    )
}
