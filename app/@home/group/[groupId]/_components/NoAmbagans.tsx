'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NoAmbagans() {
    const pathname = usePathname()

    return (
        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-center">
                <h3 className='text-xl text-start'> Nothing here yet—go ahead and start your first ambagan!</h3>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <Button className='w-full' asChild>
                    <Link href={`${pathname}/contribution/create`} className='w-full'>
                        Create Ambagan
                    </Link>
                </Button>
            </div>
        </div>
    )
}
