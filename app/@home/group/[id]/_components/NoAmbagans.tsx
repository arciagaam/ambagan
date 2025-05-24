'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

export default function NoAmbagans() {
    const pathname = usePathname()

    return (
        <div className="flex flex-col items-center pt-5 gap-5">
            <div className="flex flex-col items-center">
                <h3 className='text-2xl text-center'> Nothing here yet—go ahead and start your first ambagan!</h3>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <Link href={`${pathname}/contribution/create`} className='w-full'>
                    <Button className='w-full'>Create Ambagan</Button>
                </Link>
            </div>
        </div>
    )
}
