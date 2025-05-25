'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { redirect, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { LoginSchema } from '@/schemas/AuthSchema'
import { asyncFetch } from '@/lib/asyncFetch'

export default function LoginForm() {
    const router = useRouter()

    const registerForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        try {
            await asyncFetch.post('/api/auth/login', values)
            toast.success('Logged in successfully!')
            router.push('/')
            router.refresh() 
        } catch (error: any) {
            toast.error(error.message)
            registerForm.setValue('password', '')
        }
    }

    return (
        <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} autoComplete='email' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} type='password' autoComplete='new-password' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button>Login</Button>
            </form>
        </Form>
    )
}
