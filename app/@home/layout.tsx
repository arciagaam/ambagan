import React from 'react'
import Navbar from './_components/navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <div className='flex flex-col p-4 flex-1'>
                {children}
            </div>
        </div>
    )
}
