import { z } from "zod";

export const ContributionItemSchema = z.object({
    name: z.string(),
    amount: z.string(),
    contributors: z.array(z.object({
        id: z.string(),
        amount: z.string()
    }))
})

export const CreateContributionSchema = z.object({
    name: z.string(),
    ownerId: z.string(),
    contributionItems: z.array(ContributionItemSchema)
})

