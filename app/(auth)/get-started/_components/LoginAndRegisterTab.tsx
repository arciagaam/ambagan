'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function LoginAndRegisterTab() {
    return (
        <Tabs defaultValue="login" className="w-full">
            <TabsList className='w-full'>
                <TabsTrigger className='w-full' value="login">Login</TabsTrigger>
                <TabsTrigger className='w-full' value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </Tabs>
    )
}
