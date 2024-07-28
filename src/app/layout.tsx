import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";

const NotoSansJP = Noto_Sans_JP({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
