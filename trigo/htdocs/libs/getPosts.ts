import { client } from "./apiClient";

export async function getPosts() {
  const response = await client.get({ endpoint: "news" });
  return response.contents;
}

export async function getPost(id: string) {
  const response = await client.get({ endpoint: "news", contentId: id });
  return response;
}

export async function getBreadData() {
  const response = await client.get({ endpoint: "bread" });
  return response.contents;
}
