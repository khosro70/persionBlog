/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import toast from "react-hot-toast";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookMarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
// import { bookMarkPostApi, likePostApi } from "services/postServices";
import { PostInteractionType } from "types/blogs";
import { toPersianDigits } from "utils/numberFormatter";
import { useRouter } from "next/navigation";
import ButtonIcon from "@/components/ButtonIcon";

const PostInteraction: React.FC<PostInteractionType> = ({ post }) => {
  const router = useRouter();

  // const likeHandler = async (postId: string) => {
  //   try {
  //     const { message } = await likePostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  // const bookMarkHandler = async (postId: string) => {
  //   try {
  //     const { message } = await bookMarkPostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post?.commentsCount)}</span>
      </ButtonIcon>
      {/* <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}> */}
      <ButtonIcon variant="red" onClick={() => console.log("first")}>
        {post?.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      {/* <ButtonIcon variant="primary" onClick={() => bookMarkHandler(post._id)}> */}
      <ButtonIcon variant="primary" onClick={() => console.log("first")}>
        {post?.isBookmarked ? <SolidBookMarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;
