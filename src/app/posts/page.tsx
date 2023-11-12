import AddPostForm from "@/components/add-post-form";
import PostsList from "@/components/posts-list";
import prisma from "@/lib/db";
import { Suspense } from "react";

export default async function PostsPage() {
  // get random number of posts from dummyjson.com
  // const randomNumberOfPosts = Math.floor(Math.random() * 3) + 1;
  // const response = await fetch(
  //   `https://dummyjson.com/posts?limit=${randomNumberOfPosts}`,
  //   {
  //     cache: "no-cache",
  //   }
  // );
  // const data = await response.json();

  const posts = await prisma.post.findMany();

  return (
    <main className="text-center pt-16 px-5">
      <AddPostForm />

      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      {/* <Suspense fallback={"Loading..."}>
        <PostsList />
      </Suspense> */}

      <PostsList posts={posts} />
    </main>
  );
}
