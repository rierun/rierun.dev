import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const dev = process.env.NODE_ENV !== "production";

function authMiddleware(request: NextRequest) {
  if (request.url.startsWith("/api")) {
    const auth = request.headers.get("authorization");

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = auth?.replace("Bearer ", "");
    if (token !== process.env.SITE_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }
  return NextResponse.next();
}

export function middleware(request: NextRequest) {
  authMiddleware(request);
}

export const config = {};
