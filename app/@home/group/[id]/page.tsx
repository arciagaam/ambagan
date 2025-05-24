import React from 'react'
import { getGroup } from './actions'
import InviteCode from './_components/InviteCode'
import NoAmbagans from './_components/NoAmbagans'
import { Button } from '@/components/ui/button'
import { FaChevronLeft, FaCog } from 'react-icons/fa'
import Link from 'next/link'
import BackButton from '@/components/back-button'

type ViewGroupProps = {
    params: {
        id: string
    }
}
export default async function ViewGroup({ params }: ViewGroupProps) {
    const { id } = await params
    const group = await getGroup(id);

    return (
        <div className="flex flex-col">

            <div className="flex px-4 py-6 items-center gap-2">
                <BackButton />
                <h1 className='text-xl font-bold'>{group?.name}</h1>

                <Link href={`/group/${id}/manage`} className='ml-auto'>
                    <Button variant={'outline'}>
                        <FaCog />
                    </Button>
                </Link>
            </div>

            <InviteCode />

            <div className="flex flex-col gap-2 p-4">
                <h2 className='text-xl font-medium'>Ambagans</h2>
                <NoAmbagans />
            </div>

        </div>
    )
}
