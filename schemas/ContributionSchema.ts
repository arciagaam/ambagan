import { z } from "zod";

export const ContributorSchema = z.object({
    id: z.string(),
    amount: z.number()
})

export const ContributionItemSchema = z.object({
    name: z.string(),
    amount: z.string(),
    contributors: z.array(ContributorSchema)
})

export const CreateContributionSchema = z.object({
    name: z.string(),
    ownerId: z.string(),
    contributionItems: z.array(ContributionItemSchema)
})

