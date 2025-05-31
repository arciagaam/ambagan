import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ContributionItemSchema, CreateContributionSchema } from '@/schemas/ContributionSchema'
import React from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Member } from '../types'
import { Button } from '@/components/ui/button'
import { ContributorsSelect } from './ContributorsSelect'

type ContributionsItemsListProps = {
    members: Member[]
}

const DEFAULT_CONTRIBUTION_ITEMS: z.infer<typeof ContributionItemSchema> = {
    name: "",
    amount: 0,
    contributors: []
}

export default function ContributionsItemsList({
    members
}: ContributionsItemsListProps) {
    const form = useFormContext<z.infer<typeof CreateContributionSchema>>()

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'contributionItems'
    })

    const handleAppend = () => {
        append(DEFAULT_CONTRIBUTION_ITEMS)
    }

    const handleRemove = (value?: number) => {
        const index = value || fields.length - 1

        if (index >= 0) {
            remove(index)
        }
    }

    return (
        <div className="flex flex-col">
            <h2>Ambagan Breakdown</h2>
            <div className="flex flex-col">
                {
                    fields.length ? fields.map((item, index) => {
                        return (
                            <div key={item.id} className="flex">
                                <FormField
                                    control={form.control}
                                    name={`contributionItems.${index}.name`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`contributionItems.${index}.amount`}
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Amount</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />

                                <Controller
                                    control={form.control}
                                    name={`contributionItems.${index}.contributors`}
                                    render={({ field }) => {
                                        return (
                                            <div>
                                                <FormLabel>Contributors</FormLabel>
                                                <ContributorsSelect
                                                    options={members}
                                                    selected={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </div>
                                        )
                                    }}
                                />
                                <Button
                                    type='button'
                                    variant={"destructive"}
                                    onClick={() => handleRemove(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        )
                    }) : null
                }
                <Button
                    type='button'
                    variant={"outline"}
                    onClick={handleAppend}
                >
                    Add Ambagan
                </Button>
            </div>
        </div>
    )
}
