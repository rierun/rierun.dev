import { M_PLUS_1p } from "next/font/google";
import Link from "next/link";

const MPlus1p = M_PLUS_1p({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
  let navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Tools",
      href: "/tools",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className={MPlus1p.className + " h-[110px]"}>
      <div className="h-full flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-12 pb-2 md:pb-0">
        <div className="text-6xl text-[#323232] px-2 py-1 font-bold transition-all duration-500 rounded-sm hover:text-[#4b4d67]">
          <Link href="/">
            rierun
            <span className="text-5xl text-[#5e838e]">.dev</span>
          </Link>
        </div>
        <div>
          <nav className="flex flex-row gap-4 font-normal md:font-bold text-2xl">
            {navItems.map((navItem, index) => (
              <div key={index}>
                <Link href={navItem.href}>{navItem.name}</Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
