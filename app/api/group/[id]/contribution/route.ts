import { apiHandler } from "@/lib/apiHandler";
import prisma from "@/prisma/prisma";
import { CreateContributionSchema } from "@/schemas/ContributionSchema";
import { getAuthUser } from "@/utils/auth";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = apiHandler(async (
  req: Request,
  context, // FIX: Unable to get context due to the position of the routes...
) => {
  const body = await req.json() as z.infer<typeof CreateContributionSchema>
  const user = await getAuthUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized User' }, { status: 401 })
  }

  // const contribution = await prisma.contribution.create({
  //   data: {
  //     name: body.name,
  //     ownerId: user.id,
  //   },
  // })

  const contribution = {}

  return NextResponse.json({ data: contribution }, { status: 201 })
})
