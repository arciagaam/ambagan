import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type AvatarProps = {
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

    const displayedAvatars: (React.JSX.Element | null)[] = new Array(4).fill(null).map((_, index) => {
        if (index < avatarCount) {
            return (
                <Avatar key={index} className='shadow relative'>
                    <AvatarImage src={avatars[index].src} alt={avatars[index].alt} />
                    <AvatarFallback>{avatars[index].name}</AvatarFallback>
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
