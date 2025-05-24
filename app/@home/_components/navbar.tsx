'use client'

import { signout } from '@/app/(auth)/get-started/actions'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'

export default function Navbar() {
    return (

        <div className="flex bg-white px-4 py-2 items-center justify-between w-full shadow">

            <h1 className='text-xl font-bold uppercase'>Ambagan</h1>

            <Sheet>
                <SheetTrigger asChild>
                    <Button><Menu /></Button>
                </SheetTrigger>
                <SheetContent className='p-4 w-full flex flex-col'>

                    <Button onClick={signout} className='mt-auto'>
                        Logout
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
    )
}
