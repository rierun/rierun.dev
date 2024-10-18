import { NextResponse } from "next/server";

async function getBlogRes(id: string) {
  const res = await fetch(process.env.WPGRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WPGRAPHQL_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
 {
    post(id: "${id}") {
    id
    title
    content
    date
    author {
      node {
        id
        nicename
      }
    }
    tags {
      nodes {
        id
        name
      }
    }
  }
}
`,
    }),
  });
  return res;
}

export async function GET(req: Request, content: { params: { id: string } }) {
  const { id } = content.params;

  const res = await getBlogRes(id);

  if (!res.ok) {
    console.error("Failed to fetch data", res);
    return NextResponse.json(
      { code: res.status, message: "Failed to fetch data" },
      { status: res.status },
    );
  }

  const json = await res.json();

  if (!json.data.post) {
    console.error("Post not found", json);

    return NextResponse.json(
      { code: 404, message: "Post not found" },
      { status: 404 },
    );
  }

  const data = json.data.post;

  return NextResponse.json(
    { code: 200, message: "Success", data },
    { status: 200 },
  );
}
