import { Metadata, NextPage } from "next";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnRequest";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

export const metadata: Metadata = {
  title: "بلاگ ها",
};

type Props = {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Blogs: NextPage<Props> = async ({ searchParams }) => {
  const SearchParams = await searchParams;
  const queries = queryString.stringify(SearchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  const { search } = await searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${posts.length} نتیجه برای ${search}`}
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
};

export default Blogs;
