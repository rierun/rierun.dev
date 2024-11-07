import MainPage from "@/components/main/mainPage";
import { getBlogList } from "@/utils/blog/getBlogList";
import { Metadata } from "next";
import { DateTime } from "luxon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "ぶろぐ!",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Page() {
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

  const blogList = await getBlogList();

  return (
    <MainPage breadcrumbs={breadcrumbTrail} title="Blog">
      <div>
        {(blogList.data &&
          blogList.data.map((post) => (
            <article key={post.id}>
              <Link
                className="border-b-2 border-solid border-b-primary flex flex-col py-2 px-5"
                href={`/blog/${post.id}`}
              >
                <h2 className="text-4xl">{post.title}</h2>
                <div className="flex flex-row gap-5 justify-between">
                  <ul>
                    {post.tags.nodes &&
                      post.tags.nodes.map((tag) => (
                        <li key={tag.id}>{tag.name}</li>
                      ))}
                  </ul>
                  <p>
                    {DateTime.fromISO(post.date).toFormat("yyyy年MM月dd日")}
                  </p>
                </div>
              </Link>
            </article>
          ))) || <p>Loading...</p>}
      </div>
    </MainPage>
  );
}
