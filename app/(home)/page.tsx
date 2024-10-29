import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { NewGroup } from "./_components/NewGroup"

const name = "John Doe"

type Group = {
  id: string
  name: string
  icon?: string
}

// Will be taken from database...
const groups: Group[] = [
  {
    id: "1",
    name: "Group 1",
  },
  {
    id: "2",
    name: "Group 2",
  },
  {
    id: "3",
    name: "Group 3",
  },
]

export default function Page() {
  return (
    <div className="w-full h-full">
      <p>Welcome, <span>{name}</span></p>
      <div className="grid grid-cols-2 gap-4">
        {
          groups.map((group) => {
            return (
              <Link href={`group/${group.id}`} key={group.id}>
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
