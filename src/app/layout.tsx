import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main/Header";
import NextTopLoader from "nextjs-toploader";
import { MPlus2, NotoSansJP } from "@/utils/font";
import SmoothScroller from "@/components/lenis/smoothScroll";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://rierun.dev"),
  title: {
    template: "%s | rierun.dev",
    default: "rierun.dev",
  },
  description: "りえるんのサイト！",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://rierun.dev",
    title: "rierun.dev",
    description: "りえるんのサイト！",
    siteName: "rierun.dev",
    images: [
      {
        url: "https://rierun.dev/og/dfog.png",
        width: 1200,
        height: 675,
        alt: "rierun.dev",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${MPlus2.variable}`}>
        <NextTopLoader color="#5e838e" />
        <Suspense>
          <SmoothScroller />
        </Suspense>
        <Header />
        {children}
      </body>
    </html>
  );
}
