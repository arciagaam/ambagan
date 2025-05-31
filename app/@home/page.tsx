import React from 'react'
import GroupsGrid from './_components/GroupsGrid'
import NoGroups from './_components/NoGroups'
import { getAuthUser } from '@/utils/auth'
import prisma from '@/prisma/prisma'

export default async function Home() {
  const user = await getAuthUser()
  if (!user) return

  const groups = await prisma.group.findMany({
    where: {
      UsersOnGroups: {
        some: {
          userId: user.id,
        },
      },
    },
    include: {
      UsersOnGroups: true,
    },
  });

  return (
    <div className="flex flex-col">

      <div className="flex flex-col w-full bg-primary text-secondary p-4 rounded-b-2xl">

        <div className="flex flex-col">
          <h1 className='text-lg font-bold'>Hello! John Doe</h1>
          <p className='text-sm text-muted-secondary'>Ready to split your bills with your friends?</p>
        </div>
      </div>

      <div className="flex flex-col p-4">
        <h2 className='text-lg font-bold'>My Groups</h2>

      </div>

      {(groups && groups.length > 0) ? <GroupsGrid groups={groups} /> : <NoGroups />}
    </div>
  )
}
