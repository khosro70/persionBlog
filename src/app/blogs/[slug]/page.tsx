import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";
import { getPostBySlug, getPosts } from "@/services/postServices";
import { PostType } from "@/types/blogs";
import RelatedPost from "../_components/RelatedPost";

// برای isr کردن صفحات
export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: Props): // parent: ResolvingMetadata
Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: PostType) => ({
    slug: post.slug,
  }));
}

async function SinglePost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-screen-md mx-auto text-secondary-600">
      <h1 className="mb-8 text-2xl font-bold text-secondary-700">
        {post?.title}
      </h1>
      <p className="mb-4">{post?.briefText}</p>
      <p className="mb-8">{post?.text}</p>
      <div className="relative mb-10 overflow-hidden rounded-lg h-60">
        <Image
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110"
          fill
          src={post?.coverImageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="postImage"
          priority
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      {/* <BlogComments post={post} /> */}
    </div>
  );
}

export default SinglePost;
