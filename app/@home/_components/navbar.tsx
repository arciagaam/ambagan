'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { APIError } from '@/lib/apiErrorHandler'
import { asyncFetch } from '@/lib/asyncFetch'
import { ArrowLeft, LogOutIcon, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FaHistory, FaUser } from 'react-icons/fa'

export default function Navbar() {

    const router = useRouter()
    const pathname = usePathname()
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


                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'secondary'} className="flex flex-col relative z-[12] ml-auto">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='flex flex-col gap-4 pt-10 pb-4 w-fit'>
                        <SheetTitle className='sr-only'>Menu</SheetTitle>
                        {/* 
                        <SheetClose className='absolute top-4 left-4'>
                            <X size={16} />
                        </SheetClose> */}

                        <div className="flex flex-col h-full px-4 gap-8 pt-6">
                            <Button className='justify-start flex gap-4 p-0 max-w-full' variant={'ghost'}>
                                <div className="aspect-square h-fit w-fit p-4 rounded-xl bg-accent/50 flex items-center justify-center">
                                    <FaUser size={12} />
                                </div>

                                <div className="flex flex-col items-start">
                                    <p>Profile</p>
                                    <p className='text-xs text-muted-foreground'>View and edit your profile settings</p>
                                </div>
                            </Button>

                            <Button className='justify-start flex gap-4 p-0 max-w-full' variant={'ghost'}>
                                <div className="aspect-square h-fit w-fit p-4 rounded-xl bg-accent/50 flex items-center justify-center">
                                    <FaHistory size={12} />
                                </div>

                                <div className="flex flex-col items-start">
                                    <p>History</p>
                                    <p className='text-xs text-muted-foreground'>View your "ambagan" history</p>
                                </div>
                            </Button>

                            <Button onClick={handleLogout} className='justify-start flex gap-4 p-0 max-w-full mt-auto' variant={'ghost'}>
                                <div className="aspect-square h-fit w-fit p-4 rounded-xl bg-black/10 flex items-center justify-center">
                                    <LogOutIcon size={12} />
                                </div>

                                <div className="flex flex-col items-start">
                                    <p>Logout</p>
                                    <p className='text-xs text-muted-foreground'>Sign out of your account</p>
                                </div>
                            </Button>

                        </div>

                    </SheetContent>
                </Sheet>


            </div>
        </>

    )
}
