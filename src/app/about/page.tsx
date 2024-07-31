import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";
import Image1 from "@/assets/img/VRChat_2024-07-30_16-46-04.027_1920x1080.png";
import Image from "next/image";
import { M_PLUS_1p } from "next/font/google";

const MPlus1p = M_PLUS_1p({ weight: ["400", "700"], subsets: ["latin"] });

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
      <div className={MPlus1p.className}>
        <div className="flex flex-row h-96">
          <div className="w-full">
            <span className="text-2xl">高校生</span>
            <h2 className="text-8xl font-bold">霜月 りえるん</h2>
            <p className="mt-5">
              すきかってにのんびりしている高校生です! <br />
              このサイトには、自分が作ったガラクタを置いたり、
              <br />
              ブログなどを更新したいと思っています!
            </p>
          </div>
          <div>
            <Image
              src={Image1}
              alt="りえるん"
              className="object-cover object-center h-96"
            ></Image>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
