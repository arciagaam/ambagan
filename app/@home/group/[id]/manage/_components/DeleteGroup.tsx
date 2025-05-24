import { Button } from '@/components/ui/button'
import React from 'react'

export default function DeleteGroup() {
    return (
        <div className="flex flex-col p-4 bg-red-100/20 rounded-2xl border border-red-400 shadow">
            <h2 className='text-red-400 font-bold'>Delete Group</h2>
            <p className='text-sm font-bold text-red-400'>NOTE: This is irreversible!</p>
            <Button className='w-fit mt-4' variant={'destructive'}>Delete Group</Button>
        </div>
    )
}
