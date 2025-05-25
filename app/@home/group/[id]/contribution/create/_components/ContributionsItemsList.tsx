import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ContributionItemSchema, CreateContributionSchema } from '@/schemas/ContributionSchema'
import React from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Member } from '../types'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
import { CheckIcon } from 'lucide-react'

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


type ContributorsSelect<T extends Member = Member, K = Pick<T, "id">> = {
    options: T[]
    selected: K[]
    onChange: (...event: any[]) => void
}

export const ContributorsSelect = ({
    options,
    selected,
    onChange,
}: ContributorsSelect) => {
    const toggleValue = (id: string) => {
        const isIncluded = selected.some((member) => member.id === id)
        if (isIncluded) {
            onChange(selected.filter((member) => member.id !== id))
        } else {
            onChange([
                ...selected, {
                    id,
                    amount: 0
                }
            ])
        }
    }

    const selectedOptions = options.filter((option) => selected.some((member) => option.id === member.id))

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                    {selected.length === 0
                        ? "Select Contributors"
                        : selectedOptions
                            .map(option => option.first_name)
                            .join(', ')
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[300px]">
                <Command>
                    <CommandList>
                        {options.map((option) => (
                            <CommandItem
                                key={option.id}
                                onSelect={() => toggleValue(option.id)}
                                className="flex items-center justify-between"
                            >
                                {option.first_name}
                                {selected.some((u) => u.id === option.id) && <CheckIcon className="w-4 h-4" />}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
