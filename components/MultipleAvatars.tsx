import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type AvatarProps = {
    id: string;
    src?: string;
    alt: string;
    name: string
}

type MultipleAvatarProps = {
    avatars: AvatarProps[]
}

export default function MultipleAvatars({ avatars }: MultipleAvatarProps) {
    const avatarCount: number = avatars?.length;
    const avatarLimit: number = 4;

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
                    <AvatarImage src={avatars[index].src} alt={avatars[index].alt} />
                    <AvatarFallback className='text-xs'>{getFirstLetter(avatars[index].name)}</AvatarFallback>
                </Avatar>
            );
        }
        return null;
    });

    return (
        <div className='flex -space-x-2'>
            {displayedAvatars.length && displayedAvatars}
            {avatarCount >= avatarLimit &&
                <Avatar className='shadow relative'>
                    <AvatarFallback>{`+${avatarCount - avatarLimit}`}</AvatarFallback>
                </Avatar>}
        </div>

    )
}
