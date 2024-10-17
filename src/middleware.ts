import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function authMiddleware(request: NextRequest) {
  const auth = request.headers.get("authorization");

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = auth?.replace("Bearer ", "");
  if (token !== process.env.SITE_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export function middleware(request: NextRequest) {
  authMiddleware(request);
}

export const config = {};
