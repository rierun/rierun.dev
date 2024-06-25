import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const NotoSansJP = Noto_Sans_JP({subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "rierun.dev",
  description: "This domain is currently in the process of creating a site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  );
}
