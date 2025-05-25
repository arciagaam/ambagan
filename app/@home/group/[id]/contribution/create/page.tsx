import { getAuthUser } from '@/utils/auth'
import React from 'react'
import CreateContributionForm from './_components/CreateContributionForm'
import { notFound } from 'next/navigation'
import { getMembers } from './action'

type CreateContributionProps = {
    params: Promise<{
        id: string
    }>
}

export default async function CreateContribution({
    params
}: CreateContributionProps) {
    const { id } = await params
    const members = await getMembers(id)
    return <CreateContributionForm members={members} />
}
