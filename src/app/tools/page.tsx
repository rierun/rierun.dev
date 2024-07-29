import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "りえるんについて!",
};

export default function Page() {
  const breadcrumbTrail: BreadcrumbTrail[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tools",
      href: "/tools",
    },
  ];

  return (
    <MainPage breadcrumbs={breadcrumbTrail} title="Tools">
      <div>WIP</div>
    </MainPage>
  );
}
