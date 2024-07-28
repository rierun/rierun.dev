import Link from "next/link";
import Footer from "./Footer";
import React from "react";
import { M_PLUS_1p } from "next/font/google";

const MPlus1p = M_PLUS_1p({ weight: ["400", "700"], subsets: ["latin"] });

export default function MainPage({
  children,
  title,
  breadcrumbs,
}: Readonly<{
  children: React.ReactNode;
  title?: string | undefined;
  breadcrumbs?: BreadcrumbTrail[] | undefined;
}>) {
  return (
    <>
      <main className="min-h-screen">
        <div
          className={
            MPlus1p.className +
            " " +
            "h-72 bg-[#5E838E] text-7xl font-bold text-white flex flex-col justify-center pl-28"
          }
        >
          <h1>{title}</h1>
        </div>
        <div className="bg-gray-200 py-2 pl-28">
          {breadcrumbs && (
            <div className="flex flex-row gap-2 items-center text-xl text-gray-600">
              {breadcrumbs.map(
                (breadcrumb, index) =>
                  breadcrumb && (
                    <React.Fragment key={index}>
                      <div>
                        <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                      </div>

                      <div className="text-[15px] ">
                        {index < breadcrumbs.length - 1 && " > "}
                      </div>
                    </React.Fragment>
                  ),
              )}
            </div>
          )}
        </div>
        <div className="text-2xl px-28 pt-5">{children}</div>
      </main>
      <Footer />
    </>
  );
}
