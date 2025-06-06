import React from 'react'
import prisma from '@/prisma/prisma'
import { notFound } from 'next/navigation'
import { getAuthUser } from '@/utils/auth'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type PageProps = {
  params: Promise<{
    groupId: string
    contributionId: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { groupId, contributionId } = await params
  const id = Number(contributionId)

  const user = await getAuthUser()

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

  console.log(contribution)

  const totalAmount = contribution.ContributionItem.reduce((acc, item) => acc + Number(item.amount), 0)
  const totalPayable = contribution.ContributionItem.filter((contributionItem) => contributionItem.Contributor.some((contributor) => contributor.userId === user?.id)).reduce((acc, item) => acc + Number(item.amount), 0)

  return (
    <div className="flex flex-col p-4 gap-10">
      <Card className='rounded-2xl bg-primary border-0'>
        <CardContent className='p-4 text-white gap-5 flex flex-col'>
          <h1 className='text-xl font-bold'>{contribution.name}</h1>

          <div className="flex gap-10">
            <div className="flex flex-col">
              <p className='text-sm'>Remaining Total</p>
              <p className='font-bold'>₱ {totalAmount.toLocaleString()}</p>
            </div>

            <div className="flex flex-col">
              <p className='text-sm'>Total Payable</p>
              <p className='font-bold'>₱ {totalPayable.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className='text-sm'>Date</p>
            <p>{contribution.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, {contribution.createdAt.toLocaleDateString('en-US', { weekday: 'long' })}</p>
          </div>
        </CardContent>
      </Card>



      <div className="flex flex-col gap-4">

        <h1 className='text-xl font-bold'>Contributions</h1>

        <div className="flex flex-col gap-5">
          {
            contribution.ContributionItem.map((contributionItem) => {
              return (

                <Card key={contributionItem.id} className="flex justify-between items-center">

                  <CardContent className='p-4'>
                    <div>
                      <h3 className="font-medium">{contributionItem.name || 'Unnamed Ambagan'}</h3>
                      <p className="text-sm text-muted-foreground">
                        Amount: ₱{contributionItem.amount?.toLocaleString() || 0}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Contributors: {contributionItem.Contributor?.length || 0}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                // <Card key={contribution.id}>

                //   <CardHeader>
                //     <p>{contribution.name}</p>
                //     <p>₱ {contribution.amount.toLocaleString()}</p>
                //   </CardHeader>

                //   <CardContent>
                //     {

                //       contribution.Contributor.map((contributor) => {
                //         return (
                //           <div key={contributor.userId}>
                //             <p>{contributor.User.first_name ?? contributor.User.email}</p>
                //           </div>
                //         )
                //       })
                //     }
                //   </CardContent>
                // </Card>
              )
            })
          }
        </div>

      </div>

      {/* <h1>{contribution.name}</h1>
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
      } */}
    </div >
  )
}
