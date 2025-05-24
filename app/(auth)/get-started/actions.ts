'use server'
import prisma from '@/prisma/prisma'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'


export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const res = await supabase.auth.signInWithPassword(data)

  if (res.error) {
    return { success: false, error: res.error.message }
  }

  return { success: true }
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const data = {
    firstName: formData.get('firstName') as string,
    middleName: formData.get('middleName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const signupUser = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  })


  const newUser = signupUser.data.user

  await prisma.user.create({
    data: {
      id: newUser!.id,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName
    }
  })

  if (signupUser.error) {
    return { success: false, error: signupUser.error.message }
  }

  return { success: true }
}

export async function signout() {
  const supabase = await createClient()
  supabase.auth.signOut()

  redirect('/')
}