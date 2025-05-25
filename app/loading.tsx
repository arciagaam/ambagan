import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <FaSpinner className='animate-spin' size={24}/>
    </div>
  )
}
