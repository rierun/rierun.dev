"use client";

import Link from "next/link";
import style from "./HeaderNav.module.css";
import { usePathname } from "next/navigation";

let navItems = [
  {
    name: "Home",
    href: "/",
    current: false,
  },
  {
    name: "About",
    href: "/about",
    current: false,
  },
  {
    name: "Tools",
    href: "/tools",
    current: false,
  },
  {
    name: "Blog",
    href: "/blog",
    current: false,
  },
];

export default function HeaderNav() {
  const pathname = usePathname();

  const firstPath = pathname.split("/")[1];

  navItems.map((navItem) => {
    if (navItem.href === `/${firstPath}`) {
      navItem.current = true;
    } else {
      navItem.current = false;
    }
  });

  return (
    <nav className="flex flex-row gap-4 font-normal md:font-bold text-2xl">
      {navItems.map((navItem, index) => (
        <div key={index}>
          <Link
            href={navItem.href}
            className={`${style.navLink} ${navItem.current ? style.wFull : ""}`}
          >
            {navItem.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
