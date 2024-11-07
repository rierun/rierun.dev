import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const reqText = await req.text();

    console.log("Refetching blog data");
    revalidatePath("/blog");

    const reqJson = JSON.parse(reqText);
    if (reqJson.post) {
      console.log(`Refetching blog post ${reqJson.post.ID}`);
      revalidatePath(`/blog/${reqJson.post.ID}`);
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { code: 500, message: "Internal Server Error" },
      { status: 500 },
    );
  }
  return NextResponse.json({ code: 200, message: "Success" }, { status: 200 });
}
