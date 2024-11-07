import Link from "next/link";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className={"font-m-plus h-[110px]"}>
      <div className="h-full flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-12 pb-2 md:pb-0">
        <div className="text-6xl text-[#323232] px-2 py-1 font-bold transition-all duration-500 rounded-sm hover:text-[#4b4d67]">
          <Link href="/">
            rierun
            <span className="text-5xl text-[#5e838e]">.dev</span>
          </Link>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
