import React from 'react'
import Navbar from './_components/navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col bg-primary tracking-tighter">
            <Navbar />
            <div className='flex flex-col flex-1 bg-background'>
                {children}
            </div>
        </div>
    )
}
