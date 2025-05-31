import React from 'react'
import prisma from '@/prisma/prisma'
import { notFound } from 'next/navigation'
import ContributionItemCard from './_components/ContributionItemCard'

type PageProps = {
  params: Promise<{
    groupId: string
    contributionId: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { groupId, contributionId } = await params
  const id = Number(contributionId)

  if (isNaN(id)) return notFound()

  const contribution = await prisma.contribution.findUnique({
    where: {
      id,
      groupId: groupId
    },
    include: {
      ContributionItem: {
        include: {
          Contributor: {
            include: {
              User: true,
            }
          }
        }
      }
    }
  })

  if (!contribution) return notFound()

  // Handler stubs to be implemented later
  function handleEditContributionAmount(itemId: number) {
    // TODO: Implement edit contribution amount logic
  }
  function handleEditContributor(userId: number, itemId: number) {
    // TODO: Implement edit contributor logic
  }
  function handleRemoveContributor(userId: number, itemId: number) {
    // TODO: Implement remove contributor logic
  }
  function handleAddContributor(itemId: number) {
    // TODO: Implement add contributor logic
  }
  function handleAddItem() {
    // TODO: Implement add item logic
  }

  return (
    <div className="flex flex-col gap-6 p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{contribution.name}</h1>
      {
        contribution.ContributionItem && contribution.ContributionItem.length ? (
          contribution.ContributionItem.map((item) => (
            <ContributionItemCard
              key={item.id}
              item={item}
              onEditAmount={handleEditContributionAmount}
              onEditContributor={handleEditContributor}
              onRemoveContributor={handleRemoveContributor}
              onAddContributor={handleAddContributor}
            />
          ))
        ) : (
          <p className="text-gray-400 italic">No items. <button className="text-blue-500 hover:underline" onClick={handleAddItem}>Add Item</button></p>
        )
      }
    </div >
  )
}
