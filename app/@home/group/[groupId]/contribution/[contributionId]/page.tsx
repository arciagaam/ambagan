import React from 'react'
import prisma from '@/prisma/prisma'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    groupId: string
    contributionId: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { groupId, contributionId } = await params
  const id = Number(contributionId)

  if (isNaN(id)) return notFound()

  const contribution = await prisma.contribution.findUnique({
    where: {
      id,
      groupId: groupId
    },
    include: {
      ContributionItem: {
        include: {
          Contributor: {
            include: {
              User: true,
            }
          }
        }
      }
    }
  })

  if (!contribution) return notFound()

  return (
    <div className="flex flex-col">
      <h1>{contribution.name}</h1>
      {
        contribution.ContributionItem && contribution.ContributionItem.length ? (
          contribution.ContributionItem.map((contribution) => {
            return (
              <div key={contribution.id}>
                <p>{contribution.name}</p>
                <p>{String(contribution.amount)}</p>
                {
                  contribution.Contributor && contribution.Contributor.length ? (
                    contribution.Contributor.map((contributor) => {
                      return (
                        <div key={contributor.userId}>
                          <p>{contributor.User.first_name ?? contributor.User.email}</p>
                        </div>
                      )
                    })
                  ) : (
                    <p>Add Contributor</p>
                  )
                }
              </div>
            )
          })
        ) : (
          <p>Add Item</p>
        )
      }
    </div >
  )
}
