import React from 'react'
import { FaReceipt, FaUserFriends } from 'react-icons/fa'

type StatItemProps = {
  icon: React.ReactNode
  value: string | number
  label: string
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className="flex flex-col items-center">
    <div className="bg-secondary/20 p-2 rounded-full mb-1">
      {icon}
    </div>
    <p className="text-xs font-medium">{value}</p>
    <p className="text-xs">{label}</p>
  </div>
)

type StatsProps = {
  groupCount: number
}

export default function StatsSection({ groupCount }: StatsProps) {
  return (
    <div className="grid grid-cols-2 items-start pt-6 pb-2">
      <StatItem 
        icon={<FaReceipt size={18} />}
        value="12"
        label="Bills"
      />
      <StatItem 
        icon={<FaUserFriends size={18} />}
        value={groupCount}
        label="Groups"
      />
    </div>
  )
}