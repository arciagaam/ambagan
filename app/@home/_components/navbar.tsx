'use client'

import { Button } from '@/components/ui/button'
import { APIError } from '@/lib/apiErrorHandler'
import { asyncFetch } from '@/lib/asyncFetch'
import { ArrowLeft, LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaUser } from 'react-icons/fa'

export default function Navbar() {

    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const handleLogout = async () => {
        try {
            await asyncFetch.get('/api/auth/signout');
            router.push('/')
            router.refresh()
        } catch (error: unknown) {
            toast.error((error as APIError).message)
        }
    }

    const getBackHref = () => {
        if (pathname.startsWith('/group/') && pathname.includes('/manage')) {
            return `/group/${pathname.split('/')[2]}`
        }
        return '..'
    }

    return (

        <>
            {
                // isOpen && <div className="absolute inset-0 bg-black/40"></div>
            }

            <div className="flex px-4 py-2 items-center justify-between w-full h-[4rem] bg-background">

                {
                    pathname !== '/' &&
                    <Link href={getBackHref()} rel='path'>
                        <Button variant="outline" className="rounded-full aspect-square size-12 border shadow-none border-border ">
                            <ArrowLeft />
                        </Button>
                    </Link>
                }




                <div className="flex flex-col relative z-[12] ml-auto">
                    <Button className='rounded-lg aspect-square size-8 transition-all' onClick={() => setIsOpen(!isOpen)}>

                    </Button>

                    <div className={`absolute top-[calc(100%+1rem)] right-0 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        <div className="flex flex-col gap-[1rem]">
                            <Button variant={'secondary'} className='rounded-2xl aspect-square size-18 bg-white transition-all'>
                                <FaUser />
                            </Button>

                            <Button variant={'secondary'} onClick={handleLogout} className='rounded-2xl aspect-square size-18 bg-white transition-all delay-200'>
                                <LogOutIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
