"use client"

import { ContributionWithRelations } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type AmbaganProps = {
  contribution: ContributionWithRelations
}

export default function AmbaganCard({ contribution }: AmbaganProps) {

  const {
    id,
    name,
    ContributionItem
  } = contribution


  const totalAmount = ContributionItem.reduce((acc, item) => acc + Number(item.amount), 0)


  const pathname = usePathname()
  return (
    <Link href={`${pathname}/contribution/${id}`}>
      <div className="flex flex-col p-4 rounded-2xl gap-10 border border-border bg-white shadow relative overflow-clip">


        <span className='text-lg z-10'>{name}</span>



        <div className="flex w-full gap-10 z-10">
          <div className="flex flex-col">
            <p>Items</p>
            <p>{ContributionItem.length}</p>
          </div>

          <div className="flex flex-col">
            <p>Total Amount</p>
            <p>₱ {totalAmount}</p>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 rounded-full bg-accent size-[14rem] text-[5rem] aspect-square flex items-center justify-center opacity-40">
          🍽️
        </div>
      </div>
    </Link>
  )
}
