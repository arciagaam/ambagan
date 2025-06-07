import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from '@prisma/client'


type MultipleAvatarProps = {
    avatars: User[]
}

export default function MultipleAvatars({ avatars }: MultipleAvatarProps) {
    const avatarCount: number = avatars?.length;
    const avatarLimit: number = 3; // Changed from 4 to 3

    const getFirstLetter = (name: string): string => {
        if (!name) return ''

        const trimmedName = name.trim()
        const firstLetter = trimmedName.charAt(0).toUpperCase();
        
        return firstLetter;
    }

    const displayedAvatars: (React.JSX.Element | null)[] = new Array(avatarLimit).fill(null).map((_, index) => {
        if (index < avatarCount) {
            return (
                <Avatar key={index} className='shadow relative'>
                    <AvatarFallback className='text-xs'>{getFirstLetter(avatars[index].first_name || '')}</AvatarFallback>
                </Avatar>
            );
        }
        return null;
    });

    return (
        <div className='flex -space-x-2'>
            {displayedAvatars.length && displayedAvatars}
            {avatarCount > avatarLimit && // Changed from >= to >
                <Avatar className='shadow relative'>
                    <AvatarFallback>{`+${avatarCount - avatarLimit}`}</AvatarFallback>
                </Avatar>}
        </div>

    )
}