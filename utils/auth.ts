import prisma from "@/prisma/prisma";
import { createClient } from "./supabase/server"

export const getAuthUser = async () => {
    const supabase = await createClient();
    const result = await supabase.auth.getUser();

    if (!result.data.user || !result) return null
    const id = result.data.user.id

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    return user
}
