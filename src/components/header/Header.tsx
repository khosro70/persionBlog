"use client";

import NavLink from "./NavLink";
import ThemeToggle from "../../theme/theme-toggle";
import { useAuth } from "@/context/AuthContext";

type NavLinkType = {
  id: number;
  children: string;
  path: string;
};

const navLinks: NavLinkType[] = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  // برای افزودن احراز هویت در آینده
  const { user, isLoading } = useAuth();
  console.log("isLoading", isLoading);
  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-xs opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center justify-between py-2 text-secondary-400">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink path={navLink.path}>{navLink.children}</NavLink>
              </li>
            ))}
          </div>
          <div className="flex gap-6 justify-center items-center">
            <li>
              {user ? (
                <NavLink path="/profile">پروفایل</NavLink>
              ) : (
                <NavLink path="/signin">ورود</NavLink>
              )}
            </li>
            <li>
              <ThemeToggle />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
