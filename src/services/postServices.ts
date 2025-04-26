import http from "./httpService";

export type optionsType = {
  method: string;
  credentials: RequestCredentials;
  headers: {
    Cookie: string;
  };
  cache?: RequestCache;
};

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const post = await data?.post;
  return post;
}

export async function getPosts(queries?: string, options?: optionsType) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    {
      ...options,
      cache: "no-store",
    }
  );
  const {
    data: { posts },
  } = await res.json();

  return posts;
}

export async function likePostApi(postId: string) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookMarkPostApi(postId: string) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
