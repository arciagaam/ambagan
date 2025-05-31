import React from 'react';
import Link from 'next/link';
import Ambagan from './Ambagan';
import NoAmbagans from './NoAmbagans';
import { Button } from '@/components/ui/button';
import { Contribution } from '@prisma/client';

type AmbaganListProps = {
  contributions: Contribution[];
  groupId: string;
};

export default function AmbaganList({ contributions, groupId }: AmbaganListProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h2>Ambagans</h2>
      {contributions && contributions.length > 0 ? (
        <>
          {contributions.map((contribution) => (
            <Ambagan
              key={contribution.id}
              contribution={contribution}
            />
          ))}
          <Button className='w-full' asChild>
            <Link href={`/group/${groupId}/contribution/create`} className='w-full'>
              Create Ambagan
            </Link>
          </Button>
        </>
      ) : (
        <NoAmbagans />
      )}
    </div>
  );
}
