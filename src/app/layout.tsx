import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/LocalFont";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "پرشین بلاگ",
  description: "وبلاگ فارسی پرشین بلاگ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="light">
      <body className={`${vazirFont.variable} min-h-screen`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
