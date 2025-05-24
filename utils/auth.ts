import { createClient } from "./supabase/server"

export const getAuthUser = async () => {
    const supabase = await createClient();

    const data = await supabase.auth.getUser();

    if(!data.data.user || !data) return null

    return data.data.user
}