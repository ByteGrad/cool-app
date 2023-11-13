// "use client";

import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";

type PostPageProps = {
  params: {
    id: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const data = await response.json();

  // const post = await prisma.post.findUnique({
  //   where: {
  //     id: +params.id,
  //   },
  // });

  // if (!post) {
  //   return notFound();
  // }

  return (
    <main className="px-7 pt-24 text-center">
      {/* <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p> */}
      <SyntaxHighlighter className="text-left">{`function() {
  return "Hello World!";
}`}</SyntaxHighlighter>
    </main>
  );
}
