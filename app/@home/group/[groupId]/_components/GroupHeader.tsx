import React from 'react';
import Link from 'next/link';
import { FaCog } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Group } from '@prisma/client';
import InviteCode from './InviteCode';

type GroupHeaderProps = {
  group: Group;
};

export default function GroupHeader({ group }: GroupHeaderProps) {
  return (
    <Card className='rounded-2xl bg-primary border-0'>
      <CardContent className='p-4 text-white gap-5 flex flex-col'>
        <div className="flex items-center gap-2">
          <h1 className='text-xl font-bold'>{group.name}</h1>
          <Link href={`/group/${group.id}/manage`} className='ml-auto'>
            <Button variant={'ghost'}>
              <FaCog />
            </Button>
          </Link>
        </div>

        <InviteCode inviteCode={group.inviteCode} />
      </CardContent>
    </Card>
  );
}
