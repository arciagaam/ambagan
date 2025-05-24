'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { joinGroupSchema } from '@/schemas/GroupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createGroup } from '../create/actions'

export default function JoinGroup() {

    const createGroupForm = useForm<z.infer<typeof joinGroupSchema>>({
        resolver: zodResolver(joinGroupSchema),
        defaultValues: {
            inviteCode: ''
        }
    })

    const onSubmit = (values: z.infer<typeof joinGroupSchema>) => {
        console.log(values)
    }

    return (
        <Form {...createGroupForm}>
            <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col'>
                <FormField
                    control={createGroupForm.control}
                    name="inviteCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Invite Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col w-full items-center k mt-auto gap-2">

                    <p>Don&apos;t have an invite link?</p>

                    <Link href={'/group/create'} className='w-full'>
                        <Button type='button' variant={'outline'} className='w-full'>Create a Group</Button>
                    </Link>

                    <div className="flex w-full gap-2">
                        <Link href={'..'} rel='path' className='w-full'>
                            <Button type='button' variant={'destructive'} className='w-full'>Cancel</Button>
                        </Link>
                        <Button className='w-full'>Join Group</Button>
                    </div>


                </div>
            </form>
        </Form>
    )
}
