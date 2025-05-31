import prisma from "@/prisma/prisma";
import { CreateContributionSchema } from "@/schemas/ContributionSchema";
import { getAuthUser } from "@/utils/auth";
import { notFound, unauthorized } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type POST = {
  params: Promise<{
    id: string
  }>
}

// FIX: `apiHandler` does not support context as second parameter,
// returning undefined values instead of the proper values.
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await req.json() as z.infer<typeof CreateContributionSchema>
  const user = await getAuthUser()
  const { id } = await params

  if (!user) return unauthorized()
  if (!id) return notFound()

  const contribution = await prisma.contribution.create({
    data: {
      name: body.name,
      ownerId: user.id,
      groupId: id,
      ContributionItem: {
        createMany: {
          data: body.contributionItems.map((item) => {
            return {
              name: item.name,
              amount: item.amount
            }
          })
        }
      }
    },
  })

  return NextResponse.json({ data: contribution }, { status: 201 })
}
