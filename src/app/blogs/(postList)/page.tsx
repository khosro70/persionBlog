import { Metadata } from "next";
import PostList from "../_components/PostList";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

export const metadata: Metadata = {
  title: "بلاگ ها",
};

export default async function Blogs() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </>
  );
}
