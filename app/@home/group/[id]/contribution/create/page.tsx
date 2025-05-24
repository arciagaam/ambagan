import { CreateContributionSchema } from '@/schemas/ContributionSchema'
import { getAuthUser } from '@/utils/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import CreateContributionForm from './_components/CreateContributionForm'
import { notFound } from 'next/navigation'

export default async function CreateContribution() {

    const user = await getAuthUser()

    if(!user) return notFound()

    return <CreateContributionForm user={user}/>
}
