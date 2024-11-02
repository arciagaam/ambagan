"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { NewGroup } from "./_components/NewGroup"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getGroups } from "@/lib/actions/group"

export default function Page() {
  const groups = useSuspenseQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  })

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 gap-4">
        {
          groups.data?.map((group) => {
            return (
              <Link href={`groups/${group.id}`} key={group.id}>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>{group.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            )
          })
        }
        <NewGroup />
      </div>
    </div>
  )
}
