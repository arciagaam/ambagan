'use client'

import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { FormControl } from './ui/form'
import { Input } from './ui/input'
import { FieldError } from 'react-hook-form'


interface AmbaganInputProps extends React.ComponentProps<"input"> {
    hasError?: FieldError
    icon?: React.ReactNode | null
    inputClass?: string
    containerClass?: string
}

const AmbaganInput = ({ hasError, icon = <FaUsers />, inputClass, containerClass, value, ...props }: AmbaganInputProps) => {
    return (
        <div className={`flex items-center gap-2 mb-2 p-3 rounded-lg transition-all ${containerClass} ${hasError
            ? "border-2 border-destructive"
            : value
                ? "border-2 border-green-500"
                : "border border-border"
            }`}>
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-1">
                <FormControl>
                    <Input
                        value={value}
                        className={`placeholder:text-fun-gray text-lg border-none shadow-none focus-visible:ring-0 px-0 h-auto py-1 bg-transparent ${inputClass}`}
                        {...props}
                    />
                </FormControl>
            </div>
        </div>
    )
}

export default AmbaganInput