import { M_PLUS_1p } from "next/font/google";

const MPlus1p = M_PLUS_1p({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
  return (
    <header className={MPlus1p.className + " h-[110px]"}>
      <div className="h-full flex flex-row justify-center md:justify-normal items-center px-5 md:px-12">
        <div className="text-6xl text-[#323232] font-bold">
          rierun<span className="text-5xl text-[#5E838E]">.dev</span>
        </div>
        <div></div>
      </div>
    </header>
  );
}
