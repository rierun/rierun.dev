import { NextResponse } from "next/server";

export function GET(req: Request) {
  return NextResponse.json({ code: 200, message: "Online" });
}
