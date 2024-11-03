import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json("Get", { status: 200 })
}

export async function PUT(request: Request) { 
  return NextResponse.json("Put", { status: 200 })
}
