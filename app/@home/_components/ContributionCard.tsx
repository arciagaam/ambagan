import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ContributionItemWithRelations } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CURRENCY_SYMBOLS } from '@/constants'


type ContributionCardProps = {
  contributionItem: ContributionItemWithRelations,
  toPay: number
}
export default function ContributionCard({ contributionItem, toPay }: ContributionCardProps) {

  return (


    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-3 flex flex-col gap-2">

        <div className="flex gap-2">
          <div className="flex flex-col items-center justify-center bg-accent/50 aspect-square h-14 rounded-lg p-2">
            <p className="text-xs font-medium">{contributionItem.createdAt.toLocaleString('en-US', { month: 'short' })}</p>
            <p className="text-sm font-bold">{contributionItem.createdAt.getDate()}</p>
          </div>


          <div className="flex flex-col gap-1">
            <h3 className="font-medium">{contributionItem.name}</h3>
            <p className="text-xs text-muted-foreground">{contributionItem.Contribution.Group.name}</p>
          </div>

          <div className="flex flex-col items-end ml-auto">
            <p className="font-medium">{Number(contributionItem.amount).toLocaleString()} {contributionItem.Contribution.currency}</p>
            <Badge>Status</Badge>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="w-full h-full">
            <Badge className='w-full h-full py-2' variant="outline">Pay {toPay.toLocaleString()} {contributionItem.Contribution.currency}</Badge>
          </div>

          <Link className='w-full' href={`/group/${contributionItem.Contribution.Group.id}/contribution/${contributionItem.Contribution.id}`} >
            <Button className='w-full' variant="outline" size="sm">View Details</Button>
          </Link>
        </div>

        {/* <div className="flex justify-between items-center">

            <div className="flex flex-col">
              <h3 className="font-medium">{contributionItem.name}</h3>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">{contributionItem.Contribution.Group.name}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{contributionItem.createdAt.toLocaleDateString()}</span>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">PHP{Number(contributionItem.amount).toLocaleString()}</p>
              <MultipleAvatars avatars={contributionItem.Contribution.Group.UsersOnGroups.map(user => user.User)} />
            </div>

          </div> */}
      </CardContent>
    </Card>
  )
}