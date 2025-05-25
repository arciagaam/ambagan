'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateGroupSchema } from '@/schemas/GroupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { redirect, useRouter } from 'next/navigation'
import { asyncFetch } from '@/lib/asyncFetch'
import { Group } from '@prisma/client'
import { APIError } from '@/lib/apiErrorHandler'

export default function CreateGroup() {
    const router = useRouter()

    const createGroupForm = useForm<z.infer<typeof CreateGroupSchema>>({
        resolver: zodResolver(CreateGroupSchema),
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof CreateGroupSchema>) => {
        try {
            const res = await asyncFetch.post('/api/group', values) as { data: Group }
            router.push(`/group/${res.data.id}`)
            router.refresh()
        } catch (error: unknown) {
            toast.error((error as APIError).message)
        }
    }

    return (
        <Form {...createGroupForm}>
            <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col p-4'>
                <FormField
                    control={createGroupForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Group Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col w-full items-center k mt-auto gap-2">

                    <p>Have an invite code already?</p>

                    <Link href={'/group/join'} className='w-full'>
                        <Button type='button' variant={'outline'} className='w-full'>Join a Group</Button>
                    </Link>



                    <div className="flex w-full gap-2">
                        <Link href={'..'} rel='path' className='w-full'>
                            <Button type='button' variant={'destructive'} className='w-full'>Cancel</Button>
                        </Link>

                        <Button className='w-full'>Create Group</Button>
                    </div>

                </div>
            </form>
        </Form>
    )
}
