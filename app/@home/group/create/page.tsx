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
import { createGroup } from './actions'

export default function CreateGroup() {

    const createGroupForm = useForm<z.infer<typeof CreateGroupSchema>>({
        resolver: zodResolver(CreateGroupSchema),
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = (values: z.infer<typeof CreateGroupSchema>) => {
        const res = createGroup(values);
        
    }

    return (
        <Form {...createGroupForm}>
            <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col'>
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
                        <Button type='button' variant={'destructive'} className='w-full'>Cancel</Button>
                        <Button className='w-full'>Create Group</Button>
                    </div>

                </div>
            </form>
        </Form>
    )
}
