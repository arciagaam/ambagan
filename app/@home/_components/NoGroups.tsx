import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NoGroups() {
    return (
        <div className="flex flex-col items-center py-20 gap-10">
            <div className="flex flex-col items-center">
                <h2 className='font-bold text-2xl text-center'>No group yet?</h2>
                <h3 className='text-base text-center'> Create one or join a group—splitting bills is better together!</h3>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <Link href={'/group/create'} className='w-full'>
                    <Button className='w-full'>Create a Group</Button>
                </Link>

                <Link href={'/group/join'} className='w-full'>
                    <Button className='w-full' variant={'outline'}>Join a Group</Button>
                </Link>
            </div>
        </div>

    )
}
