async function getBlogRes(id: string) {
  if (!process.env.WPGRAPHQL_URL || !process.env.WPGRAPHQL_TOKEN) {
    throw new Error("Environment variables not set");
  }

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

export async function getBlogData(blogId: string) {
  try {
    const res = await getBlogRes(blogId);

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

    if (!json.data.post) {
      console.error("Post not found", json);

      return { code: 404, message: "Post not found" };
    }

    const data = json.data.post as postData;

    return { code: 200, message: "Success", data };
  } catch (e) {
    console.error("Failed to fetch data", e);
    return { code: 500, message: "Failed to fetch data" };
  }
}
