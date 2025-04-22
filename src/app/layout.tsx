import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/LocalFont";
import Header from "@/components/header/Header";
import ThemeProvider from "@/theme/ThemeProvider";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "@/context/AuthContext";

export const metadata: Metadata = {
  title: {
    template: "پرشین بلاگ | %s",
    default: "پرشین بلاگ",
  },
  description: "وبلاگ فارسی پرشین بلاگ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="light" suppressHydrationWarning>
      <body className={`${vazirFont.variable} min-h-screen`}>
        <AuthContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="container xl:max-w-screen-xl">{children}</div>
          </ThemeProvider>
          <Toaster />
        </AuthContextProvider>
      </body>
    </html>
  );
}
