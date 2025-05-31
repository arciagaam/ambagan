import { CreateContributionSchema } from '@/schemas/ContributionSchema'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'

export default function ContributorsList({ index }: { index: number }) {
    const form = useFormContext<z.infer<typeof CreateContributionSchema>>()

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: `contributionItems`
    })

    return (
        <div>ContributorsList</div>
    )
}
