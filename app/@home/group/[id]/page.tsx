import React from 'react'
import { getGroup } from './actions'
import InviteCode from './_components/InviteCode'
import NoAmbagans from './_components/NoAmbagans'

type ViewGroupProps = {
    params: {
        id: string
    }
}
export default async function ViewGroup({ params }: ViewGroupProps) {
    const { id } = await params

    const group = await getGroup(id);

    return (
        <div className="flex flex-col gap-5">
            <h1 className='text-xl font-medium'>{group?.name}</h1>
            <InviteCode />

            <div className="flex flex-col gap-2">
                <h2>Ambagans</h2>
                <NoAmbagans />
            </div>

        </div>
    )
}
