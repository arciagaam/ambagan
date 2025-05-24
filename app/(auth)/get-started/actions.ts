'use server'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const res = await supabase.auth.signInWithPassword(data)

  console.log('USER SIGNUP', res.data.user)

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

  const res = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  })

  console.log('USER SIGNUP', res.data.user)

  if (res.error) {
    return { success: false, error: res.error.message }
  }

  return { success: true }
}