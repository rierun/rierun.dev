import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム | rierun.dev",
  description: "りえるんのサイト！",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <main className="h-[calc(100vh_-_110px)] px-3 pb-5 text-white">
      <div className="h-full flex justify-end items-end bg-[#5E838E] rounded-3xl pb-5 pr-9">
        <div className="flex flex-col text-right">
          <div className="text-4xl md:text-5xl">
            <p>rierun</p>
          </div>
          <div>
            <h1 className="font-bold text-6xl md:text-9xl">りえるん</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
