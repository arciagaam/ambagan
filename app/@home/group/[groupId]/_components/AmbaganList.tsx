import React from 'react';
import Link from 'next/link';
import Ambagan from './Ambagan';
import NoAmbagans from './NoAmbagans';
import { Contribution } from '@prisma/client';
import { FaPlus } from 'react-icons/fa';

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

          <Link href={`/group/${groupId}/contribution/create`}>
            <div className="flex flex-col text-center p-4 rounded-2xl border border-border aspect-square bg-white shadow items-center justify-center gap-2">
              <FaPlus />
              Create Ambagan
            </div>
          </Link>
        </>
      ) : (
        <NoAmbagans />
      )}
    </div>
  );
}
