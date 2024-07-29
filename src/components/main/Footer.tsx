import { M_PLUS_1p } from "next/font/google";
import Link from "next/link";

const MPlus1p = M_PLUS_1p({ weight: ["400", "700"], subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={"bg-[#5E838E] text-white " + MPlus1p.className}>
      <div className="h-full flex flex-row justify-center md:justify-between items-center px-5 md:px-12 py-5">
        <div className="text-6xl font-bold">
          rierun<span className="text-5xl text-[#344449]">.dev</span>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/tools">Tools</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-1xl text-center pb-2">
          © 2024 rierun.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
