"use client"

import { ContributionItemWithRelations } from "@/types"
import { useState } from "react"

type ItemProps = {
  data: Omit<ContributionItemWithRelations, "Contribution">
}

type Contributor = {
  id: string | number;
  /**
   * Value specifically given by the contributor.
   */
  givenValue: number | null;
}

export const Item = ({ data }: ItemProps) => {
  const [contributor, setContributor] = useState<Contributor[]>(() => {
    if (!data.Contributor.length) {
      return []
    }

    return data.Contributor.map((contributor) => {
      return {
        id: contributor.userId,
        givenValue: null,
      }
    })
  })

  const totalGiven = contributor.reduce((acc, curr) => {
    return curr.givenValue === null
      ? acc
      : acc + curr.givenValue
  }, 0)

  /**
   * Auto-computed value based on the item amount and summation of give values by 
   * other contributors
   */
  const amountPerContributor = !data.Contributor.length
    ? Number(data.amount) - totalGiven
    : (Number(data.amount) - totalGiven) / data.Contributor.length

  return (
    <div key={data.id}>
      <p>{data.name}</p>
      <p>{String(data.amount)}</p>
      {
        data.Contributor && data.Contributor.length ? (
          data.Contributor.map((contributor) => {
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
}
