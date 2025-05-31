import React from 'react';
import Link from 'next/link';
import { FaCog } from 'react-icons/fa';
import BackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';

type GroupHeaderProps = {
  groupName: string;
  groupId: string;
};

export default function GroupHeader({ groupName, groupId }: GroupHeaderProps) {
  return (
    <div className="flex px-4 py-6 items-center gap-2">
      <BackButton />
      <h1 className='text-xl font-bold'>{groupName}</h1>
      <Link href={`/group/${groupId}/manage`} className='ml-auto'>
        <Button variant={'outline'}>
          <FaCog />
        </Button>
      </Link>
    </div>
  );
}
