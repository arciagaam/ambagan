import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Unauthorized() {
  return (
    <div className="flex flex-col p-4 gap-4">
        <h1>Uh-oh! You&apos;re not supposed to be here.</h1>
        <Link href={'/'}>
            <Button>Back to Home</Button>
        </Link>
    </div>
  )
}
