import { NextRequest, NextResponse } from "next/server";
import { validateRequestBody } from "../../lib/utils/validateRequestBody";
import prisma from "@/prisma/prisma";
import { updateGroupSchema } from "../../lib/schemas/groups";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    if (!id)
      return NextResponse.json(
        { error: "Group ID is required" },
        { status: 400 },
      );

    const group = await prisma.group.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        contributions: {
          select: {
            id: true,
            name: true,
            contributionItems: true,
          },
        },
      },
    });

    if (!group)
      return NextResponse.json({ error: "Group not found" }, { status: 404 });

    return NextResponse.json(group, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const requestBody = await request.json();

  const response = await validateRequestBody(updateGroupSchema, requestBody);

  if (response) return response;

  try {
    if (!id)
      return NextResponse.json(
        { error: "Group ID is required" },
        { status: 400 },
      );

    const group = await prisma.group.findUnique({
      where: { id: parseInt(id) },
    });

    if (!group)
      return NextResponse.json({ error: "Group not found" }, { status: 404 });

    const updatedGroup = await prisma.group.update({
      where: { id: parseInt(id) },
      data: {
        name: requestBody.name,
        icon: requestBody.icon,
      },
    });

    return NextResponse.json(updatedGroup, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
