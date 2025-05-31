'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { APIError } from '@/lib/apiErrorHandler'
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
import { FaLink, FaSearch } from 'react-icons/fa'

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
            toast(res.message)
            router.push(`/group/${res.group.id}`)
            router.refresh()
        } catch (error: unknown) {
            toast((error as APIError).message)
        }
    }

    return (
        <div className="flex flex-col min-h-[90dvh] bg-gradient-to-b from-background to-muted p-4 md:p-6">
            <div className="max-w-md w-full mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-primary p-6 text-center">
                    <h1 className="text-2xl font-bold text-primary-foreground">Join a Group</h1>
                    <p className="text-primary-foreground/80 mt-1">Enter an invite code to join an existing group</p>
                </div>
                
                {/* Form */}
                <div className="p-6">
                    <Form {...createGroupForm}>
                        <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col gap-6'>
                            <FormField
                                control={createGroupForm.control}
                                name="inviteCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-2 mb-2 p-3 bg-muted rounded-lg">
                                            <FaLink className="text-muted-foreground" />
                                            <div className="flex-1">
                                                <FormControl>
                                                    <Input 
                                                        {...field} 
                                                        placeholder="Enter invite code" 
                                                        className="border-none shadow-none focus-visible:ring-0 px-0 h-auto py-1 bg-transparent"
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-2">
                                            <p>Invites should look like:</p>
                                            <p className="font-mono">abc123</p>
                                            <p className="font-mono">ambagan-friends</p>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            {/* Action Buttons */}
                            <div className="mt-4">
                                <Button className='w-full py-6 text-lg rounded-md'>Join Group</Button>
                            </div>
                        </form>
                    </Form>
                    
                    {/* Discovery Option */}
                    <div className="mt-6 p-4 bg-accent/30 rounded-lg border border-accent/20">
                        <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">
                                <FaSearch />
                            </div>
                            <div>
                                <h3 className="font-medium">{`Don't`} have an invite?</h3>
                                <p className="text-sm text-muted-foreground">Create your own group and invite friends</p>
                                <Link href="/group/create" className="w-full block mt-3">
                                    <Button variant="outline" className="w-full">Create a Group</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}