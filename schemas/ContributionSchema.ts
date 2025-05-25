import { z } from "zod";

export const ContributorSchema = z.object({
    id: z.string().uuid(),
    amount: z.coerce.number(),
})

export const ContributionItemSchema = z.object({
    name: z.string().min(1),
    amount: z.coerce.number(),
    contributors: z.array(ContributorSchema)
})

export const CreateContributionSchema = z.object({
    name: z.string().min(1),
    contributionItems: z.array(ContributionItemSchema)
})

