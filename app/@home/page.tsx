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
          userId: user.id, // The ID from Supabase Auth, also in your `User.id`
        },
      },
    },
    include: {
      UsersOnGroups: true, // Optional: to see role, createdAt, etc.
    },
  });

  return (
    <div className="flex flex-col min-h-[100dvh] gap-4 p-4">
      <h1 className='text-lg font-bold'>My Groups</h1>
      {(groups && groups.length > 0) ? <GroupsGrid groups={groups} /> : <NoGroups />}
    </div>
  )
}
