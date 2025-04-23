import { PostType } from "@/types/blogs";
import React from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnRequest";

async function PostList() {
  // await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div className="grid grid-cols-12 gap-8">
      {posts?.map((post: PostType) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
          key={post._id}
        >
          <CoverImage {...post} />
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>
            {/* post author readingTime */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post?.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 ml-1 stroke-secondary-500" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            {/* blog interactioin */}
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
