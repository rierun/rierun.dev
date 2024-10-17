import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "ぶろぐ!",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  const breadcrumbTrail: BreadcrumbTrail[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <MainPage breadcrumbs={breadcrumbTrail} title="Blog">
      <div>WIP</div>
    </MainPage>
  );
}
