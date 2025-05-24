import React from 'react'
import { notFound } from 'next/navigation'
import { getGroup } from './actions'
import InviteCode from './_components/InviteCode'
import NoAmbagans from './_components/NoAmbagans'
import Ambagan from './_components/Ambagan'

type ViewGroupProps = {
    params: Promise<{
        id: string
    }>
}

export default async function ViewGroup({ params }: ViewGroupProps) {
    const { id } = await params
    const group = await getGroup(id);

    if (!group) return notFound()

    return (
        <div className="flex flex-col gap-5">
            <h1 className='text-xl font-medium'>{group?.name}</h1>
            <InviteCode />

            <div className="flex flex-col gap-2">
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
