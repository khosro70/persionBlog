import { PostType } from "@/types/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "بلاگ ها",
};

export default async function Blogs() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_BUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return (
    <div className="">
      {posts?.map((item: PostType) => (
        <h1 key={item._id}>{item.title}</h1>
      ))}
    </div>
  );
}
