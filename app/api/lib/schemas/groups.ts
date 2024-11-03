import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
});

export const updateGroupSchema = z.object({
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
});
