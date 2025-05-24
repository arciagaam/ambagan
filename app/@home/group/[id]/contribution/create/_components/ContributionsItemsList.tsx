import { FormControl, FormField, FormItem, FormLabel, FormMessage, useFormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CreateContributionSchema } from '@/schemas/ContributionSchema'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import ContributorsList from './ContributorsList'

export default function ContributionsItemsList() {
    const form = useFormContext<z.infer<typeof CreateContributionSchema>>()

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'contributionItems'
    })

    return (
        <div className="flex flex-col">
            <h2>Ambagan Breakdown</h2>

            <div className="flex flex-col">
                {
                    fields.map((item, index) => (
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <ContributorsList index={index}/>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
