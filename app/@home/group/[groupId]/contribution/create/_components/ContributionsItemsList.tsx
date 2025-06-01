import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ContributionItemSchema, CreateContributionSchema } from '@/schemas/ContributionSchema'
import React from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Member } from '../types'
import { Button } from '@/components/ui/button'
import { ContributorsSelect } from './ContributorsSelect'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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

    const formValue = form.watch();

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Ambagan Breakdown</h2>
            <div className='flex flex-col gap-4'>
                {
                    fields.length ? fields.map((item, index) => {
                        const contributionItem = formValue.contributionItems[index];
                        return (
                            <Drawer key={item.id}>
                                <DrawerTrigger asChild>
                                    <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-medium">{contributionItem.name || 'Unnamed Ambagan'}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Amount: ₱{contributionItem.amount || 0}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Contributors: {contributionItem.contributors?.length || 0}
                                                    </p>
                                                </div>
                                                <Button
                                                    type='button'
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemove(index);
                                                    }}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
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
                                    </DrawerHeader>
                                    <div className="p-4 space-y-4">


                                        <FormField
                                            control={form.control}
                                            name={`contributionItems.${index}.amount`}
                                            render={({ field }) => {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>Payable Amount</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )
                                            }}
                                        />

                                        <hr className='my-10'/>

                                        <Controller
                                            control={form.control}
                                            name={`contributionItems.${index}.contributors`}
                                            render={({ field }) => {
                                                return (
                                                    <div className="space-y-4">
                                                        <FormLabel>Select Contributors</FormLabel>
                                                        <ContributorsSelect
                                                            options={members}
                                                            selected={field.value}
                                                            onChange={field.onChange}
                                                        />

                                                        {field.value.length > 0 && (
                                                            <div className="mt-6 space-y-3">
                                                                {field.value.map((contributor, contributorIndex) => {
                                                                    const member = members.find(m => m.id === contributor.id);
                                                                    const memberName = member ?
                                                                        `${member.first_name || ''} ${member.last_name || ''}`.trim() : 'N/A';
                                                                    return (
                                                                        <div key={contributor.id} className="flex gap-2">

                                                                            <div className="flex gap-2 flex-1">
                                                                                <div className="size-6 rounded-full bg-primary"></div>
                                                                                <p>
                                                                                    {memberName}
                                                                                </p>
                                                                            </div>
                                                                            <FormField
                                                                                control={form.control}
                                                                                name={`contributionItems.${index}.contributors.${contributorIndex}.amount`}
                                                                                render={({ field: amountField }) => (
                                                                                    <FormItem>
                                                                                        <FormLabel>Amount</FormLabel>
                                                                                        <FormControl>
                                                                                            <Input
                                                                                                {...amountField}
                                                                                                type="number"
                                                                                                placeholder="Amount"
                                                                                                className="w-full"
                                                                                            />
                                                                                        </FormControl>
                                                                                    </FormItem>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            }}
                                        />


                                    </div>
                                </DrawerContent>
                            </Drawer>
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
