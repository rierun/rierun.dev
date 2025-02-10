import style from "./wip.module.css";

export default function WIP() {
  return (
    <div
      className={
        "w-full h-[calc(100vh_-_110px)] flex justify-center items-center " +
        style.box
      }
    >
      <div className="bg-white w-full md:w-auto mx-4 md:px-52 py-52 md:py-24 rounded-lg shadow-lg">
        <h1
          className={
            "text-4xl md:text-8xl font-black text-center " + style.text
          }
        >
          現在リニューアル工事中...
        </h1>
        <p className="text-center text-2xl">気まぐれで作ってます～</p>
      </div>
    </div>
  );
}
