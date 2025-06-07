'use client'

import React from 'react'
import { FormControl } from './ui/form'
import { Input } from './ui/input'
import { FieldError } from 'react-hook-form'


interface AmbaganInputProps extends React.ComponentProps<"input"> {
    hasError?: FieldError
    icon?: React.ReactNode | null
    inputClass?: string
    containerClass?: string
}

const AmbaganInput = ({ hasError, icon, inputClass, containerClass, value, ...props }: AmbaganInputProps) => {
    return (
        <div className={`flex items-center gap-2 mb-2 p-2 rounded-2xl transition-all ${containerClass} ${hasError
            ? "border border-destructive"
            : value
                ? "border border-green-500"
                : "border border-border"
            }`}>
            {icon && (
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div className="flex-1">
                <FormControl>
                    <Input
                        value={value}
                        className={`placeholder:text-fun-gray text-base border-none shadow-none focus-visible:ring-0 px-0 h-auto py-0 bg-transparent ${inputClass}`}
                        {...props}
                    />
                </FormControl>
            </div>
        </div>
    )
}

export default AmbaganInput