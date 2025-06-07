import prisma from "@/prisma/prisma";
import { CreateContributionSchema } from "@/schemas/ContributionSchema";
import { getAuthUser } from "@/utils/auth";
import { Decimal } from "@prisma/client/runtime/library";
import { notFound, unauthorized } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type POST = {
  params: Promise<{
    groupId: string
  }>
}

// FIX: `apiHandler` does not support context as second parameter,
// returning undefined values instead of the proper values.
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ groupId: string }> }
) {
  const body = (await req.json()) as z.infer<typeof CreateContributionSchema>;
  const user = await getAuthUser();
  const { groupId } = await params;

  if (!user) return unauthorized();
  if (!groupId) return notFound();

  try {
    const result = await prisma.$transaction(async (tx) => {
      const contribution = await tx.contribution.create({
        data: {
          name: body.name,
          ownerId: user.id,
          groupId: groupId,
          currency: body.currency,
          ContributionItem: {
            create: body.contributionItems.map((item) => ({
              name: item.name,
              amount: item.amount,
              Contributor: {
                createMany: {
                  data: item.contributors.map((contributor) => ({
                    userId: contributor.id,
                    amount: contributor.amount,
                  })),
                },
              },
            })),
          },
        },
        include: {
          ContributionItem: {
            include: {
              Contributor: {
                select: {
                  contributionItemId: true,
                  userId: true,
                  amount: true,
                },
              },
            },
          },
        },
      });

      return contribution;
    });

    console.log(result);

    return NextResponse.json({ data: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating contribution:", error);
    // You might want to return a more specific error response here
    return NextResponse.json(
      { error: "Failed to create contribution" },
      { status: 500 }
    );
  }
}
