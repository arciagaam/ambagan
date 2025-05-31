import React from 'react'
import CreateContributionForm from './_components/CreateContributionForm'
import { getMembers } from './action'

type CreateContributionProps = {
    params: Promise<{
        groupId: string
    }>
}

export default async function CreateContribution({
    params
}: CreateContributionProps) {
    const { groupId } = await params
    const members = await getMembers(groupId)
    return <CreateContributionForm members={members} />
}
