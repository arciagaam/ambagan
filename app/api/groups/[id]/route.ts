import { NextRequest, NextResponse } from "next/server";
import { validateRequestBody } from "../../lib/utils/validateRequestBody";
import prisma from "@/prisma/prisma";
import { updateGroupSchema } from "../../lib/schemas/groups";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    if (!params.id)
      return NextResponse.json(
        { error: "Group ID is required" },
        { status: 400 },
      );

    const group = await prisma.group.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        icon: true,
        name: true,
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
  { params }: { params: { id: number } },
) {
  const requestBody = await request.json();

  const response = await validateRequestBody(updateGroupSchema, requestBody);

  if (response) return response;

  try {
    if (!params.id)
      return NextResponse.json(
        { error: "Group ID is required" },
        { status: 400 },
      );

    const group = await prisma.group.findUnique({
      where: { id: params.id },
    });

    if (!group)
      return NextResponse.json({ error: "Group not found" }, { status: 404 });

    const updatedGroup = await prisma.group.update({
      where: { id: params.id },
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
