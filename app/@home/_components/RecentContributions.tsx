import React from 'react'
import ContributionCard, { Contribution } from './ContributionCard'

type RecentContributionsProps = {
  contributions: Contribution[]
}

export default function RecentContributions({ contributions }: RecentContributionsProps) {
  if (contributions.length === 0) return null
  
  return (
    <div className="flex flex-col p-4">
      <h2 className='text-lg font-bold mb-3'>Recent Contributions</h2>
      <div className="space-y-3">
        {contributions.map(contribution => (
          <ContributionCard key={contribution.id} contribution={contribution} />
        ))}
      </div>
    </div>
  )
}