"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement; // تبدیل به HTMLFormElement
    const search = form.search as HTMLInputElement;
    const searchValue = search?.value;
    const newParams = new URLSearchParams(searchParams.toString());
    // رو تشکلیل می دیم که بتونیم کوئری به کوئری ها اضافه یا کم کنیم و در نهایت چیزی که می مونه رو بچسبونیم به پس-نیم newParams
    newParams.set("page", "1");
    if (searchValue) {
      newParams.set("search", searchValue); // می تونه هر چیز دیگه ای باشه search نامی که اینجا دادم به اسم
    } else {
      // ولی بک اند گفته با این کلید بفرست سمت من مقدار سرچ رو
      // می گم اگه چیزی تایپ شده بود اون رو اضافه کن به سرچ پرامز وگرنه اون رو حذف کن تا یه مقدار خالی ست نشه
      newParams.delete("search");
    }
    router.push(`${pathName}?${newParams}`, { scroll: false });
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="py-3 text-xs textField__input bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute top-0 left-0 flex items-center h-full ml-3"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
