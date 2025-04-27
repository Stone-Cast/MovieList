"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const links = [
    { href: "/recent", label: "Recently Watched" },
    { href: "/profile", label: "Profile" },
  ];
  return (
    <header className="flex justify-between gap-5 p-2 bg-amber-50">
      <Link href="/" className="text-lg md:text-2xl lg:text-3xl">
        MovieList
      </Link>

      <ul className="flex flex-row items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "text-base",
              pathname === `${link.href}` && "font-bold underline"
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
