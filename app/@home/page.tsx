import React from 'react'
import { getUserGroups } from './actions'
import GroupsGrid from './_components/GroupsGrid'
import NoGroups from './_components/NoGroups'

export default async function Home() {

  const res = await getUserGroups()

  return (
    <div className="flex flex-col min-h-[100dvh] gap-4 p-4">
      <h1 className='text-lg font-bold'>My Groups</h1>
      {(res?.groups && res?.groups.length > 0) ? <GroupsGrid groups={res.groups} /> : <NoGroups />}
    </div>
  )
}
