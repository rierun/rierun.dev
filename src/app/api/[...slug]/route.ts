import { NextResponse } from "next/server";

function notFound(req: Request) {
  return NextResponse.json(
    { code: 404, message: "Not Found" },
    { status: 404 },
  );
}

export function GET(req: Request) {
  return notFound(req);
}

export function POST(req: Request) {
  return notFound(req);
}

export function PUT(req: Request) {
  return notFound(req);
}

export function DELETE(req: Request) {
  return notFound(req);
}
