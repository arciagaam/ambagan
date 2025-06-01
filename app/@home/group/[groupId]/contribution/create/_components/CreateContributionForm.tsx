'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateContributionSchema } from '@/schemas/ContributionSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ContributionsItemsList from './ContributionsItemsList'
import { formatDateHumanReadable } from '@/lib/utils'
import { notFound, useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Member } from '../types'
import { asyncFetch } from '@/lib/asyncFetch'
import toast from 'react-hot-toast'
import { APIError } from '@/lib/apiErrorHandler'
import { Contribution } from '@prisma/client'

type CreateContributionFormProps = {
    members: Member[]
}

export default function CreateContributionForm({
    members
}: CreateContributionFormProps) {
    const router = useRouter()
    const { groupId } = useParams()

    if (!groupId) return notFound()

    const createContributionForm = useForm<z.infer<typeof CreateContributionSchema>>({
        resolver: zodResolver(CreateContributionSchema),
        defaultValues: {
            name: '',
            contributionItems: [{
                name: '',
                amount: 0,
                contributors: []
            }],
        }
    })

    const onSubmit = async (values: z.infer<typeof CreateContributionSchema>) => {
        try {
            const res = await asyncFetch.post(`/api/group/${groupId}/contribution`, values) as { data: Contribution }
            // router.push(`/group/${res.data.id}`)
            // router.refresh()
        } catch (error: unknown) {
            toast.error((error as APIError).message)
        }
    }

    return (
        <Form {...createContributionForm}>
            <form onSubmit={createContributionForm.handleSubmit(onSubmit)} className='flex flex-col gap-5 p-4'>
                <FormField
                    control={createContributionForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p>{formatDateHumanReadable(new Date())}</p>
                <ContributionsItemsList members={members} />
                <Button className='w-full'>Create Ambagan</Button>
            </form>
        </Form>
    )
}
