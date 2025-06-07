import React from 'react'
import QuickActions from './_components/QuickActions'
import RecentContributions from './_components/RecentContributions'
import { getAuthUser } from '@/utils/auth'
import prisma from '@/prisma/prisma'
import MyGroups from './_components/MyGroups'

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


  const recentContributions = await prisma.contributor.findMany({
    where: {
      userId: user.id,
    },
    include: {
      ContributionItem: {
        include: {
          Contribution: {
            include: {
              Group: {
                include: {
                  UsersOnGroups: {
                    include: {
                      User: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    orderBy: {
      ContributionItem: {
        createdAt: 'desc'
      }
    },
    take: 5
  })

  return (
    <div className="flex flex-col pb-6">
      <div className="flex flex-col px-4 gap-10">
        <div className="flex flex-col w-full bg-primary text-secondary p-6 rounded-2xl">
          <div className="flex flex-col">
            <h1 className='text-xl font-bold'>Hello! John Doe</h1>
            <p className='text-sm text-muted-secondary'>Ready to split your bills with your friends?</p>
            <QuickActions />
          </div>

          {/* Stats section component */}
        </div>

        {/* Quick actions component */}

        {/* Recent contributions component */}
        <RecentContributions contributions={recentContributions} />

        {/* My groups component */}
        <MyGroups groups={groups} />
      </div>

    </div>
  )
}