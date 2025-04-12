"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string; // مسیر لینک
  children: React.ReactNode; // محتوای داخل لینک
};

function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary-900" : ""}`}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
