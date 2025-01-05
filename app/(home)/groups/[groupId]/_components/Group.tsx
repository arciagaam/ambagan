"use client";

import { getGroupById } from "@/lib/actions/group";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";

type GroupProps = {
  id: number;
};

export default function Group({ id }: GroupProps) {
  const pathname = usePathname()
  const group = useSuspenseQuery({
    queryKey: ["groupById", id],
    queryFn: () => getGroupById(id),
  });

  return (
    <div>
      <p>{group.data.id}</p>
      <p>{group.data.name}</p>
      <div>
        <p>Contributions</p>
        {group.data.contributions.map((contribution) => {
          return (
            <Link
              href={`${pathname}/contributions/${contribution.id}`}
              key={contribution.id}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{contribution.name}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
