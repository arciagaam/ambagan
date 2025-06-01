import React from 'react'
import ContributionCard from './ContributionCard'
import { ContributorWithRelations } from '@/types'

type RecentContributionsProps = {
  contributions: ContributorWithRelations[]
}

export default function RecentContributions({ contributions }: RecentContributionsProps) {
  if (contributions.length === 0) return null


  return (
    <div className="flex flex-col py-1">
      <div className="flex flex-col">
        <h2 className='text-lg font-bold mb-2 leading-none'>Recent Contributions</h2>
        <p className="text-sm text-muted-foreground mb-3">View your recent expense contributions across all groups</p>
      </div>
      <div className="flex flex-col gap-4">
        {contributions.map(contribution => (
          <ContributionCard key={contribution.contributionItemId} contributionItem={contribution.ContributionItem} toPay={Number(contribution.amount)} />
        ))}
      </div>
    </div>
  )
}