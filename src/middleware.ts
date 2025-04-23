import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

// This function can be marked `async` if using `await` inside
async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/profile")) {
    // این جا می گم اگه پس-نیم با پروفایل شروع شده باشه بیا یه تابع رو اجرا کن
    // اول کوکی های رو می گیرم و ست می کنم روی درخواست بعد یه درخواست می دم تا
    // ببینم که یوزر وجود داره یا نه که اگه وجود نداشت بفرستم یه صفحه دیگه
    // کوکی ها رو می گیرم. حالا از فچ استفاده می کنم چون اکسیوس جواب نمی ده
    const user = await middlewareAuth(request);
    if (!user?._id) {
      return NextResponse.redirect(new URL(`/signin`, request.nextUrl));
    } // signin الان اگه کاربر نباشه اون رو می فرسته به
  }

  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middlewareAuth(request);
    if (user?._id) {
      return NextResponse.redirect(new URL(`/`, request.nextUrl));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};

export default middleware;
