export default async function fetchGraphQL(query: string) {
  const body = JSON.stringify({ query });
  const res = await fetch("https://api.example.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return res;
}
