import React from 'react'
import GroupCard from './GroupCard'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { GroupWithUsers } from '@/types'

export default function GroupsGrid({ groups }: { groups: GroupWithUsers[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
      {
        groups.map((group) => <GroupCard key={group.id} group={group} />)
      }

      <Link href={`/group/create`}>
        <div className="flex flex-col text-center p-4 rounded-2xl border border-border aspect-square bg-white shadow items-center justify-center gap-2">
          <FaPlus />
          Add or Join Group
        </div>
      </Link>
    </div>
  )
}
