import fetch from "isomorphic-unfetch";

export default async function fetcher(key: string): Promise<object> {
  const res = await fetch(`https://api.themoviedb.org/3${key}`, {
    headers: {
      Authorization: `Bearer ${process.env.tmdbAPIKey}`,
      "Content-Type": "application/json;charset=utf-8"
    }
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}
