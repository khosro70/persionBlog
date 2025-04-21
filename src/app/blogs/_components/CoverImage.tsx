import { PostType } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage(post: PostType) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
      <Link href={`/blogs/${post.slug}`}>
        <Image
          src={`http://localhost:5000/${post.coverImage}`}
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          alt="postImage"
          quality={80}
          fill
        />
      </Link>
    </div>
  );
}

export default CoverImage;
