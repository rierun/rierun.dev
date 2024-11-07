import MainPage from "@/components/main/mainPage";
import { Metadata } from "next";
import { getBlogData } from "@/utils/blog/getBlogData";
import { DateTime } from "luxon";
import BlogContent from "@/components/blog/blogContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "ぶろぐ!",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogList = await getBlogData((await params).blogId);

  const title = blogList.data ? blogList.data.title : "Unknown";

  const breadcrumbTrail: BreadcrumbTrail[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: title,
      href: ``,
    },
  ];

  return (
    <MainPage breadcrumbs={breadcrumbTrail} title={title}>
      {blogList.data ? (
        <article>
          <section className="border-b-2 border-solid border-b-primary text-xl pb-2 flex flex-row justify-between">
            <p>著者: {blogList.data.author.node.nicename}</p>
            <p>
              公開日時:{" "}
              {DateTime.fromISO(blogList.data.date).toFormat(
                "yyyy年MM月dd日 hh:mm",
              )}
            </p>
          </section>
          <BlogContent content={blogList.data.content} />
        </article>
      ) : (
        <div></div>
      )}
    </MainPage>
  );
}
