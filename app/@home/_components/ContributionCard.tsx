import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import MultipleAvatars from '@/components/MultipleAvatars'

type ContributionUser = {
  id: string
  name: string
  alt: string
}

export type Contribution = {
  id: number
  title: string
  amount: string
  group: string
  date: string
  users: ContributionUser[]
}

type ContributionCardProps = {
  contribution: Contribution
}

export default function ContributionCard({ contribution }: ContributionCardProps) {
  // Convert $ to PHP in the amount
  const formattedAmount = contribution.amount.replace('$', 'PHP ')

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">{contribution.title}</h3>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">{contribution.group}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{contribution.date}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">{formattedAmount}</p>
            <MultipleAvatars avatars={contribution.users} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}