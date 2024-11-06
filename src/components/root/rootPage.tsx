"use client";

import gsap from "gsap";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    gsap.to(".root-page-section", { autoAlpha: 1 });
  });

  return (
    <main className="h-[calc(100vh_-_110px)] px-3 pb-5 ">
      <section className="root-page-section h-full flex justify-end items-end bg-[#5E838E] rounded-3xl pb-5 pr-9 text-white">
        <div className="flex flex-col text-right">
          <div className="text-4xl md:text-5xl">
            <p>rierun</p>
          </div>
          <div>
            <h1 className="font-bold text-6xl md:text-9xl">りえるん</h1>
          </div>
        </div>
      </section>
      <section className="root-page-section mt-5">
        <div className="px-5 py-5 text-[#010101] bg-gray-100 rounded-xl flex flex-col gap-4">
          <h2 className="text-4xl font-bold">高校生です。なので、覚え放題。</h2>
          <p className="text-2xl">
            時間は有限です。その為限られた時間でしか覚えるしかありませんが、僕には時間がたくさんあります。
            <br />
            その時間を有効に使いいろんな言語やフレームワークなどを学んだのが僕の強みです。これからも新しい技術を学び続け、成長し続けたいと思っています。
          </p>
        </div>
      </section>
      <section className="root-page-section">
        <div>
          <h2>スキル</h2>
          {/* スライドでスキルを表示 */}
        </div>
      </section>
    </main>
  );
}
