'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>

    </div>
  )
}

export default Home