export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_BUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const post = await data?.post;
  return post;
}

export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_BUBLIC_BASE_URL}/post/list`, {
    cache: "no-store",
  });
  const {
    data: { posts },
  } = await res.json();

  return posts;
}
