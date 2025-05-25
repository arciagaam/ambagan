'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FaChevronLeft } from 'react-icons/fa'

export default function BackButton({ href }: { href?: string }) {
    return (
        <Link href={href || '..'} rel='path' className='w-fit'>
            <Button variant={'ghost'}>
                <FaChevronLeft />
            </Button>
        </Link>

    )
}
