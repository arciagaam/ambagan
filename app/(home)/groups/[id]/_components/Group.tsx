import { getGroupById } from "@/lib/actions/group"
import { useSuspenseQuery } from "@tanstack/react-query"

type GroupProps = {
  id: number
}
export default function Group({ id }: GroupProps) {
  const group = useSuspenseQuery({
    queryKey: ["group"],
    queryFn: () => getGroupById(id)
  })

  return (
    <div>
      <p>
        {group.data.name}
      </p>
    </div>
  )
}
