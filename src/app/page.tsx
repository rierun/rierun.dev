import RootPage from "@/components/root/rootPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム | rierun.dev",
  description: "りえるんのサイト！",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <RootPage />;
}
