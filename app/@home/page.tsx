import React from 'react'
import { getUserGroups } from './actions'
import GroupsGrid from './_components/GroupsGrid'
import NoGroups from './_components/NoGroups'

export default async function Home() {

  const res = await getUserGroups()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {(res?.groups && res?.groups.length > 0) ? <GroupsGrid groups={res.groups} /> : <NoGroups />}
    </div>
  )
}
