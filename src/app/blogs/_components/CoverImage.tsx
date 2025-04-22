import { PostType } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage(post: PostType) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="relative aspect-video rounded-md overflow-hidden mb-6">
        <Image
          src={`http://localhost:5000/${post.coverImage}`}
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          alt="postImage"
          quality={80}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
}

export default CoverImage;
