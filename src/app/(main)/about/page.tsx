import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";
import Image1 from "@/assets/img/VRChat_2024-07-30_16-46-04.027_1920x1080.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "りえるんについて!",
  alternates: {
    canonical: "/about",
  },
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
      <div className="font-m-plus">
        <div className="flex flex-col xl:flex-row md:h-96 gap-5 xl:gap-0">
          <div className="w-full">
            <span className="text-2xl">高校生</span>
            <h2 className="text-4xl md:text-8xl font-bold text-nowrap pr-5">
              霜月 りえるん
            </h2>
            <p className="mt-5">
              すきかってにのんびりしている高校生です! <br />
              このサイトには、自分が作ったガラクタを置いたり、
              <br />
              ブログなどを更新したいと思っています!
            </p>
          </div>
          <div className="h-full">
            <Image
              src={Image1}
              alt="りえるん"
              className="object-cover object-right md:object-center h-96"
            ></Image>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
