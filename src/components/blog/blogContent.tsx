"use client";

import HTMLReactParser from "html-react-parser/lib/index";
import { useEffect } from "react";

export default function BlogContent({ content }: { content: string }) {
  const contentHtml = HTMLReactParser(content);

  return <div className="blog-content">{contentHtml}</div>;
}
