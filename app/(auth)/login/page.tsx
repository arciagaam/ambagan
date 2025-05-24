'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signIn, useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export default function Login() {

    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            redirect("/");
        }

    }, [session]);

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values);
    }

    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
            <Card className='w-1/4'>
                <CardHeader>
                    <CardTitle>{session ? 'AMBAGAN! LOGGED IN' : 'AMBAGAN! LOGGED OUT'}</CardTitle>
                    <CardDescription>Login to your account</CardDescription>
                </CardHeader>

                <CardContent className='flex flex-col gap-4'>

                    <Button onClick={() => signIn('google')}>
                        <FaGoogle />
                        Sign in with Google
                    </Button>

                    <div className="flex items-center gap-2">
                        <div className="min-h-px w-full border-[.5px] border-[#e5e5e5]"></div>
                        or
                        <div className="min-h-px w-full border-[.5px] border-[#e5e5e5]"></div>
                    </div>

                    <FormProvider {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(onSubmit)} className='flex flex-col gap-5'>

                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={loginForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type='password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button>Login to Ambagan!</Button>

                        </form>
                    </FormProvider>




                </CardContent>
            </Card>
        </div>
    )
}
