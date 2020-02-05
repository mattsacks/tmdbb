import fetch from "isomorphic-unfetch";

export default async function fetcher(key: string): Promise<object> {
  const res = await fetch(`https://api.themoviedb.org/3${key}`, {
    headers: {
      Authorization: `Bearer ${"ENV VAR"}`,
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  return await res.json();
}
