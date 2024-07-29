import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page",
  description: "This is a test page!",
};
// 踊ってない夜は知らない~
export default function Page() {
  const breadcrumbTrail: BreadcrumbTrail[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Test",
      href: "/test",
    },
    {
      name: "Test",
      href: "/test",
    },
    {
      name: "Test",
      href: "/test",
    },
    {
      name: "Test",
      href: "/test",
    },
  ];

  return (
    <MainPage breadcrumbs={breadcrumbTrail} title="Test Page">
      <div>
        This is a test page!
        <br />
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
      </div>
    </MainPage>
  );
}
