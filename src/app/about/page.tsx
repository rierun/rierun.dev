import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "りえるんについて!",
};

export default function Page() {
  const breadcrumbTrail: BreadcrumbTrail[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <MainPage title="About">
      <div>WIP</div>
    </MainPage>
  );
}
