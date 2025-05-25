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
import { notFound, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Member } from '../types'

type CreateContributionFormProps = {
    ownerId: string
    members: Member[]
}

export default function CreateContributionForm({
    ownerId,
    members
}: CreateContributionFormProps) {
    const { id } = useParams()

    if (!id) return notFound()

    const createContributionForm = useForm<z.infer<typeof CreateContributionSchema>>({
        resolver: zodResolver(CreateContributionSchema),
        defaultValues: {
            name: '',
            ownerId: ownerId,
            contributionItems: [{
                name: '',
                amount: '0',
                contributors: []
            }],
        }
    })

    const onSubmit = (values: z.infer<typeof CreateContributionSchema>) => console.log(values)

    return (
        <Form {...createContributionForm}>
            <form onSubmit={createContributionForm.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
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
