"use client";

import { getGroupById } from "@/lib/actions/group";
import { useSuspenseQuery } from "@tanstack/react-query";

type GroupProps = {
  id: number;
};

export default function Group({ id }: GroupProps) {
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
            <div key={contribution.id}>
              <p>{contribution.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
