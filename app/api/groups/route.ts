import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const groups = await prisma.group.findMany({
      select: {
        id: true,
        icon: true,
        name: true,
      }
    })

    return NextResponse.json(groups, {
      status: 200
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json("Internal server error", {
      status: 500
    })
  }
}

export async function POST(request: Request) {
  try {
    const group = await prisma.group.create({
      data: {
        name: "Foo",
        icon: "",
      }
    })

    return NextResponse.json(group, {
      status: 201
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json("Internal server error", {
      status: 500
    })
  }
}