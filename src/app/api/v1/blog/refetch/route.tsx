import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const reqJson = await req.json();
    const { id } = reqJson;

    console.log("Refetching blog post with id: ", id);
    revalidatePath("/blog");
    revalidatePath(`/blog/${id}`);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { code: 500, message: "Internal Server Error" },
      { status: 500 },
    );
  }
  return NextResponse.json({ code: 200, message: "Success" }, { status: 200 });
}
