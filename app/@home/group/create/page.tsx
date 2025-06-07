'use client'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { CreateGroupSchema } from '@/schemas/GroupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { asyncFetch } from '@/lib/asyncFetch'
import { Group } from '@prisma/client'
import { APIError } from '@/lib/apiErrorHandler'
import { FaGamepad, FaBook, FaSchool, FaUserFriends } from 'react-icons/fa'
import AmbaganInput from '@/components/ambagan-input'

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
        <div className="flex flex-col min-h-[90dvh] bg-background p-4 md:p-6">
            <div className="max-w-md w-full mx-auto rounded-xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary p-6 text-center">
                    <h1 className="text-2xl font-bold text-primary-foreground">Create Your Group</h1>
                    <p className="text-primary-foreground/80 mt-1">Your group is where you and your friends split bills together</p>
                </div>

                {/* Form */}
                <Form {...createGroupForm}>
                    <form onSubmit={createGroupForm.handleSubmit(onSubmit)} className='flex-1 flex flex-col gap-6 pt-6'>
                        <FormField
                            control={createGroupForm.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <AmbaganInput
                                        containerClass='border-rounded-tl-none'
                                        hasError={createGroupForm.formState.errors.name}
                                        icon={<FaUserFriends />}
                                        placeholder="Enter your group name"
                                        {...field}
                                        value={field.value}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Group Categories */}
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-muted-foreground mb-3">WHY CREATE A GROUP?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <CategoryCard
                                    icon={<FaUserFriends />}
                                    label="Friends"
                                    description="Split bills for outings, dinners, and shared expenses with friends"
                                    color="var(--fun-purple)"
                                />
                                <CategoryCard
                                    icon={<FaGamepad />}
                                    label="Trip"
                                    description="Track expenses for vacations, road trips, and adventures"
                                    color="var(--fun-blue)"
                                />
                                <CategoryCard
                                    icon={<FaBook />}
                                    label="Study Group"
                                    description="Share costs for books, courses, and study materials"
                                    color="var(--fun-pink)"
                                />
                                <CategoryCard
                                    icon={<FaSchool />}
                                    label="Household"
                                    description="Manage rent, utilities, groceries, and shared living expenses"
                                    color="var(--fun-green)"
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6">
                            <Button className='w-full py-6 text-lg rounded-md'>Create Group</Button>
                        </div>
                    </form>
                </Form>

                {/* Join Option */}
                <div className="mt-6 pt-6 border-t text-center">
                    <p className="text-muted-foreground mb-3">Have an invite code already?</p>
                    <Link href="/group/join" className="w-full">
                        <Button variant="outline" className="w-full">Join a Group</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

type CategoryCardProps = {
    icon: React.ReactNode
    label: string
    description: string
    color: string
}

function CategoryCard({ icon, label, description, color }: CategoryCardProps) {
    return (
        <div
            className="flex items-start gap-3 p-3 rounded-md border border-border bg-card hover:bg-accent/30 transition-colors"
            style={{ borderLeft: `4px solid ${color}` }}
        >
            <div className="h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                <div style={{ color }}>{icon}</div>
            </div>
            <div>
                <span className="font-medium block">{label}</span>
                <span className="text-sm text-muted-foreground">{description}</span>
            </div>
        </div>
    )
}