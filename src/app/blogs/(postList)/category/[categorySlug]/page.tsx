import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnRequest";
import PostList from "app/blogs/_components/PostList";
import { NextPage } from "next";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

type Props = {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Category: NextPage<Props> = async ({ params, searchParams }) => {
  const { categorySlug } = await params;
  const SearchParams = await searchParams;
  const queries =
    queryString.stringify(SearchParams) + `&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts?.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Category;
