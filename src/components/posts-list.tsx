"use client";

import Link from "next/link";
import AddPostForm from "./add-post-form";
import { useOptimistic } from "react";

type PostsListProps = {
  posts: Post[];
};

export default function PostsList({ posts }: PostsListProps) {
  // const response = await fetch(`https://dummyjson.com/posts?limit=10`, {
  //   cache: "no-cache",
  // });
  // const { posts } = await response.json();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
