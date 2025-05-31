import React from 'react'
import GroupsGrid from './_components/GroupsGrid'
import NoGroups from './_components/NoGroups'
import StatsSection from './_components/StatsSection'
import QuickActions from './_components/QuickActions'
import RecentContributions from './_components/RecentContributions'
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

  // Mock data for recent contributions
  const recentContributions = [
    { id: 1, title: "Ambagan Title", amount: "PHP 23.50", group: "Group name", date: "Today/Yesterday/MM/DD", users: [
      { id: "1", name: "Alex", alt: "Alex" },
      { id: "2", name: "Jamie", alt: "Jamie" },
      { id: "3", name: "Taylor", alt: "Taylor" },
      { id: "4", name: "Taylor", alt: "Taylor" },
    ]},
    { id: 2, title: "Coffee run", amount: "PHP 24.50", group: "Roommates", date: "Today", users: [
      { id: "1", name: "Alex", alt: "Alex" },
      { id: "2", name: "Jamie", alt: "Jamie" },
      { id: "3", name: "Taylor", alt: "Taylor" },
    ]},
    { id: 3, title: "Movie night", amount: "PHP 42.00", group: "Friends", date: "Yesterday", users: [
      { id: "1", name: "Alex", alt: "Alex" },
      { id: "4", name: "Jordan", alt: "Jordan" },
    ]},
  ];

  return (
    <div className="flex flex-col pb-6">
      <div className="flex flex-col w-full bg-primary text-secondary p-6 rounded-b-2xl">
        <div className="flex flex-col">
          <h1 className='text-xl font-bold'>Hello! John Doe</h1>
          <p className='text-sm text-muted-secondary'>Ready to split your bills with your friends?</p>
        </div>
        
        {/* Stats section component */}
        <StatsSection groupCount={groups.length} />
      </div>

      {/* Quick actions component */}
      <QuickActions />

      {/* Recent contributions component */}
      <RecentContributions contributions={recentContributions} />

      <div className="flex flex-col p-4 pt-0">
        <h2 className='text-lg font-bold mb-2'>My Groups</h2>
        <p className="text-sm text-muted-foreground mb-3">Manage expenses with your friends and family</p>
      </div>

      {(groups && groups.length > 0) ? <GroupsGrid groups={groups} /> : <NoGroups />}
    </div>
  )
}