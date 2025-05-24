'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { login } from '../actions'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'
import { LoginSchema } from '@/schemas/AuthSchema'

export default function LoginForm() {

    const registerForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        const formData = new FormData();

        for (const key in values) {
            formData.set(key, values[key as keyof typeof values])
        }

        const res = await login(formData);

        if (res.success) {
            toast.success('Success')
            redirect('/')
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
