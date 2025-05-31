"use client"

import { Contribution } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type AmbaganProps = {
  contribution: Contribution
}

export default function Ambagan({ contribution }: AmbaganProps) {
  const {
    id,
    name,
  } = contribution
  const pathname = usePathname()
  return (
    <Link href={`${pathname}/contribution/${id}`}>
      <div className="flex flex-col p-4 rounded-2xl border border-border aspect-square bg-white shadow">
        {name}
      </div>
    </Link>
  )
}
