'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React from 'react'
import toast from 'react-hot-toast'
import { FaCopy } from 'react-icons/fa'

export default function InviteCode({inviteCode}: {inviteCode: string}) {

    const copyInviteLink = () => {
        navigator.clipboard.writeText('AljcvaS8@UH') //change to db group invite code
        toast('Invite code copied to clipboard.')
    }
    return (
        <div className="flex items-start p-6 bg-white shadow">

            <div className="flex flex-col gap-1 w-full">
                <Label>Invite Code</Label>
                <p className='font-bold'>{inviteCode}</p>
            </div>
            <Button variant={'outline'} onClick={copyInviteLink} className='w-fit flex items-center gap-2'>
                <FaCopy/>
                <span>Copy</span>
            </Button>
        </div>
    )
}
