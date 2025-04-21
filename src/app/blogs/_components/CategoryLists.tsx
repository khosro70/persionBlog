import { CategoryType } from "@/types/blogs";
import Link from "next/link";
import React from "react";

async function CategoryLists() {
  // await new Promise<void>((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_BUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href={`/blogs`}>همه</Link>
      {categories?.map((category: CategoryType) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryLists;
