'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateContributionSchema } from '@/schemas/ContributionSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ContributionsItemsList from './ContributionsItemsList'

export default function CreateContributionForm({ user }: { user: any }) {
    const createContributionForm = useForm<z.infer<typeof CreateContributionSchema>>({
        resolver: zodResolver(CreateContributionSchema),
        defaultValues: {
            name: '',
            ownerId: user.id,
            contributionItems: [{
                name: '',
                amount: '0',
                contributors: []
            }],
        }
    })

    const onSubmit = (values: z.infer<typeof CreateContributionSchema>) => {
    }

    return (
        <Form {...createContributionForm}>
            <form onSubmit={createContributionForm.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <FormField
                    control={createContributionForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ambagan Name</FormLabel>
                            <FormControl>
                                <Input {...field} autoComplete='email' />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <p>add date here</p>

                <ContributionsItemsList />

                
            </form>
        </Form>
    )
}
