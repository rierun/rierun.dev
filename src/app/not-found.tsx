import MainPage from "@/components/main/mainPage";
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <MainPage title="404 Not Found">
      <div className="text-center">
        <h2>ここにはなにもないようだ...</h2>
      </div>
    </MainPage>
  );
}
