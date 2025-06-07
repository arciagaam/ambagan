import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaPlus, FaUserFriends, FaHistory } from 'react-icons/fa'

type ActionButtonProps = {
  icon: React.ReactNode
  label: string
  href?: string
  isDashed?: boolean
}

const ActionButton = ({ icon, label, href, isDashed = false }: ActionButtonProps) => {
  const buttonContent = (
    <Button 
      variant="outline" 
      className={`flex bg-primary flex-col h-20 w-24 gap-1 rounded-2xl ${isDashed ? 'border-dashed' : ''}`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}

export default function QuickActions() {
  return (
    <div className="flex gap-3 overflow-x-auto pt-3 items-center justify-center">
      <ActionButton 
        icon={<FaPlus size={16} />}
        label="New Group"
        href="/group/create"
        isDashed
      />
      <ActionButton 
        icon={<FaUserFriends size={16} />}
        label="Join Group"
        href="/group/join"
      />
      <ActionButton 
        icon={<FaHistory size={16} />}
        label="History"
      />
    </div>
  )
}