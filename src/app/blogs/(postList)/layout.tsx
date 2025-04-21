import { Suspense } from "react";
import CategoryLists from "../_components/CategoryLists";
import Spinner from "@/components/Spinner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="grid items-center grid-cols-1 gap-8 mb-12 lg:grid-cols-3 text-secondary-700">
        <h1 className="text-lg font-bold ">لیست بلاگ ها</h1>
        {/* <Search /> */}
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-4 lg:col-span-4 xl:col-span-3 text-secondary-500">
          <Suspense fallback={<Spinner />}>
            <CategoryLists />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}
