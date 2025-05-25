'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { APIError } from '@/lib/apiErrorHandler'
import { asyncFetch } from '@/lib/asyncFetch'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

export default function Navbar() {

    const router = useRouter()

    const handleLogout = async () => {
        try {
            await asyncFetch.get('/api/auth/signout');
            router.push('/')
            router.refresh()
        } catch (error: unknown) {
            toast.error((error as APIError).message)
        }
    }
    return (

        <div className="flex bg-white px-4 py-2 items-center justify-between w-full shadow">

            <h1 className='text-xl font-bold uppercase'>Ambagan</h1>

            <Sheet>
                <SheetTrigger asChild>
                    <Button><Menu /></Button>
                </SheetTrigger>
                <SheetContent className='p-4 w-full flex flex-col'>
                    <SheetTitle className='sr-only'>Menu Bar</SheetTitle>
                    <Button onClick={handleLogout} className='mt-auto'>
                        Logout
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
    )
}
