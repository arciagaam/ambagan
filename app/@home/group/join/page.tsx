'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { asyncFetch } from '@/lib/asyncFetch'
import { joinGroupSchema } from '@/schemas/GroupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Group } from '@prisma/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export default function JoinGroup() {

    const router = useRouter()

    const createGroupForm = useForm<z.infer<typeof joinGroupSchema>>({
        resolver: zodResolver(joinGroupSchema),
        defaultValues: {
            inviteCode: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof joinGroupSchema>) => {
        try {
            const res = await asyncFetch.get(`/api/group/join?invite=${values.inviteCode}`) as { message: string, group: Group }
            console.log(res)
            toast(res.message)
            router.push(`/group/${res.group.id}`)
            router.refresh()
        } catch (error: any) {
            toast(error.message)
        }
    }

    return (
        <Form {...createGroupForm}>
            <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col p-4'>
                <FormField
                    control={createGroupForm.control}
                    name="inviteCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter Invite Code</FormLabel>
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
