import { NextResponse } from "next/server";

async function getBlogListRes() {
  const res = await fetch(process.env.WPGRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WPGRAPHQL_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
{
  posts {
    nodes {
      id
      title
      date
      tags {
        nodes {
          id
          name
        }
      }
    }
  }
}
`,
    }),
  });
  return res;
}

export async function GET(req: Request) {
  const res = await getBlogListRes();

  if (!res.ok) {
    console.error("Failed to fetch data", await res.json());
    return NextResponse.json(
      { code: res.status, message: "Failed to fetch data" },
      { status: res.status },
    );
    if (res.status !== 403) {
    }
  }

  const json = await res.json();

  console.log(json);

  const data = json.data.posts.nodes;

  return NextResponse.json(
    { code: 200, message: "Success", data },
    { status: 200 },
  );
}
