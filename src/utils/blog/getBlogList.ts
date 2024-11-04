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

export async function getBlogList() {
  try {
    const res = await getBlogListRes();

    if (!res.ok) {
      if (res.status !== 403) {
        console.error(
          "Failed to fetch data status: " + res.status,
          await res.json(),
        );
        return { code: res.status, message: "Failed to fetch data" };
      }
    }

    const json = await res.json();

    const data = json.data.posts.nodes as postList;

    return { code: 200, message: "Success", data };
  } catch (e) {
    console.error(e);
    return { code: 500, message: "Internal Server Error" };
  }
}
