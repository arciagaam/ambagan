import React from 'react';
import Link from 'next/link';
import NoAmbagans from './NoAmbagans';
import { ContributionWithRelations } from '@/types';
import AmbaganCard from './AmbaganCard';
import FAB from '@/components/floating-action-button';

type AmbaganListProps = {
  contributions: ContributionWithRelations[];
  groupId: string;
};

export default function AmbaganList({ contributions, groupId }: AmbaganListProps) {


  return (
    <div className="flex flex-col gap-2">

      <div className="flex flex-col">
        <h2 className='text-lg font-bold mb-2 leading-none'>Ambagans</h2>
        <p className='text-sm text-muted-foreground mb-3'>View your recent expense contributions across all groups</p>
      </div>

      {contributions && contributions.length > 0 ? (
        <>
          {contributions.map((contribution) => (
            <AmbaganCard
              key={contribution.id}
              contribution={contribution}
            />
          ))}


          <Link href={`/group/${groupId}/contribution/create`}>
            <FAB />
          </Link>


        </>
      ) : (
        <NoAmbagans />
      )}
    </div>
  );
}
