'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

type FABProps = {
    children?: React.ReactNode
}

const FAB = ({ children }: FABProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        if (!children) return

        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed flex flex-col items-end gap-2 bottom-4 right-4 z-50">
            {
                (children && isOpen) &&
                <div className="flex flex-col gap-2 items-end">
                    {children}
                </div>
            }

            <Button onClick={handleClick} className="rounded-full aspect-square size-14 border shadow-none border-border">
                <Plus />
            </Button>
        </div>
    )
}

export default FAB