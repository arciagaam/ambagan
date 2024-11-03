import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validateRequestBody } from "../lib/utils/validateRequestBody";
import { createGroupSchema } from "../lib/schemas/groups";

export async function GET() {
  try {
    const groups = await prisma.group.findMany({
      select: {
        id: true,
        icon: true,
        name: true,
      },
    });

    return NextResponse.json(groups, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    const response = await validateRequestBody(createGroupSchema, requestBody);

    if (response) return response;

    const group = await prisma.group.create({
      data: {
        name: requestBody.name,
        icon: requestBody.icon,
      },
    });

    return NextResponse.json(group, {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
