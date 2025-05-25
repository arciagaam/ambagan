import React from 'react'
import { notFound } from 'next/navigation'
import InviteCode from './_components/InviteCode'
import NoAmbagans from './_components/NoAmbagans'
import Ambagan from './_components/Ambagan'
import BackButton from '@/components/back-button'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaCog } from 'react-icons/fa'
import prisma from '@/prisma/prisma'

type ViewGroupProps = {
    params: Promise<{
        id: string
    }>
}

export default async function ViewGroup({ params }: ViewGroupProps) {
    const { id } = await params
    const group = await prisma.group.findFirst({
        where: {
            id: id
        },
        include: {
            UsersOnGroups: {
                include: {
                    user: true
                }
            },
            contributions: true,
        }
    })

    if (!group) return notFound()

    return (
        <div className="flex flex-col">

            <div className="flex px-4 py-6 items-center gap-2">
                <BackButton />
                <h1 className='text-xl font-bold'>{group.name}</h1>

                <Link href={`/group/${id}/manage`} className='ml-auto'>
                    <Button variant={'outline'}>
                        <FaCog />
                    </Button>
                </Link>
            </div>

            <InviteCode inviteCode={group.inviteCode} />

            <div className="flex flex-col gap-2 p-4">
                <h2>Ambagans</h2>
                {
                    group.contributions && group.contributions.length ? (
                        group.contributions.map((contribution) => {
                            return (
                                <Ambagan
                                    key={contribution.id}
                                    contribution={contribution}
                                />
                            )
                        })
                    ) : (
                        <NoAmbagans />
                    )
                }
            </div>
        </div>
    )
}
