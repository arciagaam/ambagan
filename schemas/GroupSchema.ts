import { z } from "zod";

export const CreateGroupSchema = z.object({
    name: z.string().min(1, 'Group name is required')
})

export const joinGroupSchema = z.object({
    inviteCode: z.string().min(1, 'Invite code is required')
})